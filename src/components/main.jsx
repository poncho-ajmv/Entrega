import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Modelo con nuestra nueva colección"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Nueva Colección</h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Descubre las últimas tendencias de esta temporada. 
                Diseños exclusivos, calidad premium y estilo innovador 
                para que destaques en cada ocasión.
              </p>
              <button className="btn btn-outline-light mt-3">
                Ver Colección
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;