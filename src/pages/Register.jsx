import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Registro</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label htmlFor="Name">Nombre completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Ingresa tu nombre"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="my-3">
                                <p>¿Ya tienes una cuenta? <Link to="/login" className="text-decoration-underline text-info">Iniciar sesión</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register