/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import {
  Container, TitleHeader, ImageP, TextTime, Card, Header, TitleComplet, IconImage,
  CardError, ViewContainer, ViewContainerFalse, ListText, ListTextFalse, IonHome, ContainerMain, Txtfeitas, Txttimefeitas, TxtNaoFeitas, TxttimeNaofeitas
} from './styled'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import api from '../../services/api'
import ButtomHome from '../../../components/buttonH'
import HeaderHome from '../../../components/headerHome'

export default function Home () {
  const [isChecked, setChecked] = useState(false)
  const navigation = useNavigation()
  const [feitas, setFeitas] = useState([])
  const [naoFeitas, setNaoFeitas] = useState([])

  useFocusEffect(
    useCallback(() => {
      getList()
    }, [])
  )

  async function getList () {
    const response = await api.get('task')
    setFeitas(response)
    console.log(response.data)
    const data = response.data
    setFeitas(data.filter((data) => !data.verificar))
    setNaoFeitas(data.filter((data) => !data.verificar))
  }

  const date = new Date()
  const dateString = date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  console.log(date)
  const Item = ({ name, time, image }) => (
    <ViewContainer>
    <IonHome>
      <IconImage source={{ uri: image }}/>
    </IonHome>
    <ListText>
    <Txtfeitas>{name}</Txtfeitas>
    <Txttimefeitas>{time}</Txttimefeitas>
    </ListText>
    <Checkbox
          value={''}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
  </ViewContainer>
  )
  const ItemFalse = ({ name, time, image }) => (
  <ViewContainerFalse>
    <IonHome>
      <IconImage source={{ uri: image }}/>
    </IonHome>
    <ListTextFalse>
    <TxtNaoFeitas>{name}</TxtNaoFeitas>
    <TxttimeNaofeitas>{time}</TxttimeNaofeitas>
    </ListTextFalse>
    <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
  </ViewContainerFalse>
  )

  return (
    <Container>
      <View>
      <HeaderHome/>
      <TextTime>{dateString}</TextTime>
      <TitleHeader>My Todo List</TitleHeader>
      </View>

      <ContainerMain>
        <Card
        data={naoFeitas}
        renderItem={({ item }) => <Item name={item.name} time={item.time} image={item.image}/>}
        keyExtractor={item => item.id}
      />
           <TitleComplet>Completed</TitleComplet>

        <CardError
        data={feitas}
        renderItem={({ item }) => <ItemFalse name={item.name} time={item.time} image={item.image} />}
        keyExtractor={item => item.id}
        />
         <ButtomHome/>
          </ContainerMain>
    </Container>
  )
}
