import { styled, Typography } from '@mui/material'

export const NavbarText = styled(Typography)<{
  color?: string
  colorHover?: string
  colorLine?: string
  textalign?: string
  fsize?: string
  margin?: string
  padding?: string
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: 500;
  color: ${(props) => props.color || 'var(--black)'};
  text-align: ${(props) => props.textalign || 'left'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  &:after {
    background: ${(props) => props.colorLine || 'var(--theme)'};
  }
  &:hover {
    color: ${(props) => props.colorHover || 'var(--theme)'};
  }
`

export const OverviewContent = styled(Typography)<{
  color?: string
  fontsize?: string
  fontfamily?: string
}>`
  display: inline-block;
  font-family: ${(props) => props.fontfamily || 'Roboto'};
  font-size: ${(props) => props.fontsize || '23px'};
  font-weight: 700;
  color: ${(props) => props.color || '#a9a9a9'};
`

export const TitleNav = styled(Typography)<{
  textalign?: string
  color?: string
  fsize?: string
}>`
  font-family: Roboto;
  font-size: ${(props) => props.fsize || '25px'};
  font-weight: 700;
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textalign || 'center'};
`
