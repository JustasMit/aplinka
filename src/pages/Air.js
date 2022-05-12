import React from "react"
import Iframe from "react-iframe"
import Container from "@mui/material/Container"

const Air = () => {
	return (
		// <Container
		// 	sx={{
		// 		height: window.innerHeight - 90,
		// 		backgroundColor: "primary.dark",
		// 	}}
		// 	maxWidth="false"
		// >
		// </Container>
			<Iframe
				url="https://experience.arcgis.com/experience/c7d16712c5ab4c6087a1eede67491329/"
				position="static"
				width="100%"
				height={window.innerHeight - 90}
			/>
	)
}

export default Air
