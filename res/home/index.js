import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid, TextInput, TouchableHighlight, FlatList, TouchableOpacity, StyleSheet, Touchable, TouchableOpacityBase } from 'react-native';
import TodoBox from '../components/todoBox';
export default function App() {

  const [ToDo, setToDo] = useState([
      { text: 'Fazer as compras'},
      { text: 'Fazer coco'},
      { text: 'ir fazer coisa' }
  ])
  const [Task, setTask] = useState([])

  const setTasks = function() {
    setToDo([{text: `${Task}`}])
  }

  return(
    <>
      <FlatList 
          data={ToDo}
          renderItem={({item}) => (
            <TodoBox item={item} />
            )} />    

      <TextInput
        style={styles.TextInput}
        value={Task}
        onChangeText={(value)=>{setTask(value)}}
      />
      <View style={styles.ViewtouchableAdd}>
        <TouchableHighlight backgroundColor2={'blue'} style={styles.touchableAdd} onPress={setTasks}>
          <Text style={{color: 'white', fontWeight: 'bold'}}> Adicionar </Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  TextInput: {
    paddingLeft: 15,
    borderRadius: 17,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  button: {
    padding: 50,
    backgroundColor: 'red',
  },
  touchableAdd: {
    justifyContent: 'center',
    backgroundColor: '#835799',

    width: 350, height: 50,
    alignItems: 'center',
    borderRadius: 100
  },
  ViewtouchableAdd: {
    alignContent: 'center',
    alignItems: 'center'
  },
})