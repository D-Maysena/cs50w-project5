import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRegisterUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...userData }),
  });

  if (!response.ok) {
    toast.warn("Error al registrar el usuario");
  }

  const data = await response.json();
  return data;
};

export const fetchLoginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...userData }),
  });
  const data = await response.json();
  return data;
};

export const fetchResetPassword = async (userData) => {
  const response = await fetch(`${API_URL}/auth/password-reset/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...userData }),
  });
  const data = await response.json();
  return data;
};

export const fetchTokens = async (uidb64, token) => {
  const response = await fetch(
    `http://localhost:8000/api/v1/auth/password-reset-confirm/${uidb64}/${token}/`
  );
  const data = await response.json();
  return data;
};

export const fetchResetPasswordConfirm = async (uidb64, token, passwords) => {
  const response = await fetch(
    `http://localhost:8000/api/v1/auth/set-new-password/`,
    {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...passwords, uidb64, token }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchVerifyEmail = async (otp) => {
  otp = { otp: otp };
  const response = await fetch(`${API_URL}/auth/verify-email/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...otp }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchGoogleLogin = async (access_token) => {
  const response = await fetch(`${API_URL}/auth/google/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ access_token }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchLogout = async () => {
  const refresh_token = sessionStorage.getItem("refresh_token")
  const access_token = sessionStorage.getItem("access_token")

  

  try {
    const response = await fetch(`${API_URL}/auth/logout/`, {
      method: "POST",
      headers: { 
        "Content-type": "application/json",
        "Authorization": `Bearer ${access_token}` 
      },
      body: JSON.stringify({ refresh_token }),
    });

    if (!response.ok) {
      window.location.href = "/login";
    }

    sessionStorage.removeItem("access_token")
    sessionStorage.removeItem("refresh_token")

  } catch (error) {
    throw error;
  }
};


export const verifyToken = async () => {
  const access_token = sessionStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/auth/token/verify/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ access_token }),
  });

  if (!response.ok) {
    window.location.href = "/login";
  }
};

export const refreshToken = async () => {
  const refresh_token = sessionStorage.getItem("refresh_token");
  const response = await fetch(`${API_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refresh_token }),
  });

  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("access_token", data.access);
  } else {
    window.location.href = "/login";
  }
};
