import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Animated, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import { LayoutConstants } from '@src/constants';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    transitionState: Animated.Value
}

const ActivityScreen = (props: Props) => {
    const width = useWindowDimensions().width;

    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.9, 1],
        outputRange: [0, 0, 1]
    })





    return (

        <Animated.View style={{ flex: 1, opacity: opacity }}>

            <Image style={{ ...styles.image, width: width, height: LayoutConstants.ARTICLE_HEADER_HEIGHT }} resizeMode='cover' source={require('../assets/sample.jpg')} />


            <Text>Lorem Ipsor</Text>
        </Animated.View>


    );

}


export { ActivityScreen }

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