import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import TextMont from './TextMont';


export default function ButtonGreen({ children }) {
    return <>   
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <TextMont style={styles.buttonText}>{ children }</TextMont>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})