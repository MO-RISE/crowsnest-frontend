import React from "react"
import styled from "@emotion/styled"
import {
  ObcTable,
  ObcTableHeader,
  ObcTableRow,
  ObcTableHeadCell,
  ObcTableBody,
  ObcTableCell,
} from "@oicl/openbridge-webcomponents-react/components/table/table"
import { ObcAlertIcon } from "@oicl/openbridge-webcomponents-react/components/alert-icon/alert-icon"
import { ObcButton } from "@oicl/openbridge-webcomponents-react/components/button/button"

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`

const StyledObcTableHeadCell = styled(ObcTableHeadCell)`
  width: 100%;
`

export default function AlertList() {
  return (
    <div>
      <ObcTable>
        <ObcTableHeader>
          <ObcTableRow>
            <ObcTableHeadCell></ObcTableHeadCell>
            <StyledObcTableHeadCell>Cause</StyledObcTableHeadCell>
            <ObcTableHeadCell>Time</ObcTableHeadCell>
            <ObcTableHeadCell>Ack</ObcTableHeadCell>
          </ObcTableRow>
        </ObcTableHeader>
        <ObcTableBody>
          <ObcTableRow>
            <ObcTableCell>
              <IconWrapper>
                <ObcAlertIcon name="alarm-unack" blinkValue={true} />
              </IconWrapper>
            </ObcTableCell>
            <ObcTableCell>An alert message</ObcTableCell>
            <ObcTableCell>12:00:00 12. feb</ObcTableCell>
            <ObcTableCell>
              <ObcButton>Ack</ObcButton>
            </ObcTableCell>
          </ObcTableRow>
          <ObcTableRow>
            <ObcTableCell>
              <IconWrapper>
                <ObcAlertIcon name="warning-unack" blinkValue={true} />
              </IconWrapper>
            </ObcTableCell>
            <ObcTableCell>A warning message</ObcTableCell>
            <ObcTableCell>12:00:00 12. feb</ObcTableCell>
            <ObcTableCell></ObcTableCell>
          </ObcTableRow>
        </ObcTableBody>
      </ObcTable>
    </div>
  )
}
