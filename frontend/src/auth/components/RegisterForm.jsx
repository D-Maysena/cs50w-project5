import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchRegisterUser, fetchVerifyEmail, fetchGoogleLogin } from "../helpers/fetch";
import { toast } from "react-toastify";


export function RegisterForm() {
  const [step, setStep] = useState(1);
  
  const [showLoading, setShowLoading] = useState(false)


  const navigate = useNavigate();

  const handleLoginWithGoogle = async (response) => {
    setShowLoading(true);
    const data = await fetchGoogleLogin(response.credential);
    setShowLoading(false);

    if (data.tokens) {
      sessionStorage.setItem("access_token", data.tokens.access);
      sessionStorage.setItem("refresh_token", data.tokens.refresh);        
    }

    if (data.access_token && data.refresh_token) {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("refresh_token", data.refresh_token);   
    }

    toast.success("¡Te has registrado con Google!");


    navigate("/home", {
      replace: true,
    });
  }

  useEffect(() => {
      google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_ID_CLIENT,
          callback: handleLoginWithGoogle
      })

      google.accounts.id.renderButton(document.querySelector("#googleLogin"), {
          theme: "outline", size: "large", text: "continue_with", shape: "circle", width: "280"
      })
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setShowLoading(true);
    const response = await fetchRegisterUser(data);
    setShowLoading(false);


    if (response.email && response.email.length > 0) {
      toast.warn("Usuario con este correo ya existe");

    } else {
      setStep(2);
    }

  });

  const handleOtpInput = (e) => {
    const input = e.target;
    const nextInput = input.nextElementSibling;

    if (input.value.length === 1 && nextInput && nextInput.tagName === "INPUT") {
      nextInput.focus();
    }
  };

  const handleOtpSubmit = async (data) => {
    const otp = `${data.first}${data.second}${data.third}${data.fourth}${data.fifth}${data.sixth}`;
    if (otp.length === 6) {
      const response = await fetchVerifyEmail(otp);

      toast.success("Cuenta verificada con exito. Inicia sesión");


      navigate('/login', {replace:true})

    } else {
      toast.warn("Complete todos los campos del código.");
    }
  };


  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-7">
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h4 text-center">Regístrate</h2>
                      <h3 className="fs-6 fw-normal text-tertiary text-center m-0">Ingrese sus datos para registrarse</h3>
                    </div>
                  </div>
                </div>
                {step === 1 && (
                  <form onSubmit={onSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name"
                            {...register("first_name", { required: true })} />
                          {
                            errors.first_name && <span className="text-danger">Nombre es requerido</span>
                          }
                          <label htmlFor="firstName" className="form-label">Primer nombre</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="second_name" id="second_name" placeholder="First Name"
                            {...register("second_name", { required: true })} />
                            {
                            errors.second_name && <span className="text-danger">Segundo nombre es requerido</span>
                            }
                          <label htmlFor="lastName" className="form-label">Segundo nombre</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="first_surname" id="first_surname" placeholder="First Name"
                            {...register("first_surname", { required: true })} />
                            
                            {
                              errors.first_surname && <span className="text-danger">Primer apellido es requerido</span>
                            }
                          <label htmlFor="lastName" className="form-label">Primer apellido</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="lastName" id="lastName" placeholder="First Name"
                            {...register("second_surname", { required: true })} />
                            {
                              errors.second_surname && <span className="text-danger">Segundo apellido es requerido</span>
                            }
                          <label htmlFor="lastName" className="form-label">Segundo apellido</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com"
                            {...register("email", { required: true })} />
                            {
                              errors.email && <span className="text-danger">Correo es requerido</span>
                            }
                          <label htmlFor="email" className="form-label">Correo</label>
                        </div>
                      </div>
                      {<div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="address" className="form-control" name="address" id="address" placeholder="name@example.com"
                            {...register("address", { required: true })} />
                            {
                              errors.address && <span className="text-danger">Dirección es requerida</span>
                            }
                          <label htmlFor="address" className="form-label">Dirección</label>
                        </div>
                      </div>}
                      {<div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="cellphone" className="form-control" name="phone_number" id="phone_number" placeholder="name@example.com"
                            {...register("phone_number", { required: true })} />
                            {
                              errors.phone_number && <span className="text-danger">Teléfono es requerido</span>
                            }
                          <label htmlFor="phone_number" className="form-label">Teléfono</label>
                        </div>
                      </div>}
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control" name="password" id="password" placeholder="Password"
                            {...register("password", { required: true })} />
                            {
                              errors.password && <span className="text-danger">Contraseña es requerida</span>
                            }
                          <label htmlFor="password" className="form-label">Contraseña</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control" name="password2" id="password2" placeholder="Password"
                            {...register("password2", { required: true })} />
                            {
                              errors.password2 && <span className="text-danger">Confirmar Contraseña es requerido</span>
                            }
                          <label htmlFor="password2" className="form-label">Confirmar contraseña</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary" type="submit">
                          {

                            showLoading ? 
                            (
                              <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            )
                            :
                            (
                              
                              "Crear cuenta"
                              
                            )

                          }
                            
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={handleSubmit(handleOtpSubmit)}>
                    <p className="text-center mb-4">Ingresa el código que fue enviado a tu correo electrónico.</p>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="container height-100 d-flex justify-content-center align-items-center">
                          <div className="position-relative">
                            <div className="card p-2 text-center">
                              <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="first"
                                  maxLength="1"
                                  {...register("first", { required: true })}
                                  onInput={handleOtpInput}
                                />
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="second"
                                  maxLength="1"
                                  {...register("second", { required: true })}
                                  onInput={handleOtpInput}
                                />
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="third"
                                  maxLength="1"
                                  {...register("third", { required: true })}
                                  onInput={handleOtpInput}
                                />
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="fourth"
                                  maxLength="1"
                                  {...register("fourth", { required: true })}
                                  onInput={handleOtpInput}
                                />
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="fifth"
                                  maxLength="1"
                                  {...register("fifth", { required: true })}
                                  onInput={handleOtpInput}
                                />
                                <input
                                  className="m-2 text-center form-control rounded"
                                  type="text"
                                  id="sixth"
                                  maxLength="1"
                                  {...register("sixth", { required: true })}
                                  onInput={handleOtpInput}
                                />
                              </div>
                              {errors.first && <span>Todos los campos del código son requeridos</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-lg" type="submit">Verificar Código</button>
                        </div>
                      </div>
                      
                    </div>
                  </form>

                )}
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-tertiary text-center">¿Ya tienes una cuenta?
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        <span href="#!" className="link-primary text-decoration-none ms-2">
                          Iniciar sesión
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-2 ">O continúa con</p>
                    <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                      <div id="googleLogin" ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
