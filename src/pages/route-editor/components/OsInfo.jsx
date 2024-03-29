import React from "react"
import { Stack, FormControl, InputLabel, Select, MenuItem, Typography, Grid } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { OS_POSITION_SETTING, OS_VELOCITY_SETTING, OS_VELOCITY, OS_HEADING, OS_HEADING_SETTING } from "../../../recoil/atoms"

export default function OsInfo() {
  const [posSetting, setPosSetting] = useRecoilState(OS_POSITION_SETTING)
  const osVelocity = useRecoilValue(OS_VELOCITY)
  const osVelocitySetting = useRecoilValue(OS_VELOCITY_SETTING)
  const osHeading = useRecoilValue(OS_HEADING)
  const osHeadingSetting = useRecoilValue(OS_HEADING_SETTING)

  const handleChangeGNSSsource = event => {
    const newPosSource = event.target.value
    setPosSetting({
      ...posSetting,
      source: newPosSource,
    })
  }

  return (
    <div >
      <hr style={{ width: "100%" }} />
      <Grid container sx={{ padding: "0.5rem" }}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography variant="subtitle1">OS info</Typography>
            <FormControl variant="outlined" size="small" sx={{ minWidth: "3rem" }}>
              <InputLabel id="select-velocity-source-sger">Velocity</InputLabel>
              <Select
                labelId="select-velocity-source-sger"
                id="select-gnss-source-sdgreg"
                value={osVelocitySetting.source}
                onChange={handleChangeGNSSsource}
                label="Velocity"
                sx={{ fontSize: "0.8rem" }}
              >
                {Object.keys(osVelocity).map(osPoskey => {
                  return (
                    <MenuItem key={"jhv" + osPoskey} value={osPoskey}>
                      {osPoskey}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="caption">Heading</Typography>
                <Typography variant="subtitle1">{osHeading[osHeadingSetting.source]?.heading?.toFixed(1)}°</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="caption">COG</Typography>
                <Typography variant="subtitle1">{osVelocity[osVelocitySetting.source]?.cog?.toFixed(1)}°</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="caption">SOG</Typography>
                <Typography variant="subtitle1">{osVelocity[osVelocitySetting.source]?.sog?.toFixed(1)}kts</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="caption">ROT</Typography>
                <Typography variant="subtitle1">{osVelocity[osVelocitySetting.source]?.rot?.toFixed(1)}°/min</Typography>
              </div>
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}></Stack>
        </Grid>
      </Grid>
      <hr style={{ width: "100%" }} />
    </div>
  )
}
