import React, { useEffect, useState, useRef } from "react"
import { Paper, Typography } from "@mui/material"

export default function MetaFlightController() {
  const [startTime, setStartTime] = useState(Date.now())
  const router = useRef()

  /* eslint-disable */
  const [URL, setURL] = useState(
    (process.env.REACT_APP_ZENOH_LOCAL_ROUTER_URL ? process.env.REACT_APP_ZENOH_LOCAL_ROUTER_URL : "http://localhost:8000") +
      "/rise/sea/mediamtx/swain/wifi/axis"
  )
  /* eslint-enable */

  useEffect(() => {
    console.log("Start Meta FlightController")
    startSubscribe()
  }, [])

  function startSubscribe() {
    setStartTime(Date.now())

    router.current = new EventSource(URL)
    router.current.addEventListener("PUT", parseMsg, false)
  }

  function parseMsg(event) {
    const msg = JSON.parse(event.data)
    console.log(msg)
  }

  return (
    <Paper>
      <Typography variant="h5">FlightController</Typography>
    </Paper>
  )
}
