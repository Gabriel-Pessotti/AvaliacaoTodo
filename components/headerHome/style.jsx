import styled from 'styled-components/native'
import { Theme } from '../../src/theme'

export const Container = styled.View`
background-color: ${Theme.colors.blue[1]};
width: 100%;
height: 222px;
align-items: center;
flex-direction: row;
`
export const ImageLeft = styled.Image`
top: 30px;
`
export const ImageRigth = styled.Image`
left: 199px;
bottom: 50px;
`
