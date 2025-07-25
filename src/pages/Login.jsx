import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Verificamos los datos (muy básico, simulación sin backend)
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      // Guardamos usuario activo
      const user = { name: registeredUser.name, email };

      dispatch({ type: "LOGIN", payload: user });
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Iniciar Sesión</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p>¿Nuevo aquí? <Link to="/register" className="text-info">Regístrate</Link></p>
              <div className="text-center">
                <button className="btn btn-dark" type="submit">
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
