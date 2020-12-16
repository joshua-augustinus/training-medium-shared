import { LayoutConstants } from "@src/constants";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

interface Props {
    y: number,
    transitionState: Animated.Value
}

export const FEATURE_BUTTON_HEIGHT = 150;

const OverlayFeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const transform = [{
        translateY: props.transitionState.interpolate({
            inputRange: [0, 1],
            outputRange: [props.y - LayoutConstants.HEADER_HEIGHT, 0]
        })
    }]

    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.1, 1],
        outputRange: [0, 1, 1]
    })



    return (

        <Animated.View style={{ transform: transform, opacity: opacity }}>

            <Animated.Image style={{ ...styles.image, width: width, height: FEATURE_BUTTON_HEIGHT }} resizeMode='cover' source={require('../assets/sample.jpg')} />

        </Animated.View>
    )
}

export { OverlayFeatureButton }

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 1
    },
    image: {
        width: '100%',

    }
})