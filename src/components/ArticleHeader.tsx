import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import { LayoutConstants } from '@src/constants';
import { PressInfo } from '@src/types';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    pressInfo: PressInfo
}

const ArticleHeader = (props: Props) => {
    const width = useWindowDimensions().width;



    return (
        <View>
            <Image style={{ width: width, height: LayoutConstants.ARTICLE_HEADER_HEIGHT }}
                resizeMode='cover'
                source={{ uri: props.pressInfo.imageUrl }} />
            <View style={StyleSheet.absoluteFill}>
                <Text>Placeholder</Text>
            </View>
        </View>




    );

}


export { ArticleHeader }

const styles = StyleSheet.create({

})