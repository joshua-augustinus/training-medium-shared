import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";

interface Props {
    iconUrl: string,
    categoryColor: string
}
const ArticleSubHeading = (props: Props) => {
    return (
        <View>
            {/* Bottom details section */}
            <View style={styles.card_heading}>
                {/* Category icon */}
                <Image source={{ uri: props.iconUrl }} style={[styles.card_icon, styles.md_card_icon, { borderColor: props.categoryColor }]} />
                <View style={styles.card_heading_text}>
                    {/* Feed title */}
                    <View style={styles.card_title_view}>
                        {/* Activty by text */}
                        <Text allowFontScaling={false} style={styles.article_by}>
                            Article by
                        </Text>
                        <Text allowFontScaling={false} style={[styles.article_by_bold]}>
                            Driven
                        </Text>
                    </View>

                </View>
            </View>
            {/* Activity separator */}
            <View style={[styles.activity_separator, { backgroundColor: props.categoryColor }]} />
        </View>
    )
}

export { ArticleSubHeading }

const LEFT_MARGIN = 15;
const RIGHT_MARGIN = 15;


const styles = StyleSheet.create({


    container: {
        flex: 1,
        marginTop: -3,
        backgroundColor: '#FFFFFF',
    },
    card_photo: {
        flex: 1,
        minHeight: 214,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
    },
    card_time: {
        marginLeft: 1,
        fontSize: 12,
        lineHeight: 24,
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
        textShadowRadius: 1,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
    },
    activity_separator: {
        backgroundColor: '#333333',
        height: 2,
        marginLeft: LEFT_MARGIN,
        marginRight: RIGHT_MARGIN,
    },
    card_heading: {
        paddingTop: 16,
        paddingBottom: 20,
        marginLeft: LEFT_MARGIN,
        marginRight: RIGHT_MARGIN,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_heading_text: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card_icon: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    md_card_icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    card_title_view: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card_title: {
        fontSize: 34,
        lineHeight: 36,
        fontWeight: '400',
        color: '#FFFFFF',
        textAlignVertical: 'center',
        fontFamily: 'BarlowCondensed-SemiBold',
        textShadowRadius: 3,
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 2, height: 2 },
    },
    article_by: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: '#515151',
        textAlignVertical: 'center',
        fontFamily: "Roboto-Light",
    },
    category_button: {
        marginBottom: 7,
        flexDirection: 'row',
    },
    category_button_title: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 1,
        fontSize: 12,
        lineHeight: 24,
        color: '#FFFFFF',
        fontFamily: "Roboto-Regular",
        textAlignVertical: 'center',
        backgroundColor: '#00BFD8',
    },
    article_by_bold: {
        fontFamily: "Roboto-Bold",
    },
    ios_share_button: {
        backgroundColor: '#FFFFFF',
    },
    ios_share_button_icon: {
        color: '#D1D1D1',
    },
    share_button_icon: {
        width: 18.33,
        height: 18.33,
    },
    /**
     * Action button style
     */
    ios_action_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    action_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    action_button_icon: {
        fontSize: 20,
        lineHeight: 20,
        color: '#D1D1D1',
    },

})