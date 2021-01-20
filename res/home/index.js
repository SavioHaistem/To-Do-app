import React, { useState, Component } from 'react';
import { View, Text, Button, ToastAndroid, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TodoBox from '../components/todoBox'

export default function App() {

  const [ToDo, setToDo] = useState([
      { text: 'Fazer as compras', key: '1' },
      { text: 'Fazer coco', key: '2' }
  ])

  return(
    <>
        
    <FlatList 
      data={ToDo}
      renderItem={({item}) => (
        <TodoBox item={item}/>
          )} />
    </>
  )
}