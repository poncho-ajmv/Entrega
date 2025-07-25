import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    // Guardamos los datos en localStorage simulando un "registro"
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    // Redirigimos al login
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Registro</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="my-3">
                <label>Nombre completo</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <p>¿Ya tienes cuenta? <Link to="/login" className="text-info">Inicia sesión</Link></p>
              <div className="text-center">
                <button className="btn btn-dark" type="submit">
                  Registrarse
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

export default Register;
