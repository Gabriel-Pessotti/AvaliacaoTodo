import React, { useState } from 'react'
import { View, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import HeaderAdd from '../../../components/headerAdd'
import { useForm } from 'react-hook-form'
import styles from './style'
import { ButtonCategory } from '../../../components/buttonCategory'
import { Input, InputData, InputNotes } from '../../../components/input'
import { Categorias, Inputs, Txtcategory, ViewDta, ViewNotes, ViewTme } from './styled'
import ButtomAdd from '../../../components/buttonA'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'

export default function Add () {
  const [selected, setSelected] = useState()
  const navigation = useNavigation()
  const schema = yup.object().shape({
    name: yup.string().min(4, '* Minimo 4 caracteres').required('Informe seu titulo'),
    nota: yup.string().min(5, '* A anotação deve conter pelo menos 5 digitos').required('Informe sua anotação')
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      nota: ''
    },
    resolver: yupResolver(schema)
  })

  async function setCategoryOnPress (item) {
    console.log(item)
    if (item === 1) {
      setSelected({
        image: 'https://images2.imgbox.com/1f/88/DDVrvBXp_o.png',
        backgorund: '#DBECF6'
      })
    } else if (item === 2) {
      setSelected({
        image: 'https://images2.imgbox.com/99/84/509wmiw1_o.png',
        background: '#E7E2F3'
      })
    } else {
      setSelected({
        image: 'https://images2.imgbox.com/24/28/RZqEMuh0_o.png',
        background: '#FEF5D3'
      })
    }
    console.log(selected)
  }
  const onSubmit = async input => {
    const form = {
      name: input.name,
      nota: input.nota,
      background: selected.background,
      image: selected.image,
      status: true,
      time: input.time,
      date: input.date
    }
    console.log(form)
    api.post('task', form)
    navigation.navigate('Home')
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <HeaderAdd/>
      <View style={styles.ContainerMain}>
          <Input
          placeholder='Task Title'
          nameTop='Test Title'
          name='name'
          control={control}
          errors={errors}
          />
          <Categorias>
            <Txtcategory>Category</Txtcategory>
            <ButtonCategory onPress={() => setCategoryOnPress(2)} image={require('../../assets/task.png')} />
            <ButtonCategory onPress={() => setCategoryOnPress(1)} image={require('../../assets/event.png')} />
            <ButtonCategory onPress={() => setCategoryOnPress(3)} image={require('../../assets/goal.png')} />
          </Categorias>

          <Inputs>

          <ViewDta>
          <InputData
          placeholder='Ex: 23/04/23'
          nameTop='Date'
          name='date'
          control={control}
          errors={errors}
          />
          </ViewDta>
          <ViewTme>
          <InputData
          placeholder='Ex: 14:30'
          nameTop='Time'
          name='time'
          control={control}
          errors={errors}
          />
          </ViewTme>
        </Inputs>

          <ViewNotes >
          <InputNotes
          placeholder='Notes'
          nameTop='Notes'
          name='nota'
          control={control}
          errors={errors}
          />
          </ViewNotes>
           <ButtomAdd onPress={handleSubmit(onSubmit)}/>
          </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  )
}
