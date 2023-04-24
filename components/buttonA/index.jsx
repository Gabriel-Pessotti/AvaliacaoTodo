import React from 'react'
import { Buttom, TextButtom } from './styles'

export default function ButtomAdd ({ onPress }) {
  return (
      <Buttom onPress={onPress}>
        <TextButtom>Save</TextButtom>
      </Buttom>
  )
}
