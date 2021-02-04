import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ToastAndroid, View, Button } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function TodoBox({ item }) {

    const LeftAction = ()=>{
        return(
            <View style={{flex: 1, marginTop: 15}}>
                <TouchableOpacity onPress={() => {ToastAndroid.show('ola',ToastAndroid.SHORT)}}>
                    <Text style={styles.textL}> concluido </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const RightAction = ()=>{
        return(
            <View style={{flex: 1, marginTop: 15}}>
                <View>
                    <Text style={styles.textR}> Deletar </Text>
                </View>
            </View>
        )
    }


    return(
    
            <Swipeable renderRightActions={LeftAction} renderLeftActions={RightAction}>
              <View style={styles.item}>
                <Text > {item.text} </Text>
              </View>  
            </Swipeable>
    
    )

    
}



const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
        marginTop: 15,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,

    },
    textL: {
        fontFamily: 'fantasy',
        textAlign: 'center',
        lineHeight: 60,
        color: 'white',
        backgroundColor: '#30c549',

    },
    textR: {
        fontFamily: 'fantasy',
        textAlign: 'center',
        lineHeight: 60,
        color: 'white',
        backgroundColor: '#ff4161',
    }
})