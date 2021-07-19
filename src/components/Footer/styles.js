import styled from 'styled-components'
import {Marginals} from '../../styles'

export const Footer = styled.footer`
    ${Marginals}
    bottom: 0;
    justify-content: space-between;
    padding: .93em;
`

export const H2 = styled.h2`
    font-size:  1.5em;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    padding: .93rem;
    @media (max-width: 900px) {
        font-size: 1.2em;
    }
    @media (max-width: 700px) {
        font-size: 1em;
        padding: 0;
    }
`

export const H2Middle = styled(H2)`
    flex-grow: 1;
    position: relative;
    text-align: center;
    color: #fbfbfb;
    &:after {
        background-color: #fbfbfb;
        content: '';
        display: block;
        height: .125em;
        position: absolute;
        left: 2.5em;
        right: 2.5em;
        top: 55%;
        width: auto;
    }
`