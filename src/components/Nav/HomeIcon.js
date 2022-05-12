import React from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { ReactComponent as vlnIcon } from "../../utils/icons/homeIcons/vplanas_juodas.svg"

import SvgIcon from "@mui/material/SvgIcon"

const HomeIcon = () => {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation()

	return (
		<SvgIcon
			component={vlnIcon}
			inheritViewBox
			sx={{ ml: 1, color: "#000000ff", fontSize: 100, cursor: "pointer" }}
			onClick={() => navigate(`/${i18n.language}`)}
		/>
	)
}

export default HomeIcon
