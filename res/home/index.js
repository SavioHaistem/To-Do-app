import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { create } from 'react-test-renderer';
import TodoBox from '../components/todoBox';
import { Icon } from 'react-native-elements';
export default function App() {

  const [ToDo, setToDo] = useState([
      { text: 'Fazer as compras', key: '1' },
      { text: 'Fazer coco', key: '2' }
  ])

  const pressHandler = (key) => {
    setToDo((Todos) => {
      return Todos.filter(ToDo => ToDo.key != key );
    })
  }


  return(
    <>
    <FlatList 
        data={ToDo}
        renderItem={({item}) => (
          <TodoBox item={item} pressHandler={pressHandler}/>
          )} />    

    <TextInput
      style={Style.TextInput}
    />
    </>
  )
}

const Style = StyleSheet.create({
  TextInput: {
    paddingLeft: 15,
    borderRadius: 100,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    color: 'red',
  }
})