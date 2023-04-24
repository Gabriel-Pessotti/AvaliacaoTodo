import React from 'react'
import { } from 'react-native'

import { TextError, TextTopInput, View, TextInput, TextInputData, TextInputNotes } from './style'
import { Controller } from 'react-hook-form'

export function Input ({ name, nameTop, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
 </View>
  )
}

export function InputData ({ name, nameTop, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputData
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
 </View>
  )
}
export function InputNotes ({ name, nameTop, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputNotes
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
 </View>
  )
}
