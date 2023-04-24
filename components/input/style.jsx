import styled from 'styled-components/native'
import { Theme } from '../../src/theme'

export const View = styled.View`
  position: relative;
`

export const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${Theme.colors.black[3]};
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${Theme.colors.white[1]};
  height: 52px;
`
export const TextInputData = styled.TextInput`
  width: 45%;
  border-width: 1px;
  border-color: ${Theme.colors.black[3]};
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${Theme.colors.white[1]};
  height: 52px;
`

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
`
export const TextTopInput = styled.Text`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  top: 10px;
  color: ${Theme.colors.black[1]};
  margin-bottom: 10px;
`
export const TextInputNotes = styled.TextInput`
   width: 100%;
  border-width: 1px;
  display: flex;
  border-color: ${Theme.colors.black[3]};
  margin-top: 15px;
  color: ${Theme.colors.black[1]};
  border-radius: 5px;
  padding-left: 10px;
  background: ${Theme.colors.white[1]};
  height: 150px;
  `
