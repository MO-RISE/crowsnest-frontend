import React from "react"
import { useNavigate } from "react-router-dom"
import ROUTES from "../../ROUTES.json"
import { ObcAlertMenu } from "@oicl/openbridge-webcomponents-react/components/alert-menu/alert-menu"
import { ObcAlertMenuItem } from "@oicl/openbridge-webcomponents-react/components/alert-menu-item/alert-menu-item"
import { Obi14AlarmUnack } from "@oicl/openbridge-webcomponents-react/icons/icon-14-alarm-unack"

export default function AlertMenu() {
  const navigate = useNavigate()

  return (
    <ObcAlertMenu onAlertListClick={() => navigate(ROUTES.ALERT_LIST)}>
      <ObcAlertMenuItem
        acknowledgeble={true}
        message="Alert message with more than one line of text"
        timesince="12m 12s"
        time="2020-11-19T13:56:00.414000Z"
      >
        <Obi14AlarmUnack slot="icon" useCssColor={true} />
      </ObcAlertMenuItem>
    </ObcAlertMenu>
  )
}
