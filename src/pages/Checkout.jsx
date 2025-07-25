import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">No hay artículos en el carrito</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const handlePayment = (e) => {
      e.preventDefault();

      // Recolectar datos básicos del formulario (basado en el orden de inputs)
      const formData = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        address: e.target[3].value,
        address2: e.target[4].value,
        country: e.target[5].value,
        state: e.target[6].value,
        zip: e.target[7].value,
      };

      const total = Math.round(subtotal + shipping);

      // Redireccionar a página de éxito con datos
      navigate("/payment-success", {
        state: {
          formData,
          products: state,
          total,
        },
      });

      // Limpiar carrito
      dispatch({ type: "CLEAR_CART" });
    };

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Resumen del pedido</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      Productos ({totalItems})<span>Q{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      Envío <span>Q{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>Total a pagar</strong>
                      <strong>Q{Math.round(subtotal + shipping)}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Dirección de facturación</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handlePayment} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-sm-6 my-1">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-12 my-1">
                        <label className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="col-12 my-1">
                        <label className="form-label">Dirección</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Dirección 2 (Opcional)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-5 my-1">
                        <label className="form-label">País</label>
                        <select className="form-select" required>
                          <option value="">Seleccionar...</option>
                          <option>Guatemala</option>
                        </select>
                      </div>
                      <div className="col-md-4 my-1">
                        <label className="form-label">Estado</label>
                        <select className="form-select" required>
                          <option value="">Seleccionar...</option>
                          <option>Ciudad de Guatemala</option>
                        </select>
                      </div>
                      <div className="col-md-3 my-1">
                        <label className="form-label">Código postal</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Pago</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label className="form-label">Nombre en la tarjeta</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Número de tarjeta</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Expiración</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">CVV</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary" type="submit">
                      Continuar al pago
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Pago</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
