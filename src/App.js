import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Recoil
import { useRecoilValue } from "recoil";
import { appState } from "./globalAtomsSelectors";
// Styling
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Pages
import ROUTES from "./ROUTES.json";
import BasePage from "./base-elements/BasePage";
import PageHome from "./pages/home";
import PageECDIS from "./pages/ECDIS";
import PageConning from "./pages/conning";
import PageDataFlow from "./pages/data-flow";
import PageRemoteControl from "./pages/remote-control";
// import PageVesselSpinner from "./pages/vesselSpinner";

export default function App() {
  const appObj = useRecoilValue(appState);
  // -----------------------------------------------------------
  // Global theme
  let theme = createTheme({
    palette: {
      mode: appObj.appActiveColorTheme, // dark or light (default)

      ...(appObj.appActiveColorTheme === "light"
        ? // Light pallette
          {
            primary: {
              main: "#1f2e47",
              light: "#66bb77",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#ed6432",
              contrast: "#33BBFF",
            },
            background: {
              default: "#e3e3e3",
            },
            error: {
              main: "#cb2e24",
            },
            warning: {
              main: "#eec937",
            },
            success: {
              main: "#99b93d",
            },
            info: {
              main: "#031e49",
            },
          }
        : // Dark pallette
          {
            primary: {
              main: "#2196f3",
              light: "#66bb77",
              contrastText: "#ffffff",
              port: "#E93629",
              starboard: "#1FB948",
            },
            secondary: {
              main: "#ed6432",
              dark: "#b84d27",
            },
            background: {
              default: "#333333",
            },
            error: {
              main: "#cb2e24",
            },
            warning: {
              main: "#eec937",
            },
            success: {
              main: "#99b93d",
            },
            info: {
              main: "#2196f3",
            },
            text: {
              primary: "#fff",
            },
          }),
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <BasePage>
            <Routes>
              <Route exact path={ROUTES.HOME} element={<PageHome />} />
              <Route exact path={ROUTES.ECDIS} element={<PageECDIS />} />
              <Route exact path={ROUTES.CONNING} element={<PageConning />} />
              <Route exact path={ROUTES.DATA_FLOW} element={<PageDataFlow />} />
              <Route
                exact
                path={ROUTES.REMOTE_CONTROL}
                element={<PageRemoteControl />}
              />
              {/* <Route
                exact
                path={ROUTES.PAGE1}
                element={<PageVesselSpinner />}
              /> */}
            </Routes>
          </BasePage>
        </Router>
      </ThemeProvider>
    </>
  );
}
