import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native'

import Home from './res/home';
import Info from './res/info';


const Stack =createStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name='Home' 
              component={Home}
                options={{
                  title: "ToDo App",
                  headerTitleStyle:{
                    fontFamily: "Normal" 
                  }
                }}/>
            <Stack.Screen 
              name='Info' 
              component={Info}
                options={{
                  title: "Informações"
                }} 
                />
          </Stack.Navigator>
      </NavigationContainer>
  );
}