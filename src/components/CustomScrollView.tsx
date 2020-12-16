import React from 'react';
import { Animated, ScrollView } from 'react-native';
import { FeatureButton } from '@src/components/FeatureButton';


/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    onPress: (layout) => void,
    transitionState: Animated.Value
}

const CustomScrollView = (props: Props) => {


    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.1],
        outputRange: [1, 0]
    })

    return (

        <Animated.ScrollView keyboardShouldPersistTaps='always' style={{ opacity: opacity }}>
            <FeatureButton onPress={props.onPress} />
            <FeatureButton onPress={props.onPress} />

        </Animated.ScrollView>




    );

}


export { CustomScrollView }