import React from "react"
import ROUTES from "../../../ROUTES.json"
import { styled, useTheme } from "@mui/material/styles"
import { Grid, Paper } from "@mui/material"
import ViewListItem from "./viewListItem"
// Icons
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded"
import MapRoundedIcon from "@mui/icons-material/MapRounded"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded"
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded"
import VrpanoIcon from "@mui/icons-material/Vrpano"
import SettingsIcon from "@mui/icons-material/Settings"
import RouteIcon from "@mui/icons-material/Route"
import FenceIcon from "@mui/icons-material/Fence"

const GridCenter = styled(Grid)(() => ({
  display: "grid",
  placeItems: "center",
}))

export default function viewList() {
  const theme = useTheme()

  return (
    <Paper>
      <Grid container>
        <GridCenter item xs={12}>
          <div
            style={{
              width: "95%",
              height: "0.3rem",
              backgroundColor: theme.palette.primary.main,
              margin: "2rem",
              borderRadius: "1rem",
            }}
          ></div>
        </GridCenter>
        <GridCenter item xs={12}>
          <h2 style={{ color: theme.palette.text.secondary }}>Applications list</h2>
        </GridCenter>

        <ViewListItem
          routeLink={ROUTES.ECDIS}
          viewName={" ECDIS"}
          icon={
            <MapRoundedIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.CONNING}
          viewName={"Conning"}
          icon={
            <SpeedRoundedIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.E_LOOKOUT}
          viewName={"E-Lookout"}
          icon={
            <VrpanoIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.CAMERA_STREAMS}
          viewName={"Camera Streams"}
          icon={
            <VrpanoIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.LOOKOUT_360}
          viewName={"Lookout 360"}
          icon={
            <VrpanoIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.BEARING_RATE}
          viewName={" Bearing Rate"}
          icon={
            <TrackChangesRoundedIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.REMOTE_CONTROL}
          viewName={"Remote control"}
          icon={
            <SportsEsportsRoundedIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.VIRTUAL_WIRE}
          viewName={"Virtual Wire"}
          icon={
            <FenceIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.ROUTE_EDITOR}
          viewName={"Rout Editor"}
          icon={
            <RouteIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.DATA_FLOW}
          viewName={"Data Flow"}
          icon={
            <InsightsRoundedIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />

        <ViewListItem
          routeLink={ROUTES.SETTINGS}
          viewName={"Settings"}
          icon={
            <SettingsIcon
              sx={{
                fontSize: "4rem",
                color: theme.palette.primary.main,
              }}
            />
          }
        />
      </Grid>
    </Paper>
  )
}
