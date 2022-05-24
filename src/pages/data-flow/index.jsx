import React from "react"
import { Grid } from "@mui/material"
import { useTheme } from "@mui/material/styles"
// Components
import DataConnectionState from "./components/connectionStatus"
// Recoil
import { useRecoilValue } from "recoil"
import { atomRiseAisMetadata } from "../../connectors/RISE-AIS"
import { atomLidarMetadata } from "../../connectors/RISE-LIDAR"
import { mqttStateAtom } from "../../base-elements/MqttConnection"
import { lidarStateAtom } from "../../recoil/atoms"

export default function DataFlow() {
  const theme = useTheme()
  const riseAisMetadataObj = useRecoilValue(atomRiseAisMetadata)
  const riseLidarMetadata = useRecoilValue(atomLidarMetadata)
  const mqttState = useRecoilValue(mqttStateAtom)
  const lidarSate = useRecoilValue(lidarStateAtom)

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          placeItems: "center",
          color: theme.palette.primary.contrastText,
        }}
      >
        <h1>Data flow</h1>
      </Grid>
      <Grid item xs={12}>
        <DataConnectionState connectionName={"MQTT Broker"} isConnected={mqttState.connected} />
      </Grid>

      <Grid item xs={12}>
        <DataConnectionState connectionName={"LIDAR"} isConnected={lidarSate.connected} delay={lidarSate.delaySec} />
      </Grid>
    </Grid>
  )
}


