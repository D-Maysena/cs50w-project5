import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {  fetchResetPassword } from "../helpers/fetch"
import React, { useState } from "react";

export const ResetPasswordGmailForm = () => {
    const [step, setStep] = useState(1);

    const { register, handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        const response = await fetchResetPassword(data)
        if (response.message === "we have sent you a link to reset your password") {
            console.log(response)
            console.log("éxito")
            setStep(2);

        }
        else {
            console.log("error")
        }
    })
  

    return (
        <section class="bg-light py-3 py-md-5 py-xl-8">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div class="mb-5">
                            <div class="text-center mb-4">
                                <a href="#!">
                                </a>
                            </div>
                            <h4 class="text-center mb-4">Restablecer contraseña</h4>
                        </div>
                        <div class="card border border-light-subtle rounded-4">
                            <div class="card-body p-3 p-md-4 p-xl-5">
                                {step === 1 && (
                                    <form onSubmit={onSubmit}>
                                        <p class="text-center mb-4">Ingresa la dirección de correo electrónico asociada a tu cuenta para restablecer tu contraseña. </p>
                                        <div class="row gy-3 overflow-hidden">
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com"
                                                        {...register("email", { required: true })} />
                                                    {
                                                        errors.email && <span>Correo es requerida</span>
                                                    }
                                                    <label for="email" class="form-label">Correo</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button class="btn btn-primary btn-lg" type="submit">Restablecer contraseña</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                                {step === 2 && ( 
                                         <div className="row gy-3 overflow-hidden">
                                             <div className="col-12">
                                                 <div className="container height-100 d-flex justify-content-center align-items-center">
                                                     <div className="position-relative">
                                                         <div className=" p-2 text-center">
                                                           Te hemos enviado un link a tu correo para restablecer la contraseña
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="col-12">
                                                 
                                             </div>
                                         </div>
                                     
                                )}
                            </div>

                        </div>
                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <span class="link-secondary text-decoration-none">Iniciar sesión</span>
                            </Link>

                            <Link to="/register" style={{ textDecoration: 'none' }} >
                                <span class="link-secondary text-decoration-none">Registrarse</span>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


