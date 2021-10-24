import React, { useState } from 'react';
import {
    TextInput,
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default Navigation = () => {

    // const navigation = useNavigation();


    return (
        <>
            <SafeAreaView>
                <View style={style.navigationWrapper}>
                    <Image source={images.home} />
                    <Image source={images.cart} />
                    <View></View>
                    <View style={style.navigationStore}>
                        <Image source={images.store} />
                    </View>
                    <Image source={images.account} />
                    <Image source={images.menu} />

                </View>
            </SafeAreaView>
        </>
    );
};
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';


const style = StyleSheet.create({
    navigationWrapper: {
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 30,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    navigationStore: {
        backgroundColor: colors.red,
        width: 53,
        height: 53,
        borderRadius: 26.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: "50%"
    },
});