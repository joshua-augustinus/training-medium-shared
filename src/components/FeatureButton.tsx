import { LayoutConstants } from "@src/constants";
import { PressInfo } from "@src/types";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

interface Props {
    onPress: (layout: PressInfo) => void,
    imageUrl: string,
    title: string
}


const FeatureButton = (props: Props) => {
    const width = useWindowDimensions().width;
    const cardRef = useRef(null);
    const transform = [{ scale: LayoutConstants.FEATURE_BUTTON_SCALE }];

    const onPress = React.useCallback(() => {
        cardRef.current.measure((x, y, width, height, pageX, pageY) => {
            const layout = { x: pageX, y: pageY, width, height, imageUrl: props.imageUrl, title: props.title };
            props.onPress(layout);
        });
    }, []);

    console.log(props.imageUrl);

    return (


        <TouchableOpacity onPress={onPress} ref={cardRef} style={{ zIndex: 1000, transform: transform }} >
            <Image style={{ ...styles.image, width: width, height: LayoutConstants.FEATURE_BUTTON_HEIGHT }}
                resizeMode='cover' source={{ uri: props.imageUrl }} />
            <View style={styles.contentContainer}>
                <Text allowFontScaling={false} style={styles.card_title}>{props.title.toUpperCase()}</Text>
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
        alignItems: 'flex-start',
        padding: 20
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
})