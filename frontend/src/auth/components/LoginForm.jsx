import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchGoogleLogin, fetchLoginUser } from "../helpers/fetch";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export function LoginForm() {

  const [showLoading, setShowLoading] = useState(false)

  const navigate = useNavigate();

  const handleLoginWithGoogle = async (response) => {
    setShowLoading(true);
    const data = await fetchGoogleLogin(response.credential);
    setShowLoading(false);

    if (data.tokens) {
      sessionStorage.setItem("access_token", data.tokens.access);
      sessionStorage.setItem("refresh_token", data.tokens.refresh);        
      sessionStorage.setItem("user_id", data.id);   
    }

    if (data.access_token && data.refresh_token) {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("refresh_token", data.refresh_token);
      sessionStorage.setItem("user_id", data.id);   
    }

    
    toast.success("¡Has iniciado sesión!");

    navigate("/home", {
      replace: true,
    });


  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_ID_CLIENT,
      callback: handleLoginWithGoogle,
    });

    google.accounts.id.renderButton(document.querySelector("#googleLogin"), {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "circle",
      width: "280",
    });

  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setShowLoading(true);
    const response = await fetchLoginUser(data);
    setShowLoading(false);

    sessionStorage.setItem("access_token", response.access_token);
    sessionStorage.setItem("refresh_token", response.refresh_token);


    
    toast.success("¡Has iniciado sesión!");

    navigate("/home", {
      replace: true,
    });
  });

  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                  <a href="#!"></a>
                </div>
                <h2 className="h4 text-center">Inciar sesión</h2>
                <h2 className="fs-6 fw-normal text-center text-tertiary mb-4">
                  Inicia sesión con tu cuenta
                </h2>
                <form onSubmit={onSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          {...register("email", { required: true })}
                        />

                        {errors.email && <span className="text-danger">Correo es requerido.</span>}

                        <label htmlFor="email" className="form-label">
                          Correo
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          {...register("password", { required: true })}
                        />
                        {errors.password && (
                          <span className="text-danger">Contraseña es requerida.</span>
                        )}
                        <label htmlFor="password" className="form-label">
                          Contraseña
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <Link
                        to="/resetPassword"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="link-primary text-decoration-none">
                          ¿Has olvidado la contraseña?
                        </span>
                      </Link>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                      <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                            >
                        {

                          showLoading ? 
                          (
                            <div className="spinner-border text-light" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          )
                          :
                          (
                            
                            "Iniciar sesión"
                            
                          )
                        }
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-tertiary text-center">
                        ¿No tienes una cuenta?
                        <Link to="/register" style={{ textDecoration: "none" }}>
                          <span className="link-primary ms-2"> Regístrate</span>
                        </Link>
                      </p>
                    </div>
                    <div
                      id="googleLogin"
                      className="d-flex justify-content-center mt-3"
                    >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
