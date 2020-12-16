import { LayoutConstants } from "@src/constants";
import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

interface Props {
    pressInfo: any,
    transitionState: Animated.Value<number>,
    yOffset: number
}


const OverlayFeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const y = props.pressInfo?.y;

    if (!y) {
        return null;
    }

    const transform = [{
        translateY: props.transitionState.interpolate({
            inputRange: [0, 1],
            outputRange: [y - props.yOffset, 0]
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
        outputRange: [LayoutConstants.FEATURE_BUTTON_HEIGHT, LayoutConstants.ARTICLE_HEADER_HEIGHT]
    })

    const borderRadius = props.transitionState.interpolate({
        inputRange: [0, 1],
        outputRange: [LayoutConstants.FEATURE_BORDER_RADIUS, 0]
    })


    return (

        <Animated.View style={{ transform: transform, opacity: opacity, width: width, height: height }}>

            <Image style={{ ...styles.image }} resizeMode='cover' source={{ uri: props.pressInfo.imageUrl }} />

        </Animated.View>
    )
}

export { OverlayFeatureButton }

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%'

    }
})