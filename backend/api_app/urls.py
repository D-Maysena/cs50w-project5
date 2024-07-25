from django.urls import path
from .views import RegisterUserView, VerifyTokenView, VerifyUserEmail, LoginUserView, TestingAuthenticatedReq, PasswordResetRequestView, PasswordResetConfirm, SetNewPasswordView, LogoutApiView, GoogleOauthSignInview, PublicationsView, CommunityView, CommentsView, OrganizationView, AnimalView, AdoptionView, EventsView, CommunityDetailView, CreateOrDeleteSeguimientoComunidadView, EmailView
from rest_framework_simplejwt.views import (TokenRefreshView)

urlpatterns = [


    path('auth/get-something/', TestingAuthenticatedReq.as_view(), name='just-for-testing'),

    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', VerifyTokenView.as_view(), name='token_verify'),
    # API routes

    path("auth/register/", RegisterUserView.as_view(), name="register-user"),
    path('auth/verify-email/', VerifyUserEmail.as_view(), name='verify'),
    path('auth/login/', LoginUserView.as_view(), name='login-user'),
    path('auth/password-reset/', PasswordResetRequestView.as_view(), name='user-password-reset'),
    path('auth/password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='reset-password-confirm'),
    path('auth/set-new-password/', SetNewPasswordView.as_view(), name='user-set-new-password'),
    path('auth/logout/', LogoutApiView.as_view(), name='logout'),
    path('auth/google/', GoogleOauthSignInview.as_view(), name='google'),

    path('user/publications', PublicationsView.as_view(), name='publications'),
    path('user/publications/comments', CommentsView.as_view(), name='Comments'), 
    path('user/community', CommunityView.as_view(), name='community'),
    path('user/community/follow/', CreateOrDeleteSeguimientoComunidadView.as_view(), name='community-follow'),
    path('user/community/<uuid:pk>/', CommunityDetailView.as_view(), name='community-detail'),
    path('user/organization', OrganizationView.as_view(), name='organization'),
   
    path('user/organization/animal', AnimalView.as_view(), name='add-animal'),
    path('user/organization/adoption', AdoptionView.as_view(), name='add-animal'),
    path('user/organization/event', EventsView.as_view(), name='Event'),
   
    path('user/organization/send-email/', EmailView.as_view(), name='send-email'),
   
    #path('user/<uuid:comunidad_id>/seguidores/', SeguidoresComunidadView.as_view(), name='comunidad-seguidores'),
    #path('user/<str:username>/siguiendo/', SeguidosUsuarioView.as_view(), name='usuario-siguiendo'),
]