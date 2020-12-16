import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

interface Props {
    onPress: (layout: any) => void
}

export const FEATURE_BUTTON_HEIGHT = 150;

const FeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const cardRef = useRef(null);

    const onPress = React.useCallback(() => {
        cardRef.current.measure((x, y, width, height, pageX, pageY) => {
            const layout = { x: pageX, y: pageY, width, height };
            props.onPress(layout);
        });
    }, []);

    return (


        <TouchableOpacity onPress={onPress} ref={cardRef} style={{ zIndex: 1000 }} >
            <Image style={{ ...styles.image, width: width, height: FEATURE_BUTTON_HEIGHT }} resizeMode='cover' source={require('../assets/sample.jpg')} />
            <View style={StyleSheet.absoluteFill}>
                <Text>Placeholder</Text>
            </View>
        </TouchableOpacity>
    )
}

export { FeatureButton }

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