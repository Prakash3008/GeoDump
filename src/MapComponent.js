import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";

const mapStyles = {
	width: "100%",
	height: "100%",
};

export class MapComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [
				{ latitude: 11.0536938, longitude: 78.0138657 },
				{ latitude: 47.359423, longitude: -122.021071 },
				{ latitude: 47.2052192687988, longitude: -121.988426208496 },
				{ latitude: 47.6307081, longitude: -122.1434325 },
				{ latitude: 47.3084488, longitude: -122.2140121 },
				{ latitude: 0.5524695, longitude: -122.0425407 },
			],
		};
	}

	displayMarkers = () => {
		return this.state.stores.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude,
					}}
					onClick={() => console.log("You clicked me!")}
				/>
			);
		});
	};
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				style={mapStyles}
				initialCenter={{ lat: 11.0536938, lng: 77.0138657 }}
			>
				{this.displayMarkers()}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyDmLAb6HEv-2jpwE9G2tZMUaxrzwj-FFaw",
})(MapComponent);
