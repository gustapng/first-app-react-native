import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function TextMont({ children, style }) {
    let defaultStyle = styles.text;

    if (style?.fontWeight === 'bold') {
        defaultStyle = styles.textBold;
    }
    return <Text style={[style, defaultStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})