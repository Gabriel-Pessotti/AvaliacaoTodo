import React from 'react'
import { Container, ImageLeft, Button, TextTitle, ImageRigth } from './style'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

export default function HeaderAdd () {
  const navigation = useNavigation()
  return (
    <Container>
      <ImageLeft source={require('../../src/assets/iconG.png')}/>
      <Button
        onPress={() => navigation.navigate('Home')}>
      <AntDesign name="closecircle" size={45} color="white" />
      </Button>
      <TextTitle>Add New Task</TextTitle>
      <ImageRigth source={require('../../src/assets/iconP.png')}/>
    </Container>
  )
}
