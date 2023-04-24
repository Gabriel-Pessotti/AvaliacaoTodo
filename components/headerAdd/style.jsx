import styled from 'styled-components/native'
import { Theme } from '../../src/theme'

export const Container = styled.View`
  width: 100%;
  height: 96px;
  background-color: ${Theme.colors.blue[1]}
`
export const ImageLeft = styled.Image`

`
export const Button = styled.TouchableOpacity`
  left: 12px;
  top: 20px;
  position: absolute;
  width: 48px;
  height: 48px;
`
export const TextTitle = styled.Text`
position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: ${Theme.colors.white[1]};
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-top: 35px;
`
export const ImageRigth = styled.Image`
  left: 348px;
  bottom: 100px;
`
