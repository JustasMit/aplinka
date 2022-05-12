import React, { useState, useEffect } from "react"
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Home from "../../pages/Home"
import HomeIcon from "./HomeIcon"
import MenuToggle from "./MenuToggle"
import LanguageSelect from "./LanguageSelect"
import LanguageList from "./LanguageList"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Toolbar from "@mui/material/Toolbar"
import Collapse from "@mui/material/Collapse"
import Divider from "@mui/material/Divider"

import "../../css/nav.css"
import { Typography } from "@mui/material"

const Nav = () => {
	const location = useLocation()
	const { t, i18n } = useTranslation()
	const { lng } = useParams()
	const navigate = useNavigate()

	const [menuOpen, setMenuOpen] = useState(false)
	const [languageOpen, setLanguageOpen] = useState(false)

	useEffect(() => {
		if (lng === "lt" || lng === "en") {
			i18n.changeLanguage(lng)
		} else {
			navigate(`/lt`)
		}
	}, [lng])

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" sx={{ backgroundColor: "#fcfcfcff", height: 90 }}>
					<Toolbar className="homeNav">
						<HomeIcon />
						{location.pathname !== `/${i18n.language}` ? (
							<MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
						) : (
							<Box ></Box>
						)}
						<Typography sx={{ ml: location.pathname !== `/${i18n.language}` ? 1 : 5, color: "#000000ff" }} variant="button" fontSize={40}>
							Aplinkos duomenų vartai
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>

			{location.pathname !== `/${i18n.language}` && (
				<Collapse sx={{ width: "100%", position: "absolute", zIndex: 99 }} in={menuOpen}>
					<Home setMenuOpen={setMenuOpen} />
				</Collapse>
			)}

			<Outlet />
		</>
		// <>
		// 	<Box sx={{ flexGrow: 1 }}>
		// 		<AppBar position="static" sx={{ backgroundColor: "black", height: 90 }}>
		// 			<Toolbar className="homeNav">
		// 				<HomeIcon />

		// 				{location.pathname !== `/${i18n.language}` && (
		// 					<Divider
		// 						sx={{ mr: 2, backgroundColor: "#D42323" }}
		// 						orientation="vertical"
		// 						variant="middle"
		// 						flexItem
		// 					/>
		// 				)}

		// 				<Grid container direction="row" justifyContent="space-between" alignItems="center">
		// 					{location.pathname !== `/${i18n.language}` ? (
		// 						<MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		// 					) : (
		// 						<Box></Box>
		// 					)}

		// 					<LanguageSelect languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} />
		// 				</Grid>
		// 			</Toolbar>
		// 		</AppBar>
		// 	</Box>

		// 	<LanguageList languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} />

		// 	{location.pathname !== `/${i18n.language}` && (
		// 		<Collapse sx={{ width: "100%", position: "absolute", zIndex: 99 }} in={menuOpen}>
		// 			<Home setMenuOpen={setMenuOpen} />
		// 		</Collapse>
		// 	)}

		// 	<Outlet />
		// </>
	)
}

export default Nav
