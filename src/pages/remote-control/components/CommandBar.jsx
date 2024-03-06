import React from "react"
import { Button, Stack } from "@mui/material"
import { ATOM_OS_COMMAND } from "../../../recoil/atoms"
import { useRecoilState } from "recoil"
import bundle from "../../../proto/bundle.json"
import protobuf from "protobufjs"

export default function CommandBar() {
  const [command, setCommand] = useRecoilState(ATOM_OS_COMMAND)

  const handleRequestCommand = () => {
    console.log("Request GU command", !command.guiInCommand)

    const root = protobuf.Root.fromJSON(bundle)
    const Envelope = root.lookupType("Envelope")
    const TimestampedString = root.lookupType("TimestampedString")

    var Http = new XMLHttpRequest()

    if (command.guiInCommand === true) {
      console.log("Requesting WH command")

      const dataToSend = {
        timestamp: new Date(),
        value: "rise/v0/masslab/data/lever_position_pct/arduino/right/azimuth/vertical",
      }

      let errMsg = TimestampedString.verify(dataToSend)
      if (errMsg) throw Error(errMsg)

      const payloadOne = TimestampedString.create(dataToSend)
      const payload = TimestampedString.encode(payloadOne).finish()
      const messStart = Envelope.create({
        enclosed_at: new Date(),
        payload: payload,
      })
      const message = Envelope.encode(messStart).finish()

      // eslint-disable-next-line no-undef
      Http.open("POST", process.env.REACT_APP_ZENOH_LOCAL_ROUTER_URL + "/rise/v0/masslab/rpc/rudder/*/set_rudder_listener", true)
      Http.setRequestHeader("Content-Type", "application/octet-stream")
      Http.send(message)
    } else {
      const dataToSend = {
        timestamp: new Date(),
        value: "null",
      }

      let errMsg = TimestampedString.verify(dataToSend)
      if (errMsg) throw Error(errMsg)

      const payloadOne = TimestampedString.create(dataToSend)
      const payload = TimestampedString.encode(payloadOne).finish()
      const messStart = Envelope.create({
        enclosed_at: new Date(),
        payload: payload,
      })
      const message = Envelope.encode(messStart).finish()

      // eslint-disable-next-line no-undef
      Http.open("POST", process.env.REACT_APP_ZENOH_LOCAL_ROUTER_URL + "/rise/v0/masslab/rpc/rudder/*/set_rudder_listener", true)
      Http.setRequestHeader("Content-Type", "application/octet-stream")
      Http.send(message)
    }

    setCommand({
      ...command,
      guiInCommand: !command.guiInCommand,
    })
  }

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button
        onClick={handleRequestCommand}
        variant="outlined"
        size="large"
        color={command.guiInCommand ? "success" : "secondary"}
      >
        {command.guiInCommand ? "IN command" : "Request command from HW"}
      </Button>

      <div style={{ width: "2rem" }}></div>

      <Button variant="outlined" size="large" color={command.guiInCommand ? "success" : "secondary"} disabled>
        {"Manual"}
      </Button>

      <Button variant="outlined" size="large" color={command.guiInCommand ? "success" : "secondary"} disabled>
        {"Remote"}
      </Button>

      <Button variant="outlined" size="large" color={command.guiInCommand ? "success" : "secondary"} disabled>
        {"Automatic"}
      </Button>
    </Stack>
  )
}
