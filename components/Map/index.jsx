// Components
import MapMarker from "../MapMarker";
import "mapbox-gl/dist/mapbox-gl.css";

// Resources
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 51.531582,
        longitude: -0.09424,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }
  render() {
    const { viewport } = this.state;
    return (
      <div className={styles.Map}>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoid2lsbGhvbHN0ZW4iLCJhIjoiY2szNDh5aGZjMGp0ZTNjcDNqM2U4aGFneCJ9.MiQoXOFClcvy0mbEe7rXNw"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker latitude={51.531582} longitude={-0.09424}>
            <MapMarker />
          </Marker>
          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>
        </MapGL>
      </div>
    );
  }
}
