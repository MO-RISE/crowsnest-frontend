import React, { useState } from "react"
import { mapCursorPosAtom } from "./SeaChart"
import { OS_POSITION } from "../../../recoil/atoms"
import { useRecoilValue } from "recoil"
import { formatLatitude, formatLongitude, calcDistanceBetween, calcBearingBetween } from "../../../utils"
import { Stack, Typography, Grid } from "@mui/material"

export default function MapCursorInfo() {
  const mapCursor = useRecoilValue(mapCursorPosAtom)
  const osPos = useRecoilValue(OS_POSITION)
  const [displayOptions, setDisplayOptions] = useState({
    positionInDegrees: false,
  })

  const togglePositionUnit = () => {
    setDisplayOptions({
      ...displayOptions,
      positionInDegrees: !displayOptions.positionInDegrees,
    })
  }
  return (
    <Stack>
      <hr style={{ width: "100%" }} />

      <Typography variant="overline">Cursor</Typography>

      <Grid container>
        <Grid item xs={5}>
          {displayOptions.positionInDegrees ? (
            <div onClick={togglePositionUnit} style={{ minWidth: "50%" }}>
              <Typography variant="caption">
                {mapCursor.onMap ? mapCursor.latitude.toFixed(4) : "-"} <br />
                {mapCursor.onMap ? mapCursor.longitude.toFixed(4) : "-"}
              </Typography>
            </div>
          ) : (
            <div onClick={togglePositionUnit} style={{ minWidth: "50%" }}>
              <Typography variant="caption">{mapCursor.onMap ? formatLatitude(mapCursor.latitude, 3) : "-"}</Typography>
              <br />
              <Typography variant="caption">{mapCursor.onMap ? formatLongitude(mapCursor.longitude, 3) : "-"}</Typography>
            </div>
          )}
        </Grid>
        <Grid item xs={7}>
          <Typography variant="caption">
            DIST: {calcDistanceBetween(mapCursor.latitude, mapCursor.longitude, osPos.latitude, osPos.longitude)} nm
            <br />
            BRG: {calcBearingBetween(osPos.latitude, osPos.longitude, mapCursor.latitude, mapCursor.longitude)} °
            <br />
            TTG: {(calcDistanceBetween(mapCursor.latitude, mapCursor.longitude, osPos.latitude, osPos.longitude) * 10).toFixed(
              1
            )}{" "}
            min
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}
