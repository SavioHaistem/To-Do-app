import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ToastAndroid, View, Button } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function TodoBox({ item, pressHandler }) {

    const LeftAction = ()=>{
        return(
            <View>
                <TouchableOpacity onPress={() => {ToastAndroid.show('ola',ToastAndroid.SHORT)}}>
                    <Text style={styles.text}> concluido </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const RightAction = () => {
        return(
            <TouchableOpacity>
                <Text style={styles.text}> Deletar </Text>
            </TouchableOpacity>
        )
    }

    return(

        <Swipeable renderRightActions={LeftAction} renderLeftActions={RightAction}>
                <Text style={styles.item}> {item.text} </Text>  
        </Swipeable>
            
    )

    
}



const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderRadius: 17,
        padding: 16,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    text: {
        fontFamily: 'fantasy',
        textAlign: 'center',
        lineHeight: 60,
        color: 'white',
        backgroundColor: '#a536b9',
        width: 68,
        height: 68
    }
})