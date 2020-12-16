import { LayoutConstants } from "@src/constants";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

interface Props {
    onPress: (layout: any) => void,
    imageUrl: string
}


const FeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const cardRef = useRef(null);
    const transform = [{ scale: LayoutConstants.FEATURE_BUTTON_SCALE }];

    const onPress = React.useCallback(() => {
        cardRef.current.measure((x, y, width, height, pageX, pageY) => {
            const layout = { x: pageX, y: pageY, width, height, imageUrl: props.imageUrl };
            props.onPress(layout);
        });
    }, []);

    console.log(props.imageUrl);

    return (


        <TouchableOpacity onPress={onPress} ref={cardRef} style={{ zIndex: 1000 }} >
            <Image style={{ ...styles.image, width: width, height: LayoutConstants.FEATURE_BUTTON_HEIGHT, transform: transform }}
                resizeMode='cover' source={{ uri: props.imageUrl }} />
            <View style={styles.contentContainer}>
                <Text style={styles.text}>Placeholder</Text>
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
        borderRadius: LayoutConstants.FEATURE_BORDER_RADIUS
    },
    contentContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})