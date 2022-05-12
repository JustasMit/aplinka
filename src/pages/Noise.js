import React from "react"
import Iframe from "react-iframe"

const Noise = () => {
	return (
		<Iframe
			url="https://vplanas.maps.arcgis.com/apps/webappviewer3d/index.html?id=1fd7d1bb7fdc4d638d9f114a4d8b8a9f"
			position="static"
			width="100%"
			height={window.innerHeight - 90}
		/>
	)
}

export default Noise
