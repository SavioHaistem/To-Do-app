import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TodoBox({item}) {
    return(
        <TouchableOpacity>
            <Text> {item.text} </Text>
        </TouchableOpacity>
            
    )
}