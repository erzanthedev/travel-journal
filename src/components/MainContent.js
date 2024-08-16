import Card from "./Card";
import data from "../data.js";

export default function MainContent() {
  const trips = data.map((trip) => {
    return <Card key={trip.id} {...trip} />;
  });
  return <main>{trips}</main>;
}
