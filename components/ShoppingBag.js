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

export default ShoppingBag = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const items = [
        { image: images.image24, name: 'High Heels', price: '$39.99', isCoscustomizable: true },
        { image: images.image24, name: 'High Heels', price: '$39.99', isCoscustomizable: false },
        { image: images.wallet, name: 'Leather Wallet', price: '$149.99', isCoscustomizable: false },
        { image: images.image18, name: 'High Heels', price: '$29.99', isCoscustomizable: false },
    ];

    return (
        <>
            <Header back={"ProductDetails"} title={"Shopping Bag"} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24, paddingTop: 25 }}>

                        <View style={style.productDetailsWrapper}>
                            <View style={style.prodductImageWrapper}>
                                <Image style={{ width: "100%", height: "100%" }} source={images.bag} />
                            </View>
                            <View style={style.productDetails}>
                                <Text style={style.productName}>Hand Bag</Text>
                                <View style={style.sellerNameWrapper}>
                                    <Image style={{ width: 15.4, height: 12.9 }} source={images.storeDark} />
                                    <Text style={style.sellerName}>by Tanya</Text>
                                </View>
                                <Text style={style.quantity}>Quantity: 01</Text>
                                <View style={style.personalizedWrapper}>
                                    <Text style={style.personalized}>Personalized</Text>
                                </View>
                                <Text style={style.price}>$49</Text>
                            </View>
                        </View>

                        <View style={style.priceDetailsWrappperSplit}>
                            <View style={style.priceSplitWrapper}>
                                <Text style={style.priceSplit}>Price Details</Text>
                                <Text style={style.priceSplit}>2 Items</Text>
                            </View>
                            <View style={style.priceSplitWrapper}>
                                <Text style={style.priceSplit}>Sub Total</Text>
                                <Text style={style.priceSplit}>$98</Text>
                            </View>
                            <View style={style.priceSplitWrapper}>
                                <Text style={style.priceSplit}>Delivery</Text>
                                <Text style={style.priceSplit}>$5</Text>
                            </View>
                            <View style={{ backgroundColor: colors.orange, paddingVertical: 0.5, marginVertical: 12 }}></View>
                            <View style={style.priceSplitWrapper}>
                                <Text style={style.priceSplit}>Total</Text>
                                <Text style={style.priceSplit}>$103</Text>
                            </View>
                        </View>

                        <View style={{marginBottom: 30, marginTop: 170}}>
                            <Button to={"Address"} lable="PLACE YOUR ORDER" total="$103" />
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};



const style = StyleSheet.create({
    productDetailsWrapper: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        marginBottom: 25,
    },
    prodductImageWrapper: {
        width: "48%",
        height: 150,
        padding: 13,
        marginRight: "4%",
        borderRadius: 20,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    productDetails: {
        maxWidth: "48%",
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
    priceDetailsWrappperSplit: {

    },
    priceSplitWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    priceSplit: {
        color: colors.blackLight,
        fontFamily: "Lato-Bold",
        fontSize: 18,
    },

});
