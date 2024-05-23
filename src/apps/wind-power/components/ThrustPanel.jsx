import React from "react"
import Paper from "@mui/material/Paper"
import GridHeading from "./GridHeading"
import { Stack } from "@mui/material"
import { ObcInstrumentField } from "@oicl/openbridge-webcomponents-react/navigation-instruments/instrument-field/instrument-field"
import ControlThrust from "./ControlThrust"
import LabelledRadioButton from "./LabelledRadioButton"
import { useRecoilValue } from "recoil"
import { ATOM_SAIL_CONTROL } from "../../../recoil/atoms"

export default function ThrustPanel() {
  let sailControl = useRecoilValue(ATOM_SAIL_CONTROL)

  return (
    <Paper sx={{ height: "100%" }}>
      <GridHeading heading="Variable sail thrust" actionButton={<LabelledRadioButton label="Use variable thrust" />} />
      <Stack direction="column" justifyContent="center" alignItems="center" padding={2}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <ObcInstrumentField
            value={sailControl.variableThrustActualPct*100}
            hasSetpoint={true}
            setpoint={sailControl.variableThrustSetPct*100}
            degree={false}
            tag={"POWER"}
            unit={"%"}
            source={"simulation"}
            hasSource={false}
            size={"large"}
            maxDigits={3}
          />
        </Stack>
        <ControlThrust />
      </Stack>
    </Paper>
  )
}
