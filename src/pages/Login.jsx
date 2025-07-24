import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Iniciar Sesión</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="floatingInput">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Contraseña"
                />
              </div>
              <div className="my-3">
                <p>¿Nuevo aquí? <Link to="/register" className="text-decoration-underline text-info">Regístrate</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;