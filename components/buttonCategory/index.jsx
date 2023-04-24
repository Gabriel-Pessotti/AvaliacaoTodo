/* eslint-disable react/prop-types */
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

export const ButtonCategory = ({ onPress, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Image source={image} />
    </TouchableOpacity>
  )
}
