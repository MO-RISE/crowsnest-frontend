import React from "react"
import { Slider } from "@mui/material"
import { styled } from "@mui/material/styles"
import SVGThruster from "./svg/SvgSliderThruster"
import { useRecoilState } from "recoil"
import { ATOM_OS_THRUSTERS } from "../../../recoil/atoms.js"

const MySlider = styled(Slider)({
  color: "#ffffff00",
  width: "100%",
  padding: 0,

  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 35,
    height: 35,
    borderRadius: "50% 50% 50% 0%",
    border: "solid",
    borderColor: "#707070",
    backgroundColor: "#404040",

    transformOrigin: "center",
    transform: "translate(0%, 0%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(0%, -25%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
})

function valuetext(value) {
  return `${value}%`
}

export default function SliderControlThruster() {
  const [thrusters, setThrusters] = useRecoilState(ATOM_OS_THRUSTERS)

  function onChangeThru(e) {
    setThrusters({
      ...thrusters,
      ["THRUSTER_0"]: {
        ...thrusters["THRUSTER_0"],
        setPower: e.target.value,
      },
    })
  }

  return (
    <div style={{ position: "relative", width: "200px", height: "50px" }}>
      <SVGThruster />
      <MySlider
        orientation="horizontal"
        size="small"
        valueLabelDisplay="on"
        track={false}
        max={100}
        min={-100}
        defaultValue={0}
        valueLabelFormat={valuetext}
        value={thrusters?.THRUSTER_0?.setPower}
        onChange={onChangeThru}
        sx={{ position: "absolute", left: "0" }}
      />
    </div>
  )
}
