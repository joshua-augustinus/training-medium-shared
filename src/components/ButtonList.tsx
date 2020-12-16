import React from 'react';
import { FeatureButton } from '@src/components/FeatureButton';
import Animated from 'react-native-reanimated';
import * as ExploreService from '@src/services/ExploreService';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    onPress: (layout) => void,
    transitionState: Animated.Value<number>
}

let data = ExploreService.getExploreData();

const ButtonList = (props: Props) => {


    const opacity = props.transitionState.interpolate({
        inputRange: [0, 0.1],
        outputRange: [1, 0]
    })

    return (

        <Animated.ScrollView keyboardShouldPersistTaps='always' style={{ opacity: opacity }}>
            {data.map((item) => {
                return <FeatureButton imageUrl={item.imageUrl} key={item.index.toString()} onPress={props.onPress} />

            })}

        </Animated.ScrollView>




    );

}


export { ButtonList }