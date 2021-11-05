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

export default SoldItems = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const items = [
        {
            image: images.image18,
            name: 'High Heels',
            price: '$29.99',
            isCoscustomizable: true,
        },
        {
            image: images.image24,
            name: 'High Heels',
            price: '$39.99',
            isCoscustomizable: false,
        },
        {
            image: images.wallet,
            name: 'Leather Wallet',
            price: '$149.99',
            isCoscustomizable: false,
        },
        {
            image: images.image24,
            name: 'High Heels',
            price: '$39.99',
            isCoscustomizable: true,
        },
        {
            image: images.image18,
            name: 'High Heels',
            price: '$29.99',
            isCoscustomizable: false,
        },
        {
            image: images.wallet,
            name: 'Leather Wallet',
            price: '$149.99',
            isCoscustomizable: false,
        },
    ];

    return (
        <>
            <Header back="StoreDashboard" title={'Sold Items'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24 }}>
                        <Text style={style.heading}>Store By Tanya,</Text>

                        <View style={style.topInfo}>
                            <Text style={style.noOfResult}></Text>
                            <View style={style.sortWrapper}>
                                <Text style={style.sort}>Filter</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />

                                <Text style={[style.sort, { marginLeft: 20 }]}>Sort</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />
                            </View>
                        </View>
                        <View style={{marginBottom:10}}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const Item = ({ data }) => {
    return <>
        <View style={style.itemWrapper}>
            <View style={{ width: "49%" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={style.procuctName}>Hand Bag</Text>
                    <Text style={style.procuctQuantity}>{"  x1"}</Text>
                </View>
                <Text style={[style.procuctDetails, { marginBottom: 14 }]}>$49</Text>
                <Text style={[style.procuctDetails, { marginBottom: 8 }]}>October 12, 2021</Text>
                <View style={style.personalizedWrapper}>
                    <Text style={style.personalized}>Personalized</Text>
                </View>
            </View>

            <View style={{ width: "49%", display: "flex", alignItems: "flex-end" }}>
                <Text style={style.procuctName}>Recipient</Text>
                <Text style={[style.procuctAddress]}>Tanya Jain</Text>
                <Text style={[style.procuctAddress]}>Florida</Text>
                <Text style={[style.procuctAddress, { marginBottom: 8 }]}>954-296-6493</Text>
                <Text style={style.allDetails}>{"All Details >"}</Text>

            </View>
        </View>
    </>;
};

const style = StyleSheet.create({
    heading: {
        marginTop: 25,
        color: colors.blue,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        // marginBottom: 15,
    },
    topInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
        marginBottom: 21,
    },
    noOfResult: {
        color: colors.blue,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
    sortWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sort: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        marginHorizontal: 7,
    },
    itemWrapper: {
        display: "flex",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
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
    procuctName: {
        marginBottom: 4,
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 18,

    },
    procuctQuantity: {
        color: colors.blackLight,
        opacity: 0.5,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    },
    procuctDetails: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
    personalizedWrapper: {
        marginBottom: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
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
    procuctAddress: {
        color: colors.blackLight,
        opacity: 0.5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
    allDetails: {
        color: colors.blue,
        fontFamily: "Lato-Bold",
        fontSize: 14,

    },
});
