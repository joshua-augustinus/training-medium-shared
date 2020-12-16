import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { FeatureButton } from '@src/components/FeatureButton';
import { OverlayFeatureButton } from '@src/components/OverlayFeatureButton';

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

    }, []);

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
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FeatureButton onPress={onButtonPress} />
            </View>
            <View style={StyleSheet.absoluteFill}>
                <OverlayFeatureButton y={y} />

            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }