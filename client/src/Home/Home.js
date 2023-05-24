import "./Home.css";
import LoggedOutHomeMap from "./Features/LoggedOutHomeMap";
import { useJsApiLoader } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <h2> Loading...</h2>;

  return (
    <div className="flex">
      <LoggedOutHomeMap/>
      <h2 id ="top-layer"> Busy </h2>
    </div>
  );
}
