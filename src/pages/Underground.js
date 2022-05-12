import React from "react"
import Iframe from "react-iframe"

const Underground = () => {
	return (
		<Iframe
			url="https://www.arcgis.com/apps/dashboards/9f4aab40e8d94ba083ab8669a5af9b1e"
			position="static"
			width="100%"
			height={window.innerHeight - 90}
		/>
	)
}

export default Underground
