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

export default MyStore = ({ navigation }) => {
    return (
        <>
            <Header back={"SetUpShop"} title={'My Store'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View
                        style={{
                            backgroundColor: colors.white,
                            paddingHorizontal: 24,
                            paddingTop: 25,
                        }}>

                        <View style={style.storeWrapper}>
                            <Image style={{ width: "48%",borderRadius: 20, }} source={images.profile} />
                            <View style={style.detailsWrapper}>
                                <Text style={style.name}>Tanya Jain</Text>
                                <Text style={style.address}>48 Trails End Road</Text>
                                <Text style={style.address}>Florida</Text>
                                <Text style={style.address}>33311</Text>
                                <Text style={style.address}>954-296-6493</Text>
                            </View>
                        </View>

                        <View style={{ marginBottom: 350 }}>
                            <Button alert={"Name Your shop"} lable="ADD STORE" />
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const style = StyleSheet.create({
    storeWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 8,
        marginBottom: 26,
    },
    detailsWrapper: {
        width: "48%",
        marginVertical: 27,
    },
    name: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        marginBottom: 13,
    },
    address: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
});
