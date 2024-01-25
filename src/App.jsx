import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Recoil
import { useRecoilValue } from "recoil"
import { appState } from "./recoil/atoms"
// Styling
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
// Pages
import ROUTES from "./ROUTES.json"
import BasePage from "./base-elements/BasePage"
import PageHome from "./pages/home"
import PageECDIS from "./pages/ECDIS"
import PageConning from "./pages/conning"
import PageDataFlow from "./pages/data-flow"
import PageRemoteControl from "./pages/remote-control"
import PageBearingRate from "./pages/bearing-rate"
import ELookout from "./pages/e-lookout"
import CameraStreams from "./pages/camera-streams"
import DeviceSensors from "./pages/device-sensors"
import PageSettings from "./pages/settings"
import PageConfiguration from "./pages/configuration"
import RouteEditor from "./pages/route-editor"
import VirtualWire from "./pages/virtual-wire"

import DeviceConnection from "./base-elements/DeviceConnection"
import Lookout360 from "./pages/lookout-360"

export default function App() {
  const app_state = useRecoilValue(appState)
  // -----------------------------------------------------------
  // OpenBridge Color Themes 5.0
  // Day HC, Day, Dusk, Night
  // https://www.openbridge.no/guidelines/palette/palette
  // -----------------------------------------------------------
  // Global theme

  let themeColors

  switch (app_state.appActiveColorTheme) {
    case "night": // SAME HEX NUMBERS AS DUSK???
      themeColors = {
        primary: {
          main: "#4A7BA5", // Enhanced-primary-color
          port: "#BA567A", // Port-color
          starboard: "#29856F", // Starboard-color
        },
        secondary: {
          main: "#5696C7", // Enhanced-secondary-color
        },
        background: {
          default: "#0F0F0F", // Backdrop-color
          paper: "#1F1F1F", // Background-color
        },
        error: {
          main: "#E52626", // Alarm-color
        },
        warning: {
          main: "#F69400", // Warning-color
        },
        success: {
          main: "#138A00", // Running-color
        },
        text: {
          primary: "#E6E6E6", // Regular-primary-color
          secondary: "#999999", // Regular-secondary-color
        },
      }
      break

    case "dusk":
      themeColors = {
        primary: {
          main: "#4A7BA5", // Enhanced-primary-color
          enhanced: "#5ED5FD", // Enhanced-primary-color
          contrastText: "#999999",
          port: "#BA567A", // Port-color
          starboard: "#29856F", // Starboard-color
        },
        secondary: {
          main: "#5696C7", // Enhanced-secondary-color
          contrastText: "#ffff",
        },
        background: {
          default: "#0F0F0F", // Backdrop-color
          paper: "#1F1F1F", // Background-color
        },
        error: {
          main: "#E52626", // Alarm-color
        },
        warning: {
          main: "#F69400", // Warning-color
        },
        success: {
          main: "#138A00", // Running-color
        },
        text: {
          primary: "#E6E6E6", // Regular-primary-color
          secondary: "#999999", // Regular-secondary-color
        },
      }
      break

    case "day":
      themeColors = {
        primary: {
          main: "#0070D6", // Enhanced-primary-color
          port: "#E16290", // Port-color
          starboard: "#359E85", // Starboard-color
        },
        secondary: {
          main: "#325B9A", // Enhanced-secondary-color
        },
        background: {
          default: "#E0E0E0", // Backdrop-color
          paper: "#F7F7F7", // Background-color
        },
        error: {
          main: "#DF1B1B", // Alarm-color
        },
        warning: {
          main: "#F69400", // Warning-color
        },
        success: {
          main: "#228722", // Running-color
        },
        text: {
          primary: "#333333", // Regular-primary-color
          secondary: "#666666", // Regular-secondary-color
        },
      }
      break

    case "day-hc":
      themeColors = {
        primary: {
          main: "#0070D6", // Enhanced-primary-color
          port: "#E16290", // Port-color
          starboard: "#359E85", // Starboard-color
        },
        secondary: {
          main: "#325B9A", // Enhanced-secondary-color
        },
        background: {
          default: "#E0E0E0", // Backdrop-color
          paper: "#F7F7F7", // Background-color
        },
        error: {
          main: "#DF1B1B", // Alarm-color
        },
        warning: {
          main: "#F69400", // Warning-color
        },
        success: {
          main: "#228722", // Running-color
        },
        text: {
          primary: "#333333", // Regular-primary-color
          secondary: "#666666", // Regular-secondary-color
        },
      }
      break

    default:
      themeColors = {} // default theme colors
      break
  }

  let theme = createTheme({
    palette: {
      mode: app_state.materialActiveColorTheme, // dark or light (default)
      ...themeColors,
    },
  })

  theme = responsiveFontSizes(theme)

  return (
    <>
      {/* <DeviceConnection /> */}

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <BasePage>
            <Routes>
              <Route exact path={ROUTES.HOME} element={<PageHome />} />
              <Route exact path={ROUTES.ECDIS} element={<PageECDIS />} />
              <Route exact path={ROUTES.BEARING_RATE} element={<PageBearingRate />} />
              <Route exact path={ROUTES.CONNING} element={<PageConning />} />
              <Route exact path={ROUTES.DATA_FLOW} element={<PageDataFlow />} />
              <Route exact path={ROUTES.CONFIGURATION} element={<PageConfiguration />} />
              <Route exact path={ROUTES.SETTINGS} element={<PageSettings />} />
              <Route exact path={ROUTES.E_LOOKOUT} element={<ELookout />} />
              <Route exact path={ROUTES.CAMERA_STREAMS} element={<CameraStreams />} />
              <Route exact path={ROUTES.DEVICE_SENSORS} element={<DeviceSensors />} />
              <Route exact path={ROUTES.REMOTE_CONTROL} element={<PageRemoteControl />} />
              <Route exact path={ROUTES.ROUTE_EDITOR} element={<RouteEditor />} />
              <Route exact path={ROUTES.LOOKOUT_360} element={<Lookout360 />} />
              <Route exact path={ROUTES.VIRTUAL_WIRE} element={<VirtualWire />} />
            </Routes>
          </BasePage>
        </Router>
      </ThemeProvider>
    </>
  )
}
