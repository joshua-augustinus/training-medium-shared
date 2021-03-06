import React from 'react';
import { FeatureButton } from '@src/components/FeatureButton';
import Animated from 'react-native-reanimated';
import * as ExploreService from '@src/services/ExploreService';
import { useWindowDimensions } from 'react-native';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    onPress: (layout) => void,
    transitionState: Animated.Value<number>
}

let data = ExploreService.getExploreData();

const ButtonList = (props: Props) => {
    const width = useWindowDimensions().width;

    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.1],
        outputRange: [1, 0]
    })

    const translateX = props.transitionState.interpolate({
        inputRange: [0, 0.90, 1],
        outputRange: [0, 0, -width]
    })

    const transform = [{ translateX: translateX }]

    return (

        <Animated.ScrollView style={{ opacity: opacity, transform: transform }}>
            {data.map((item) => {
                return <FeatureButton icon={item.icon} backgroundColor={item.backgroundColor} title={item.title} imageUrl={item.imageUrl} key={item.index.toString()} onPress={props.onPress} />

            })}

        </Animated.ScrollView>




    );

}


export { ButtonList }