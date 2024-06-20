import React from "react"
import { useNavigate } from "react-router-dom"
import ROUTES from "../../ROUTES.json"
import { ObcAlertMenu } from "@oicl/openbridge-webcomponents-react/components/alert-menu/alert-menu"
import { ObcAlertMenuItem } from "@oicl/openbridge-webcomponents-react/components/alert-menu-item/alert-menu-item"
import { ObcAlertIcon } from "@oicl/openbridge-webcomponents-react/components/alert-icon/alert-icon"

export default function AlertMenu({ blink }) {
  const navigate = useNavigate()

  return (
    <ObcAlertMenu onAlertListClick={() => navigate(ROUTES.ALERT_LIST)}>
      <ObcAlertMenuItem
        acknowledgeble={true}
        message="Alert message with more than one line of text"
        timesince="12m 12s"
        time="2020-11-19T13:56:00.414000Z"
      >
        <ObcAlertIcon slot="icon" blinkValue={blink} />
      </ObcAlertMenuItem>
    </ObcAlertMenu>
  )
}
