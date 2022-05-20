import React from "react"
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import * as intl from "@arcgis/core/intl"

import Home from "./pages/Home"
import Air from "./pages/Air"
import Noise from "./pages/Noise"
import Underground from "./pages/Underground"

import Nav from "./components/Nav/Nav"
import "./i18n"
import "./css/index.css"

import { createTheme, ThemeProvider } from "@mui/material/styles"

const App = () => {
	const { t, i18n } = useTranslation()
	intl.setLocale(`${i18n.language}`)

	const theme = createTheme({
		palette: {
			primary: {
				main: "#000000",
			},
			secondary: {
				main: "#D42323",
			},
		},
		components: {
			MuiLink: {
				defaultProps: {
					color: "secondary",
				},
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Routes>
					<Route path="/aplinka/:lng" element={<Nav />}>
						<Route index element={<Home />} />
						<Route path="pavirsinis/*" element={<Navigate to={`/`} />} />
						<Route path="dirvozemis/*" element={<Navigate to={`/`} />} />
						<Route path="triuksmas/*" element={<Noise />} />
						<Route path="bioivairove/*" element={<Navigate to={`/`} />} />
						<Route path="oras/*" element={<Air />} />
						<Route path="pozeminis/*" element={<Underground />} />
						<Route path="tarsa/*" element={<Navigate to={`/`} />} />
					</Route>
					<Route path="*" element={<Navigate to={`/aplinka/${i18n.language}`} />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	)
}

export default App
