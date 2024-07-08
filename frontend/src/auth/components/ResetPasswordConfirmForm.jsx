import { useParams, Link } from "react-router-dom";
import { fetchTokens, fetchResetPasswordConfirm } from "../helpers/fetch";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ResetPasswordConfirmForm = () => {
  const { uidb64, token } = useParams();
  const [isValidToken, setIsValidToken] = useState(true); // Estado para verificar el token
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  const [redirectTimer, setRedirectTimer] = useState(false); // Estado para controlar la redirección

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();
  
  useEffect(() => {
    const verifyToken = async () => {
      if (uidb64 && token) {
        const tokens = await fetchTokens(uidb64, token);
        console.log("tokens", tokens);
        if (tokens.message === "Token is invalid or has expired.") {
          setIsValidToken(false);
          setError("token", {
            type: "manual",
            message: "El token ha expirado"
          });
        } else {
          setIsValidToken(true);
          setSuccessMessage(""); // Limpiar mensaje de éxito si el token es válido
        }
      }
    };

    verifyToken();
  }, [uidb64, token, setError]);

  const onSubmit = handleSubmit(async (passwords) => {
    if (uidb64 && token && isValidToken) {
      const response = await fetchResetPasswordConfirm(uidb64, token, passwords);
      console.log("Response", response);
     
        setSuccessMessage("La contraseña se ha modificado con éxito.");
        setRedirectTimer(true); // Iniciar temporizador para redirigir después de éxito
        <Redirect push to="login" />
      
    }
  });

 

  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="mb-5">
              <h4 className="text-center mb-4">Restablecer contraseña</h4>
            </div>
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <form onSubmit={onSubmit}>
                  <p className="text-center mb-4">Ingresa la nueva contraseña</p>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Contraseña"
                          {...register("password", { required: true })}
                        />
                        {errors.password && <span>Contraseña es requerida</span>}
                        <label htmlFor="password" className="form-label">
                          Contraseña
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Confirmar contraseña"
                          {...register("confirm_password", { required: true })}
                        />
                        {errors.confirm_password && (
                          <span>Confirmar contraseña es requerida</span>
                        )}
                        <label htmlFor="confirm_password" className="form-label">
                          Confirmar contraseña
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Restablecer contraseña
                        </button>
                      </div>
                    </div>
                    {errors.token && (
                      <div className="col-12 text-center mt-2">
                        <span className="text-danger">{errors.token.message}</span>
                      </div>
                    )}
                    {successMessage && (
                      <div className="col-12 text-center mt-2">
                        <span className="text-success">{successMessage}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="link-secondary text-decoration-none">Iniciar sesión</span>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span className="link-secondary text-decoration-none">Registrarse</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
