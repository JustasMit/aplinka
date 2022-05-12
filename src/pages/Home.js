import React from "react"
import PropTypes from "prop-types"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { ReactComponent as soilIcon } from "../utils/icons/homeIcons/dirvozemis.svg"
import { ReactComponent as noiseIcon } from "../utils/icons/homeIcons/triuksmas.svg"
import { ReactComponent as surfaceIcon } from "../utils/icons/homeIcons/pavirsinis_vanduo.svg"
import { ReactComponent as undergroundIcon } from "../utils/icons/homeIcons/pozeminis_vanduo.svg"
import { ReactComponent as biodiversityIcon } from "../utils/icons/homeIcons/bioivairove.svg"
import { ReactComponent as airIcon } from "../utils/icons/homeIcons/oras.svg"
import { ReactComponent as pollutionIcon } from "../utils/icons/homeIcons/uzterstos_teritorijos.svg"

import { useTheme } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import SvgIcon from "@mui/material/SvgIcon"

function Tile(props) {
	const location = useLocation()
	const { t, i18n } = useTranslation()

	const { setMenuOpen, sx, ...other } = props

	return (
		<Button
			component={Link}
			onClick={() => location.pathname !== `/${i18n.language}` && setMenuOpen(false)}
			to={`${sx.gridArea}`}
			variant="contained"
			sx={{
				borderRadius: 0,
				textAlign: "center",
				boxShadow: "none",
				textTransform: "none",
				transition: "0.3s",
				opacity: 1,
				"&:hover": {
					boxShadow: "none",
					backgroundColor: "black",
					opacity: 0.7,
				},
				...sx,
			}}
			{...other}
		/>
	)
}

Tile.propTypes = {
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
		PropTypes.func,
		PropTypes.object,
	]),
}

const Home = (props) => {
	const { t, i18n } = useTranslation()

	const theme = useTheme()
	const matchesLg = useMediaQuery(theme.breakpoints.up("lg"))
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"))

	const iconSize = 110 * (window.innerHeight / 1000)
	const fontSize = 30 * (window.innerHeight / 1000)
	return (
		<div
			style={{
				overflowY: "auto",
				maxHeight: window.innerHeight - 90,
				width: "100%",
			}}
		>
			<Box
				sx={{
          backgroundColor: "#fcfcfcff",
					display: "grid",
					gap: 0.5,
					// gridTemplateColumns: matchesLg ? "repeat(5, 1fr)" : "repeat(2, 1fr)",
					// gridTemplateRows: matchesLg ? `repeat(3, ${(window.innerHeight - 90) / 3}px)` : `repeat(5, 300px)`,
					// gridTemplateAreas: matchesLg
					// 	? `
					//   "periods    periods   plaques persons persons"
					//   "maps       streets   parts   persons persons"
					//   "addresses  buildings parts   events  events"
					// `
					// 	: `
					//   "periods    persons"
					//   "plaques    persons"
					//   "maps       streets"
					//   "addresses  buildings"
					//   "parts      events"
					// `,
					gridTemplateColumns: "repeat(3, 1fr)",
					gridTemplateRows: `repeat(3, ${(window.innerHeight - 90) / 3 - 2.5}px)`,
					gridTemplateAreas: `
            "pavirsinis dirvozemis  triuksmas"
            "pozeminis  bioivairove triuksmas"
            "oras       oras        tarsa"
          `,
				}}
			>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#628aa0ff", gridArea: "pavirsinis" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon
								component={surfaceIcon}
								inheritViewBox
								sx={{ color: "#fcfcfcff", fontSize: iconSize }}
							/>
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Paviršinis vanduo
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#d1cac3ff", gridArea: "dirvozemis" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon component={soilIcon} inheritViewBox sx={{ color: "#fcfcfcff", fontSize: iconSize }} />
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Dirvožemis
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#9b938cff", gridArea: "triuksmas" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon component={noiseIcon} inheritViewBox sx={{ color: "#fcfcfcff", fontSize: iconSize }} />
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Triukšmas
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#4a7284ff", gridArea: "pozeminis" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon
								component={undergroundIcon}
								inheritViewBox
								sx={{ color: "#fcfcfcff", fontSize: iconSize }}
							/>
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Požeminis vanduo
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#97b7a4ff", gridArea: "bioivairove" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon
								component={biodiversityIcon}
								inheritViewBox
								sx={{ color: "#fcfcfcff", fontSize: iconSize }}
							/>
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Bioįvairovė
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#81a0b6ff", gridArea: "oras" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon component={airIcon} inheritViewBox sx={{ color: "#fcfcfcff", fontSize: iconSize }} />
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Oras
							</Typography>
						</Grid>
					</Grid>
				</Tile>
				<Tile setMenuOpen={props.setMenuOpen} sx={{ backgroundColor: "#605c58ff", gridArea: "tarsa" }}>
					<Grid container direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<SvgIcon
								component={pollutionIcon}
								inheritViewBox
								sx={{ color: "#fcfcfcff", fontSize: iconSize }}
							/>
						</Grid>
						<Grid item>
							<Typography sx={{ color: "#fcfcfcff" }} variant="body2" fontSize={fontSize}>
								Užterštos teritorijos
							</Typography>
						</Grid>
					</Grid>
				</Tile>
			</Box>
		</div>
	)
}

export default Home
