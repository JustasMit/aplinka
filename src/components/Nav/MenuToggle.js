import React from "react"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

const MenuToggle = (props) => {
	return (
		<IconButton
			onClick={() => props.setMenuOpen(!props.menuOpen)}
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{
        ml: 1,
				// "&:hover": {
					// transition: "0.3s",
					// backgroundColor: "#fcfcfcff",
				// },
			}}
		>
			{props.menuOpen ? (
				<CloseIcon style={{ color: "#000000ff", fontSize: 50 }} />
			) : (
				<MenuIcon style={{ color: "#000000ff", fontSize: 50 }} />
			)}
		</IconButton>
	)
}

export default MenuToggle
