import React from "react";
import { View, Image , StyleSheet, FlatList } from 'react-native';
import TextMont from "../../../components/TextMont";

export default function Item({item: { name, image } }) {

    return <View key={name} style={styles.item}>
            <Image source={image} style={styles.image}></Image>
            <TextMont style={styles.text}>{ name }</TextMont>
        </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
});