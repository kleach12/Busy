import "./Home.css";
import LoggedOutHomeMap from "./Features/LoggedOutHomeMap";
import { useJsApiLoader } from "@react-google-maps/api";
import Banner from "./Features/Banner";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div id='load-screen'> </div>;

  return (
    <div className="flex">
      <LoggedOutHomeMap/>
      <Banner/>
    </div>
  );
}
