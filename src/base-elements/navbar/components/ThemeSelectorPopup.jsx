import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { appState } from "../../../recoil/atoms"

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import NightlightIcon from "@mui/icons-material/Nightlight"
import WbTwilightIcon from "@mui/icons-material/WbTwilight"
import CloudIcon from "@mui/icons-material/Cloud"
import LightModeIcon from "@mui/icons-material/LightMode"

export default function ThemeSelectorPopup() {
  const [appObj, setAppObj] = useRecoilState(appState)

  const handleThemeChange = (event, newAlignment) => {
    switch (newAlignment) {
      case "night":
        setAppObj({
          ...appObj,
          appActiveColorTheme: "night",
          materialActiveColorTheme: "dark",
        })
        break
      case "dusk":
        setAppObj({
          ...appObj,
          appActiveColorTheme: "dusk",
          materialActiveColorTheme: "dark",
        })
        break
      case "day":
        setAppObj({
          ...appObj,
          appActiveColorTheme: "day",
          materialActiveColorTheme: "light",
        })
        break
      case "day-hc":
        setAppObj({
          ...appObj,
          appActiveColorTheme: "day-hc",
          materialActiveColorTheme: "light",
        })
        break
    }

    console.log(window.theme.palette);

  }

  return (
    <div>
      <ToggleButtonGroup value={appObj?.appActiveColorTheme} exclusive onChange={handleThemeChange} aria-label="text alignment">
        <ToggleButton value="night" aria-label="left aligned">
          <NightlightIcon />
        </ToggleButton>
        <ToggleButton value="dusk" aria-label="centered">
          <WbTwilightIcon />
        </ToggleButton>
        <ToggleButton value="day" aria-label="right aligned">
          <CloudIcon />
        </ToggleButton>
        <ToggleButton value="day-hc" aria-label="justified">
          <LightModeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
