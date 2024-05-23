import React from "react"
import { Paper, Typography, Grid, Stack } from "@mui/material"
import { ObcWatch } from "@oicl/openbridge-webcomponents-react/navigation-instruments/watch/watch"
import SailPNG from "../../../resources/Sail.png"
import styled from "@emotion/styled"
import GridHeading from "./GridHeading"
import { ObcInstrumentField } from "@oicl/openbridge-webcomponents-react/navigation-instruments/instrument-field/instrument-field"
import SvgWind from "./SvgWind"
import { transform } from "framer-motion"

const ShipOutline = styled.div`
  position: relative;
  padding: 3rem 2rem 2rem;
  border-radius: 50% 50% 0% 0% / 17% 17% 0% 0%;
  border: 3px solid var(--border-outline-color);
  width: 205px;
`

const SailWrapper = styled.div`
  position: relative;
`

const SailImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const WindImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const SailImage = styled.img`
  transform: rotate(0deg);
  transition: transform 1s ease-in-out;
  max-height: 100px;
  width: auto;

  &:hover {
    transform: rotate(90deg);
  }
`

export default function SailPositions() {
  return (
    <Paper sx={{ height: "100%" }}>
      <GridHeading heading="Sail positions" />

      <Grid container paddingY={1} paddingX={2}>
        <Grid item xs={6}>
          <ShipOutline>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={180} />
              </WindImageWrapper>
            </SailWrapper>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={45} />
              </WindImageWrapper>
            </SailWrapper>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={270} />
              </WindImageWrapper>
            </SailWrapper>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={90} />
              </WindImageWrapper>
            </SailWrapper>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={180} />
              </WindImageWrapper>
            </SailWrapper>
            <SailWrapper>
              <ObcWatch />
              <SailImageWrapper>
                <SailImage src={SailPNG} />
              </SailImageWrapper>
              <WindImageWrapper>
                <SvgWind windAngle={180} />
              </WindImageWrapper>
            </SailWrapper>
            <Typography
              variant="p"
              sx={{ position: "absolute", top: "1rem", left: "50%", transform: "translateX(-50%)", fontWeight: "600" }}
            >
              0°
            </Typography>
            <Typography
              variant="p"
              sx={{ position: "absolute", top: "50%", left: "1rem", transform: "translateY(-50%)", fontWeight: "600" }}
            >
              -90°
            </Typography>
            <Typography
              variant="p"
              sx={{ position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%)", fontWeight: "600" }}
            >
              90°
            </Typography>
            <Typography
              variant="p"
              sx={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", fontWeight: "600" }}
            >
              180°
            </Typography>
          </ShipOutline>
        </Grid>
        <Grid item xs paddingTop={9}>
          <Stack justifyContent="space-around" sx={{ height: "100%" }} alignItems="center">
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
            <ObcInstrumentField hasSetpoint={true} setpoint={90} degree value={90} tag="Angle" />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}