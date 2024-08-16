import mountFuji from "../assets/mount-fuji.png";
import locationIcon from "../assets/location-icon.png";

export default function Card() {
  return (
    <section className="trip-card">
      <img className="trip-image" src={mountFuji} alt="mount Fuji" />
      <div className="trip-info-wrapper">
        <div className="trip-location-wrapper">
          <img
            className="trip-location-icon"
            src={locationIcon}
            alt="location icon"
          />
          <span className="trip-country">Japan</span>
          <span className="trip-location">View on Google Maps</span>
        </div>
        <div className="trip-details">
          <h1 className="trip-header">Mount Fuji</h1>
          <h5 className="trip-date">12 Jan, 2021 - 24 Jan, 2021</h5>
          <p className="trip-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr className="card-divider" />
    </section>
  );
}
