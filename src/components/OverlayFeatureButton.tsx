import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

interface Props {
    y: number,
}

export const FEATURE_BUTTON_HEIGHT = 150;

const OverlayFeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const transitionState = useRef(new Animated.Value(0)).current;
    const transform = [{
        translateY: transitionState.interpolate({
            inputRange: [0, 1],
            outputRange: [props.y, 0]
        })
    }]

    useEffect(() => {
        if (props.y > 0) {
            Animated.timing(transitionState, {
                useNativeDriver: true,
                toValue: 1,
                duration: 500
            }).start();
        }

    }, [props.y]);


    return (

        <Animated.View style={{ transform: transform }}>

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