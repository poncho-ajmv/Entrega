import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components";

const PaymentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-5">
        <h3>No hay información de la orden</h3>
        <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
          Volver al menú principal
        </button>
      </div>
    );
  }

  const { formData, products, total } = state;

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">🎉 ¡Pago realizado con éxito!</h2>

        <div className="row">
          <div className="col-md-6">
            <h4>Datos del comprador</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Nombre: {formData.firstName} {formData.lastName}
              </li>
              <li className="list-group-item">Correo: {formData.email}</li>
              <li className="list-group-item">Dirección: {formData.address}</li>
              <li className="list-group-item">
                País: {formData.country}, Estado: {formData.state}
              </li>
              <li className="list-group-item">
                Código postal: {formData.zip}
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Productos comprados</h4>
            <ul className="list-group">
              {products.map((item, i) => (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={i}
                >
                  {item.title} x{item.qty}
                  <span>Q{item.price * item.qty}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>Q{total}</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Volver al menú principal
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
