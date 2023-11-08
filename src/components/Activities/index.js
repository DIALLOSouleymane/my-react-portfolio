import React from "react";
import "./index.scss";
import Loader from "react-loaders";

const Activities = () => {
  return (
    <>
      <div id="hero-carousel" className="container-fluid carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#hero-carousel" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Photo 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#hero-carousel" 
            data-bs-slide-to="1" 
            aria-label="Photo 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#hero-carousel" 
            data-bs-slide-to="2" 
            aria-label="Photo 3"
          ></button>
          <button 
            type="button" 
            data-bs-target="#hero-carousel" 
            data-bs-slide-to="3" 
            aria-label="Photo 4"
          ></button>
          <button 
            type="button" 
            data-bs-target="#hero-carousel" 
            data-bs-slide-to="4" 
            aria-label="Photo 5"
          ></button>
        </div>

        {/* Albums */}
        <div className="carousel-inner">
          <div className="carousel-item active container-item">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/my-react-portfolio-database.appspot.com/o/social-activities-photos%2FDSC08610.JPG?alt=media&token=32ff5b20-d37f-4f43-8b93-6d36591ac5a0&_gl=1*975fuh*_ga*MTY4MDM0OTUwOC4xNjk4NTE0NTM5*_ga_CW55HF8NVT*MTY5OTM2MTIzNC4xMC4xLjE2OTkzNjE1MTAuMTYuMC4w" 
              className="d-block w-100 container-image" 
              alt="Photo 1" />
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
                src="https://firebasestorage.googleapis.com/v0/b/my-react-portfolio-database.appspot.com/o/social-activities-photos%2FDSC08615.JPG?alt=media&token=5cded8c6-d73a-4d4e-b262-e9b995712e94&_gl=1*12597fc*_ga*MTY4MDM0OTUwOC4xNjk4NTE0NTM5*_ga_CW55HF8NVT*MTY5OTM2MTIzNC4xMC4xLjE2OTkzNjE5MDAuNjAuMC4w"
                className="d-block w-100 container-image" 
                alt="Photo 2" />
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
              src="https://firebasestorage.googleapis.com/v0/b/my-react-portfolio-database.appspot.com/o/social-activities-photos%2FIMG-20210128-WA0011.jpg?alt=media&token=fb22a36e-6741-4d94-a6c1-98c11639c445&_gl=1*1v8najn*_ga*MTY4MDM0OTUwOC4xNjk4NTE0NTM5*_ga_CW55HF8NVT*MTY5OTM2MTIzNC4xMC4xLjE2OTkzNjIwMDQuNjAuMC4w" 
                className="d-block w-100 container-image" 
                alt="Photo 3" />
            <div className="carousel-caption">
              <h3 className="display-1 fw-bolder text-capitalize">Titre 3</h3>
              <p className="fs-3">Discover the hidden world</p>
              <button 
                className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#description3"
                aria-expanded="false" 
                aria-controls="description3"
              >Description</button>
            </div>
          </div>

          <div className="carousel-item container-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/my-react-portfolio-database.appspot.com/o/social-activities-photos%2FIMG-20210128-WA0004.jpg?alt=media&token=9fcd2092-2ab8-4d92-8c63-2e9834f68e1a&_gl=1*77wn5c*_ga*MTY4MDM0OTUwOC4xNjk4NTE0NTM5*_ga_CW55HF8NVT*MTY5OTM3OTQ2MS4xMS4xLjE2OTkzNzk0NzAuNTEuMC4w" 
                className="d-block w-100 container-image" 
                alt="Photo 4" />
            <div className="carousel-caption">
              <h3 className="display-1 fw-bolder text-capitalize">Titre 3</h3>
              <p className="fs-3">Discover the hidden world</p>
              <button 
                className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#description4"
                aria-expanded="false" 
                aria-controls="description4"
              >Description</button>
            </div>
          </div>

          <div className="carousel-item container-item">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/my-react-portfolio-database.appspot.com/o/social-activities-photos%2FIMG-20210728-WA0052.jpg?alt=media&token=d5099506-018f-4bdd-9cb5-0ec317731a76&_gl=1*fwnfhu*_ga*MTY4MDM0OTUwOC4xNjk4NTE0NTM5*_ga_CW55HF8NVT*MTY5OTM3OTQ2MS4xMS4xLjE2OTkzODAwODguNC4wLjA."
                className="d-block w-100 container-image" 
                alt="Photo 5" />
            <div className="carousel-caption">
              <h3 className="display-1 fw-bolder text-capitalize">Titre 3</h3>
              <p className="fs-3">Discover the hidden world</p>
              <button 
                className="btn btn-primary m-3 px-4 py-2 fs-3 text-uppercase"
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#description10"
                aria-expanded="false" 
                aria-controls="description10"
              >Description</button>
            </div>
          </div>
        </div>

        {/* Controles */}
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

        {/* Descriptions */}
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
        <div className="collapse fs-3" id="description4">
          <div className="card card-body">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </div>
        </div>
        <div className="collapse fs-3" id="description5">
          <div className="card card-body">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
    
  );
};

export default Activities;