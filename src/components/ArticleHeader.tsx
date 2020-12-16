import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import { LayoutConstants } from '@src/constants';
import { PressInfo } from '@src/types';
import { FeatureText } from './FeatureText';
import { ArticleSubHeading } from './ArticleSubHeading';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    pressInfo: PressInfo
}

const ArticleHeader = (props: Props) => {
    const width = useWindowDimensions().width;

    if (!props.pressInfo?.imageUrl) {
        return null;
    }

    return (
        <View>
            <View>
                <Image style={{ width: width, height: LayoutConstants.ARTICLE_HEADER_HEIGHT }}
                    resizeMode='cover'
                    source={{ uri: props.pressInfo.imageUrl }} />
                <View style={StyleSheet.absoluteFill}>
                    <View style={styles.contentContainer}>
                        <FeatureText title={props.pressInfo.title} backgroundColor={props.pressInfo.backgroundColor} timeOpacity={1} />

                    </View>
                </View>
            </View>
            <ArticleSubHeading categoryColor={props.pressInfo.backgroundColor} icon={props.pressInfo.icon} />
        </View>





    );

}


export { ArticleHeader }

const styles = StyleSheet.create({
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
    contentContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20
    }
})