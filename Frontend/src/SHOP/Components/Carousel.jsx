import IMG1 from "../IMGS/Carousel(1).jpg";
import IMG2 from "../IMGS/Carousel(2).jpg";
import IMG3 from "../IMGS/Carousel(3).jpg";

export function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carr-per">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={IMG2}
            className="d-block w-100 img-fluid carrusel-img"
            alt="..."
          />
          <div className="carousel-caption">
            <h5>Big discounts just for you!</h5>
            <p>Up to 50% Off selected items</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={IMG1}
            className="d-block w-100 img-fluid carrusel-img"
            alt="..."
          />
          <div className="carousel-caption">
            <h5>Best sellers this week</h5>
            <p>Top rated products</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={IMG3}
            className="d-block w-100 img-fluid carrusel-img"
            alt="..."
          />
          <div className="carousel-caption">
            <h5>Fast & free delivery available</h5>
            <p>Free shoping for orders over 30$</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
