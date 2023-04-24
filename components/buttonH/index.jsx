import React from 'react'
import { ViewBottom, Buttom, TextButtom } from './styles'
import { useNavigation } from '@react-navigation/native'

export default function ButtomHome () {
  const navigation = useNavigation()
  return (
    <ViewBottom>
      <Buttom onPress={() => navigation.navigate('Add')}>
        <TextButtom>Add New Task</TextButtom>
      </Buttom>
    </ViewBottom>
  )
}
