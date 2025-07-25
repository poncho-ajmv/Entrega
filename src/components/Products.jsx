import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Productos = () => {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState(datos);
  const [cargando, setCargando] = useState(false);
  let componenteMontado = true;

  const dispatch = useDispatch();

  const agregarProducto = (producto) => {
    dispatch(addCart(producto));
  };

  useEffect(() => {
    const obtenerProductos = async () => {
      setCargando(true);
      const respuesta = await fetch("https://fakestoreapi.com/products/");
      if (componenteMontado) {
        setDatos(await respuesta.clone().json());
        setFiltro(await respuesta.json());
        setCargando(false);
      }

      return () => {
        componenteMontado = false;
      };
    };

    obtenerProductos();
  }, []);

  const Cargando = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filtrarProducto = (categoria) => {
    const listaActualizada = datos.filter((item) => item.category === categoria);
    setFiltro(listaActualizada);
  };

  const MostrarProductos = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFiltro(datos)}
          >
            Todos
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filtrarProducto("men's clothing")}
          >
            Ropa para Hombres
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filtrarProducto("women's clothing")}
          >
            Ropa para Mujeres
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filtrarProducto("jewelery")}
          >
            Joyería
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filtrarProducto("electronics")}
          >
            Electrónicos
          </button>
        </div>

        {filtro.map((producto) => {
          return (
            <div
              id={producto.id}
              key={producto.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={producto.id}>
                <img
                  className="card-img-top p-3"
                  src={producto.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {producto.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {producto.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">Q {producto.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + producto.id}
                    className="btn btn-dark m-1"
                  >
                    Comprar
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Agregado al carrito");
                      agregarProducto(producto);
                    }}
                  >
                    Carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Últimos Productos</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {cargando ? <Cargando /> : <MostrarProductos />}
        </div>
      </div>
    </>
  );
};

export default Productos;