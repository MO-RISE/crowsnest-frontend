import React from "react"
import Paper from "@mui/material/Paper"
import CardHeading from "./CardHeading"
import { Stack } from "@mui/material"
import { ObcInstrumentField } from "@oicl/openbridge-webcomponents-react/navigation-instruments/instrument-field/instrument-field"

export default function ThrustPanel() {
  return (
    <Paper>
      <Stack>
        <CardHeading heading="Thrust Panel" />
        <ObcInstrumentField />
      </Stack>
    </Paper>
  )
}
