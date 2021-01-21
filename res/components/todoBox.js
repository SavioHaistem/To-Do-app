import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoBox({ item, pressHandler }) {
    return(

        <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
            <Text style={styles.item}> {item.text} </Text>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 100,
        padding: 16,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
    }
})