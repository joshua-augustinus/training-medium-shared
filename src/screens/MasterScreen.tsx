import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { OverlayFeatureButton } from '@src/components/OverlayFeatureButton';
import { LayoutConstants } from '@src/constants';
import { CustomScrollView } from '@src/components/CustomScrollView';
import { ActivityScreen } from './ActivityScreen';
import Animated, { Easing } from 'react-native-reanimated';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

type TransitionString = 'default' | 'finished' | 'reversing'

const MasterScreen = (props: Props) => {
    const transitionState = useRef(new Animated.Value(0)).current;
    const [pressInfo, setPressInfo] = useState(null);
    const contentOffset = useRef(0);
    const [transitionString, setTransitionString] = useState<TransitionString>('default');

    useEffect(() => {
        if (pressInfo !== null) {
            Animated.timing(transitionState, {
                toValue: 1,
                easing: Easing.inOut(Easing.ease),
                duration: 500
            }).start(() => {
                setTransitionString('finished');
            });
        }

    }, [pressInfo]);

    useEffect(() => {
        if (transitionString === 'reversing') {
            Animated.timing(transitionState, {
                toValue: 0,
                easing: Easing.inOut(Easing.ease),
                duration: 500
            }).start(() => {
                //setTransitionString('default');
            });
        }

    }, [transitionString])

    const onMenuPress = () => {
        setTransitionString('reversing');

    }

    const onButtonPress = (layout) => {
        console.log("layout", layout);
        setPressInfo(layout);

    }

    const onLayout = (e) => {
        const layout = { x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y };
        console.log("Layout", layout);
        contentOffset.current = layout.y;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: LayoutConstants.HEADER_HEIGHT, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} onLayout={onLayout}>
                <View style={StyleSheet.absoluteFill}>
                    <ActivityScreen pressInfo={pressInfo} transitionState={transitionState} />
                </View>
                {transitionString !== 'finished' &&
                    <View style={StyleSheet.absoluteFill}>
                        <OverlayFeatureButton pressInfo={pressInfo} transitionState={transitionState} yOffset={contentOffset.current} />
                    </View>}
                {transitionString !== 'finished' &&
                    <CustomScrollView onPress={onButtonPress} transitionState={transitionState} />}

            </View>

        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }