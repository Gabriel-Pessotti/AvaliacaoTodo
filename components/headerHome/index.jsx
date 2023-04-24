import React from 'react'
import { Container, ImageLeft, ImageRigth } from './style'

export default function HeaderHome () {
  return (
    <Container>
        <ImageLeft source={require('../../src/assets/homeG.png')}/>
        <ImageRigth source={require('../../src/assets/homeP.png')}/>
      </Container>
  )
}
