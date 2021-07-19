import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './logo.svg'
import {Marginals} from '../../styles'

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 47.5em;
  width: 100%;
`

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 1.87em;
`
