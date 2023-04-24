import styled from 'styled-components/native'
import { Theme } from '../../src/theme'

export const ViewBottom = styled.View`
  
`
export const Buttom = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    height: 56px;
    border-radius: 50px;
    background-color: ${Theme.colors.blue[1]};
    top: 80px;
`
export const TextButtom = styled.Text`
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: ${Theme.colors.white[1]};
`
