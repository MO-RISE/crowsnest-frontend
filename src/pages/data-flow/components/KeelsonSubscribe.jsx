import React, { useRef } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import { Stack, TextField, Typography } from "@mui/material"
import { protoParser } from "../../../recoil/selectors"
import { atomKeelsonConnectionState } from "../../../recoil/atoms"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ObcButton as Button } from "@oicl/openbridge-webcomponents-react/components/button/button"

const validationSchema = yup.object({
  hostSub: yup.string().required("Required"),
  subscriptionKey: yup.string().required("Required"),
})

/* eslint-disable */
const initFormValuesManual = {
  // hostSub: "http://10.10.7.2:8000",
  hostSub: "http://localhost:8000",
  subscriptionKey: "**",
}
/* eslint-enable */

export default function KeelsonSubscribe() {
  const [keelsonConState, setKeelsonConState] = useRecoilState(atomKeelsonConnectionState)
  let router = useRef(null)
  const protoDecoder = useSetRecoilState(protoParser)

  function parseMessage(e) {
    // Parsing Zenoh (key & value)
    let msg = JSON.parse(e.data)
    console.log("🚀 ~ file: ConnKeelson.jsx:30 ~ parseMessage ~ msg:", msg)

    protoDecoder(msg)
  }

  const disconnectKeelson = () => {
    console.log("Disconnecting from Keelson")
    if (router) {
      // TODO: Why is it connecting back again?
      console.log("Trying to disconnect...")
      router.current.removeEventListener("PUT", parseMessage, false)
      console.log("DISCONNECTED")
      setKeelsonConState(false)
    }
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initFormValuesManual,
    onSubmit: values => {
      console.log("PRESSED SUBMIT")
      submitAndConnect(values)
    },
  })

  const submitAndConnect = values => {
    console.log("Connecting to Keelson: ", values)

    // Connecting with Server Side Events to Keelson
    let URL = values.hostSub + "/" + values.subscriptionKey
    console.log("🚀 ~ file: ConnKeelson.jsx:54 ~ submitAndConnect ~ URL:", URL)

    router.current = new EventSource(URL)

    router.current.addEventListener("PUT", parseMessage, false)

    // Connected
    setKeelsonConState(true)
    return values
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={1} sx={{ minWidth: "20vw", height: "100%" }} justifyContent="space-between">
        <Stack spacing={1}>
          <Typography sx={{ paddingBottom: "0.5rem" }} variant="h5">
            Keelson Subscriber
          </Typography>
          <TextField
            id="hostSub"
            label="Host URL"
            fullWidth
            variant="filled"
            size="small"
            disabled={keelsonConState ? true : false}
            defaultValue={formik.values.hostSub}
            onChange={formik.handleChange}
            error={formik.touched.hostSub && Boolean(formik.errors.hostSub)}
            helperText={formik.touched.hostSub && formik.errors.hostSub}
          />

          <TextField
            id="subscriptionKey"
            label="Key Expression"
            fullWidth
            variant="filled"
            size="small"
            disabled={keelsonConState ? true : false}
            sx={{ paddingRight: "0.2rem" }}
            defaultValue={formik.values.subscriptionKey}
            onChange={formik.handleChange}
            error={formik.touched.subscriptionKey && Boolean(formik.errors.subscriptionKey)}
            helperText={formik.touched.subscriptionKey && formik.errors.subscriptionKey}
          />
        </Stack>

        {!keelsonConState ? (
          <Button variant="normal" onClick={formik.handleSubmit} fullWidth>
            Connect
          </Button>
        ) : (
          <></>
        )}
        {keelsonConState ? (
          <Button checked variant="check" fullWidth onClick={disconnectKeelson}>
            Disconnect
          </Button>
        ) : (
          <></>
        )}
      </Stack>
    </form>
  )
}
