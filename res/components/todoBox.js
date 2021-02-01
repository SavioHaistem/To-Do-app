import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ToastAndroid, View, Button } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function TodoBox({ item, pressHandler }) {
    
    return(

        <Swipeable renderRightActions={LeftAction} renderLeftActions={RightAction}>
                <Text style={styles.item}> {item.text} </Text>  
        </Swipeable>
            
    )
}
const LeftAction = ()=>{
    return(
        <View>
            <TouchableOpacity style={styles.text}>
                <Text Style={styles.text}> foi </Text>
            </TouchableOpacity>
        </View>
    )
}
const RightAction = () => {
    return(
        <View>
            <Text> Deletar </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderStyle:'dotted solid double',
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
        color: 'red'
    },
})