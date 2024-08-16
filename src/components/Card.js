import locationIcon from "../assets/location-icon.png";

export default function Card(props) {
  const {
    title,
    description,
    startDate,
    endDate,
    googleMapsUrl,
    imageUrl,
    location,
  } = props;

  return (
    <section className="trip-card">
      <img className="trip-image" src={imageUrl} alt={title} />
      <div className="trip-info-wrapper">
        <div className="trip-location-wrapper">
          <img
            className="trip-location-icon"
            src={locationIcon}
            alt="location icon"
          />
          <span className="trip-country">{location}</span>
          <span className="trip-location">
            <a className="map-link" href={googleMapsUrl}>
              View on Google Maps
            </a>
          </span>
        </div>
        <div className="trip-details">
          <h1 className="trip-header">{title}</h1>
          <h5 className="trip-date">
            {startDate} - {endDate}
          </h5>
          <p className="trip-text">{description}</p>
        </div>
      </div>
      <hr className="card-divider" />
    </section>
  );
}
