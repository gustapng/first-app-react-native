import React from "react";
import { Image, StyleSheet, View } from "react-native";

import TextMont from "../../../components/TextMont";
import ButtonGreen from "../../../components/ButtonGreen";

export default function details({ name, image, farmName, description, price, button }) {
    return <>
        <TextMont style={styles.name}>{ name }</TextMont>
        <View style={styles.farm}>
            <Image style={styles.farmImage} source={ image }/>
            <TextMont style={styles.farmName}>{ farmName }</TextMont>
        </View>
        <TextMont style={styles.description}>{ description }</TextMont>
        <TextMont style={styles.price}>{ price }</TextMont>
        <ButtonGreen>{ button }</ButtonGreen>
    </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12
    },
    farmImage: {
        width: 32,
        height: 32
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 8
    }
});