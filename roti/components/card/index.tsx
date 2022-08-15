import { styled, Paper } from '@mui/material'

export const OverviewCard = styled(Paper)<{
  bgcolor?: string
  height?: string
}>`
  background-color: ${(props) => props.bgcolor || '#a9a9a9'};
  width: 100%;
  height: ${(props) => props.height || '105px'};
  padding: 15px;
  border-radius: 15px;
`
