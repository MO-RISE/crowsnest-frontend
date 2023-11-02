import React from "react"
import axios from "axios"
import * as yup from "yup"
import { useFormik } from "formik"
import { Stack, TextField, Button, Typography } from "@mui/material"
import { atomKeelsonConnectionState } from "../../../recoil/atoms"
import { useRecoilValue } from "recoil"

export default function KeelsonQueryable() {
  const validationSchema = yup.object({
    host: yup.string().required("Required"),
    keyExprVar: yup.string().required("Required"),
  })

  /* eslint-disable */
  const initFormValuesManual = {
    // username: process.env.REACT_APP_MQTT_USERNAME ? process.env.REACT_APP_MQTT_USERNAME : "",
    // password: process.env.REACT_APP_MQTT_PASSWORD ? process.env.REACT_APP_MQTT_PASSWORD : "",
    host: "http://localhost:8000",
    keyExprVar: "TEST/query",
  }
  /* eslint-enable */

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initFormValuesManual,
    onSubmit: values => {
      submitMsg(values)
    },
  })

  const submitMsg = values => {
    console.log("Submitted Queryable to KEELSON: ", values)

    axios.get(values.host + "/" + values.keyExprVar, { test: "body_msg" }).then(res => {
      console.log("Queryable Response: ", res)
    })

    return values
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={1} sx={{ minWidth: "25vw" }}>
        <Typography variant="h5"> Keelson Queryable / GET </Typography>
        <TextField
          id="host"
          label="Host URL"
          fullWidth
          variant="filled"
          size="small"
          defaultValue={formik.values.host}
          onChange={formik.handleChange}
          error={formik.touched.host && Boolean(formik.errors.host)}
          helperText={formik.touched.host && formik.errors.host}
        />
        <TextField
          id="keyExprVar"
          label="Key Expression & Variables"
          fullWidth
          variant="filled"
          size="small"
          defaultValue={formik.values.keyExprVar}
          onChange={formik.handleChange}
          error={formik.touched.keyExprVar && Boolean(formik.errors.keyExprVar)}
          helperText={formik.touched.keyExprVar && formik.errors.keyExprVar}
        />

        <Button type="submit" variant="contained" color="info" fullWidth sx={{ marginTop: "0.4rem" }}>
          Request
        </Button>
      </Stack>
    </form>
  )
}
