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

export default MyAccount = ({ navigation }) => {
    return (
        <>
            <Header title={'My Account'} />
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
                        <Text style={style.heading}>Hi Tanya,</Text>

                        <View style={style.topButtonWrapper}>
                            <View style={{ width: "48%" }}>
                                <Button icon={images.profileEmoji} isWhite={true} isShadow={true} lable="Profile" />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Button icon={images.store} bgColor={colors.red} isShadow={true} lable="Your Store" />
                            </View>
                        </View>

                        <View style={style.heading2Wrapper}>
                            <Text style={[style.heading2, { color: colors.black }]}>Your Orders</Text>
                            <Text style={[style.heading2, { color: colors.orange }]}>{"See All >"}</Text>
                        </View>

                        <View style={style.ordersWrapper}>
                            <View style={style.imageWrapper}>
                                <Image style={style.image} source={images.bag} />
                            </View>
                            <View style={style.productDetails}>
                                <Text style={style.productName}>Hand Bag</Text>
                                <View style={style.personalizedWrapper}>
                                    <Text style={style.personalized}>Personalized</Text>
                                </View>
                                <Text style={style.price}>$49</Text>
                            </View>
                        </View>

                        <View style={{ marginBottom: 15 }}>
                            <Button lable={"Wish Lists"} isWhite={true} isShadow={true} />
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Button lable={"Notifications"} isWhite={true} isShadow={true} />
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Button lable={"Help Center"} isWhite={true} isShadow={true} />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <Button lable={"Log Out"} isWhite={true} isShadow={true} />
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const style = StyleSheet.create({
    heading: {
        color: colors.blue,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        marginBottom: 15,
    },
    topButtonWrapper: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    heading2Wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    heading2: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    },
    ordersWrapper: {
        marginBottom: 30,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
    },
    imageWrapper: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        height: 108,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    productDetails: {
        maxWidth: "48%",
        marginLeft: "4%",
        paddingVertical: 4,
    },
    productName: {
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 18,
        marginBottom: 6,
    },
    sellerNameWrapper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 6,
    },
    sellerName: {
        marginLeft: 6,
        color: colors.blue,
        fontFamily: "Lato-Bold",
        fontSize: 12,
    },
    quantity: {
        marginBottom: 6,
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 14,
    },
    personalizedWrapper: {
        marginBottom: 6,
        // display: "flex",
        // flexDirection: "row",
        // position: "absolute",
        backgroundColor: colors.orange,
        fontFamily: "Lato-Bold",
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,

    },
    personalized: {
        // marginBottom: 6,
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 13,

    },
    price: {
        marginBottom: 6,
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 18,
    },
});
