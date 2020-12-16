import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {

}

const Header = (props: Props) => {
    return (
        <View style={styles.navBar}>
            <View style={styles.navLeft}>
                <TouchableOpacity  >
                    <View >
                        <Icon
                            style={styles.menuIcon}
                            name="menu-outline" />
                    </View>
                </TouchableOpacity>



            </View>


            <View style={styles.navRight}>


            </View>
        </View >
    )
}

export { Header }

const styles = StyleSheet.create({
    navRight: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    navLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menuIcon: {
        marginLeft: 4,
        marginRight: 3,
        fontSize: 22,
        paddingLeft: 20,
        paddingTop: 5,
        paddingRight: 20, //Makes it easier to press with padding
        paddingBottom: 5,
        color: '#888888',
    },
    navBar: {
        elevation: 0, // Remove bottom shadow on Android
        shadowOpacity: 0, // Remove bottom shadow on iOS
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        height: 52,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    companyLogo: {
        width: 75,
        height: 27.25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
});