import React from "react"
import Iframe from "react-iframe"

const Air = () => {
	return (
		<Iframe
			url="https://experience.arcgis.com/experience/c7d16712c5ab4c6087a1eede67491329/"
			position="static"
			width="100%"
			height={window.innerHeight - 90}
		/>
	)
}

export default Air
