import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import top from '../../../../assets/topo.png';
import TextMont from "../../../components/TextMont";

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
    return <>
        <Image source={top} style={styles.top}/>
        <TextMont style={styles.title}>{ title }</TextMont>
    </>          
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});