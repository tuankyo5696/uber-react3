import React, { Component } from 'react';
import Map from './../components/Map/Map';
class Home extends Component {

	render() {
		return(
			<div>
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='500px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;