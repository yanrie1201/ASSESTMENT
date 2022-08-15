import { styled, Button } from '@mui/material'

export const SubmitButton = styled(Button)<{
  width?: string
  color?: string
  fsize?: string
  fweight?: string
  bgcolor?: string
  padding?: string
  borderradius?: string
  margin?: string
  textTranform?: string
}>`
  text-align: center;
  font-family: Georama, sans-serif;
  font-weight: ${(props) => props.fweight || '400'};
  text-transform: ${(props) => props.textTranform || 'Capitalize'};
  z-index: 1;
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || '#FFF'};
  font-size: ${(props) => props.fsize || '16px'};
  background-color: ${(props) => props.bgcolor || '#1F96CC'};
  border-radius: ${(props) => props.borderradius || '20px'};
  padding: ${(props) => props.padding || '5px'};
  margin: ${(props) => props.margin || '5px'};
  &:hover {
    color: ${(props) => props.bgcolor || '#1F96CC'};
    background-color: ${(props) => props.color || '#FFF'};
  }
`
