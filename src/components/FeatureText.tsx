import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

interface Props {
    title: string,
    backgroundColor: string
}


const FeatureText = (props: Props) => {



    return (



        <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={[styles.category_button_title, { backgroundColor: props.backgroundColor }]}>
                #Category
                    </Text>
            <Text allowFontScaling={false} style={styles.card_title}>{props.title.toUpperCase()}</Text>
        </View>

    )
}

export { FeatureText }

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    card_title: {
        lineHeight: 24,
        fontWeight: '400',
        color: '#FFFFFF',
        textAlignVertical: 'center',
        fontFamily: 'BarlowCondensed-SemiBold',
        textShadowRadius: 3,
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 2, height: 2 },
        fontSize: 24
    },
    category_button_title: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 1,
        fontSize: 12,
        lineHeight: 24,
        color: '#FFFFFF',
        fontFamily: "Roboto-Regular",
        textAlignVertical: 'center',
        backgroundColor: '#00BFD8',
        marginBottom: 7
    },
})