import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contáctanos</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">Nombre</label>
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
              <div className="form  my-3">
                <label htmlFor="Message">Mensaje</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Escribe tu mensaje"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Enviar
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

export default ContactPage;