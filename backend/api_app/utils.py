import pyotp
import base64
import random
import requests

from .models import User, OneTimePassword
from django.core.mail import EmailMessage
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail

from google.auth.transport import requests
from google.oauth2 import id_token
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed



class Google():
    @staticmethod
    def validate(access_token):
        try:
            id_info=id_token.verify_oauth2_token(access_token, requests.Request(), clock_skew_in_seconds = 100)
            if 'accounts.google.com' in id_info['iss']:
                return id_info
        except:
            return "the token is either invalid or has expired"
    
def register_social_user(provider, email, first_name, last_name):
    old_user=User.objects.filter(email=email)
    if old_user.exists():
        if provider == old_user[0].auth_provider:
            register_user=authenticate(email=email, password=settings.SOCIAL_AUTH_PASSWORD)

            return {
                "id": register_user.id,
                'full_name':register_user.get_full_name,
                'email':register_user.email,
                'tokens':register_user.tokens()
            }
        else:
            raise AuthenticationFailed(
                detail=f"please continue your login with {old_user[0].auth_provider}"
            )
    else:
        new_user={
            'email':email,
            'first_name':first_name,
            'first_surname':last_name,
            'password':settings.SOCIAL_AUTH_PASSWORD
        }
        user=User.objects.create_user(**new_user)
        user.auth_provider=provider
        user.is_verified=True
        user.save()
        login_user=authenticate(email=email, password=settings.SOCIAL_AUTH_PASSWORD)
    
        tokens=login_user.tokens()
        print(login_user.id)
        return {
            "id": login_user.id,
            'email':login_user.email,
            'full_name':login_user.get_full_name,
            "access_token":str(tokens.get('access')),
            "refresh_token":str(tokens.get('refresh'))
        }


def generate_secret():
    return base64.b32encode(bytearray(random.getrandbits(8) for _ in range(10))).decode('utf-8')

def generate_otp(interval=300):

    secret = generate_secret()
    totp = pyotp.TOTP(secret, interval=interval)
    otp = totp.now()

    data = {
        "code": otp,
        "secret": secret
    }
    return data

def verify_otp(otp, secret, interval=300):
    totp = pyotp.TOTP(secret, interval=interval)
    return totp.verify(otp)

def send_generated_otp_to_email(email): 
    subject = "One time passcode for Email verification"
    otp=generate_otp() 

    user = User.objects.get(email=email)

    current_site = 'puntito.com'

    email_body=f"Hi {user.first_name} thanks for signing up on {current_site} please verify your email with the \n one time passcode {otp['code']}"
    
    from_email=settings.EMAIL_HOST_USER
    otp_obj=OneTimePassword.objects.create(user=user, otp=otp['code'], secret=otp['secret'])

    #send the email 
    send_mail(
        subject=subject,
        message=email_body,
        from_email=from_email,
        recipient_list=[user.email]
    )


def send_normal_email(data):
    send_mail(
        subject=data['email_subject'],
        message=data['email_body'],
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[data['to_email']]
    )


