import styled from 'styled-components'
import { CollapsibleWrapper } from './collapsible/CollapsibleWrapper'
import { Infobox } from './infobox/Infobox'
const InfoboxWrapper = styled(CollapsibleWrapper)`
  width: 320px;
  background-color: white;
  pointer-events: auto;
  margin: 22px 0 0;
`

export const InfoboxPanel = ({ className, data, subtype, isRunning }) => {
  return (
    <InfoboxWrapper className={className} title={'詳細資訊'}>
      <Infobox data={data} subtype={subtype} isRunning={isRunning} />
    </InfoboxWrapper>
  )
}
