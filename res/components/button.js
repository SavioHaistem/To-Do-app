import { ThemeProvider } from '@react-navigation/native'
import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

export default function ButtonStyled({text}) {
  return(
    <View>
      <TouchableOpacity Style={Theme.button}>
        <Text Style={Theme.TextButton}>{ text }</Text>
      </TouchableOpacity>
    </View>
  )
} 

const Theme = StyleSheet.create(
{
  button:{
    color: 'red',
    padding: 10
  },
  TextButton:{
    color: 'white'
  }
}
)