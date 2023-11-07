import React from "react";
import "./index.scss";

const Activities = () => {
  return (
    <div id="hero-carousel" className="container-fluid carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button 
          type="button" 
          data-bs-target="#hero-carousel" 
          data-bs-slide-to="0" 
          className="active" 
          aria-current="true" 
          aria-label="Slide 1"
        ></button>
        <button 
          type="button" 
          data-bs-target="#hero-carousel" 
          data-bs-slide-to="1" 
          aria-label="Slide 2"
        ></button>
        <button 
          type="button" 
          data-bs-target="#hero-carousel" 
          data-bs-slide-to="2" 
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active container-item">
        <img 
          src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" 
          className="d-block w-100 container-image" 
          alt="Slide 1" />
        <div className="carousel-caption">
          <h3 className="display-1 fw-bolder text-capitalize">The Aurora Tours</h3>
          <p className="fs-3">Discover the hidden world</p>
          <button 
            className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#description1"
            aria-expanded="false" 
            aria-controls="description1"
          >Description</button>
        </div>
        </div>

        <div className="carousel-item container-item">
          <img 
              src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100"
              className="d-block w-100 container-image" 
              alt="Slide 1" />
          <div className="carousel-caption">
            <h3 className="display-1 fw-bolder text-capitalize">Titre 2</h3>
            <p className="fs-3">Discover the hidden world</p>
            <button 
              className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#description2"
              aria-expanded="false" 
              aria-controls="description2"
            >Description</button>
          </div>
        </div>

        <div className="carousel-item container-item">
          <img 
            src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" 
              className="d-block w-100 container-image" 
              alt="Slide 1" />
          <div className="carousel-caption">
            <h3 className="display-1 fw-bolder text-capitalize">Titre 3</h3>
            <p className="fs-3">Discover the hidden world</p>
            <button 
              className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#description2"
              aria-expanded="false" 
              aria-controls="description2"
            >Description</button>
            </div>
        </div>
      </div>
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#hero-carousel" 
        data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#hero-carousel" 
        data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button>
      <div className="collapse fs-3" id="description1">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default 
          but revealed when the user activates the relevant trigger.
        </div>
      </div>
      <div className="collapse fs-3" id="description2">
        <div className="card card-body">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </div>
      </div>
      <div className="collapse fs-3" id="description3">
        <div className="card card-body">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </div>
      </div>
    </div>
    
  );
};

export default Activities;