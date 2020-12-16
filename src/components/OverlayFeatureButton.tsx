import { LayoutConstants } from "@src/constants";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

interface Props {
    y: number,
    transitionState: Animated.Value<number>,
    yOffset: number
}

export const FEATURE_BUTTON_HEIGHT = 150;

const OverlayFeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const transform = [{
        translateY: props.transitionState.interpolate({
            inputRange: [0, 1],
            outputRange: [props.y - props.yOffset, 0]
        })
    },
    {
        scale: props.transitionState.interpolate({
            inputRange: [0, 1],
            outputRange: [LayoutConstants.FEATURE_BUTTON_SCALE, 1]
        })
    }
    ]

    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.01, 0.99, 1],
        outputRange: [0, 1, 1, 0]
    })

    const height = props.transitionState.interpolate({
        inputRange: [0, 1],
        outputRange: [FEATURE_BUTTON_HEIGHT, LayoutConstants.ARTICLE_HEADER_HEIGHT]
    })

    const borderRadius = props.transitionState.interpolate({
        inputRange: [0, 1],
        outputRange: [LayoutConstants.FEATURE_BORDER_RADIUS, 0]
    })


    return (

        <Animated.View style={{ transform: transform, opacity: opacity }}>

            <Animated.Image style={{ ...styles.image, width: width, height: height }} resizeMode='cover' source={require('../assets/sample.jpg')} />

        </Animated.View>
    )
}

export { OverlayFeatureButton }

const styles = StyleSheet.create({

    image: {
        width: '100%',

    }
})