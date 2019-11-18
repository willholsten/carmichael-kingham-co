// Resources
import ReactMapGL from "react-map-gl";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Map extends React.PureComponent {
  state = {
    viewport: {
      width: "100%",
      maxWidth: "100%",
      height: "300px",
      latitude: 51.531582,
      longitude: -0.09424,
      zoom: 13
    }
  };
  render() {
    return (
      <div className={styles.Map}>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoid2lsbGhvbHN0ZW4iLCJhIjoiY2szNDh5aGZjMGp0ZTNjcDNqM2U4aGFneCJ9.MiQoXOFClcvy0mbEe7rXNw"
          onViewportChange={viewport => this.setState({ viewport })}
          {...this.state.viewport}
        />
      </div>
    );
  }
}
