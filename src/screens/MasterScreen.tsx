import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Animated, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { FeatureButton } from '@src/components/FeatureButton';
import { OverlayFeatureButton } from '@src/components/OverlayFeatureButton';
import { LayoutConstants } from '@src/constants';
import { CustomScrollView } from '@src/components/CustomScrollView';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const MasterScreen = (props: Props) => {
    const transitionState = useRef(new Animated.Value(0)).current;
    const [y, setY] = useState(0);

    useEffect(() => {
        if (y > 0) {
            Animated.timing(transitionState, {
                toValue: 1,
                useNativeDriver: true,
                duration: 500
            }).start();
        }

    }, [y]);

    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const onButtonPress = (layout) => {
        console.log("layout", layout);
        setY(layout.y);

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: LayoutConstants.HEADER_HEIGHT, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={StyleSheet.absoluteFill}>
                    <OverlayFeatureButton y={y} transitionState={transitionState} />
                </View>

                <CustomScrollView onPress={onButtonPress} transitionState={transitionState} />

            </View>

        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }