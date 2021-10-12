import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
// Styling
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Pages
import ROUTES from "./ROUTES.json";
import PageHome from "./pages/home";
import PageECDIS from "./pages/ECDIS";
import PageConning from "./pages/conning";
import PageDataFlow from "./pages/data-flow";
import PageRemoteControl from "./pages/remote-control";
import PageVesselSpinner from "./pages/vesselSpinner";
// Connectors
import ConnectorAIS from "./connectors/RISE-AIS";
import ConnectorLIDAR from "./connectors/RISE-LIDAR";

// -----------------------------------------------------------
// Global theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d3658",
    },
    secondary: {
      main: "#1b5e20",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <ConnectorAIS />
          <ConnectorLIDAR />
          <Router>
            <Switch>
              <Route exact path={ROUTES.HOME} component={PageHome} />
              <Route exact path={ROUTES.ECDIS} component={PageECDIS} />
              <Route exact path={ROUTES.CONNING} component={PageConning} />
              <Route exact path={ROUTES.DATA_FLOW} component={PageDataFlow} />
              <Route
                exact
                path={ROUTES.REMOTE_CONTROL}
                component={PageRemoteControl}
              />
              <Route exact path={ROUTES.PAGE1} component={PageVesselSpinner} />
            </Switch>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
