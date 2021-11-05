import React, { useState } from 'react';
import {
    View,
    Image,
    FlatList,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import images from '../assets/images/images';
import Input from './subComponents/Input';
import Button from './subComponents/Button';
import Navigation from './subComponents/Navigation';
import Header from './subComponents/Header';

export default SetUpShop = ({ navigation }) => {

    return (
        <>
            <Header back={"MyAccount"} title={"My Store"} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24, paddingTop: 100 }}>

                        <View style={style.headingWrapper}>
                            <Image style={{ width: 319, height: 216, marginBottom: 19 }} source={images.setUpStore} />
                            <Text style={style.heading}>Set Up</Text>
                            <Text style={style.heading}>Your Store</Text>
                        </View>

                        <View style={{ marginBottom: 80, marginTop: 40 }}>
                            <Button to={"MyStore"} lable="SHOW ME HOW >" />
                        </View> 

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};



const style = StyleSheet.create({
    headingWrapper: {
        display: "flex",
        alignItems: "center",
    },
    heading: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 45,
        textAlign: "center",
    },
});
