import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Pressable, Animated, Alert, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationDrawerProp } from 'react-navigation-drawer';

import { Header } from '@src/components/Header';
import ReAnimated, { Easing } from 'react-native-reanimated';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}


const FRICTION = 5;//overshoot; higher overshoots less
const SPEED = 15//tension

const MasterScreen = (props: Props) => {
    const screenWidth = useWindowDimensions().width;
    const contentOffset = useRef(0);
    const animationState = useRef(new Animated.Value(0)).current;
    const reAnimatedState = useRef(new ReAnimated.Value(0)).current;
    const animationString = useRef('default');

    const onLayout = (e) => {
        const layout = { x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y };
        console.log("Layout", layout);
        contentOffset.current = layout.y;
    }

    const onPressed = () => {
        if (animationString.current === 'finished') {
            Animated.spring(animationState, {
                toValue: 0,
                useNativeDriver: true,
                friction: FRICTION,
                tension: SPEED
            }).start(() => {
                animationString.current = 'default'
                console.log("Finished spring")
            });

            ReAnimated.timing(reAnimatedState, {
                toValue: 0,
                easing: Easing.bezier(0.42, 0, 0.58, 1),
                duration: 400
            }).start(() => {
                console.log("Finished layout")

            });

        } else {
            Animated.spring(animationState, {
                toValue: 1,
                useNativeDriver: true,
                friction: FRICTION,
                tension: SPEED
            }).start(() => {
                animationString.current = 'finished'
            });

            ReAnimated.timing(reAnimatedState, {
                toValue: 1,
                easing: Easing.bezier(0.42, 0, 0.58, 1),
                duration: 400
            }).start();

        }

    }

    const translateY = animationState.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
    })

    const transform = [{ translateY: translateY }]

    const width = ReAnimated.interpolate(reAnimatedState, {
        inputRange: [0, 1],
        outputRange: [screenWidth, screenWidth - 40]
    })

    const height = ReAnimated.interpolate(reAnimatedState, {
        inputRange: [0, 1],
        outputRange: [214, 160]
    })

    const borderRadius = ReAnimated.interpolate(reAnimatedState, {
        inputRange: [0, 1],
        outputRange: [0, 16]
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 1 }} onLayout={onLayout}>
                <Animated.View style={{ transform: transform, alignItems: 'center' }}>
                    <Pressable onPress={onPressed}>

                        <ReAnimated.Image source={{ uri: 'https://hellodriven.github.io/mobile-static/v1/images/1007.jpg' }} style={{ height: height, width: width, borderRadius: borderRadius }} />

                    </Pressable>
                </Animated.View>



            </View>

        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }