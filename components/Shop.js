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

export default Shop = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const items = [
        { image: images.image18, name: 'High Heels', price: '$29.99', isCoscustomizable: true },
        { image: images.image24, name: 'High Heels', price: '$39.99', isCoscustomizable: false },
        { image: images.wallet, name: 'Leather Wallet', price: '$149.99', isCoscustomizable: false },
        { image: images.image24, name: 'High Heels', price: '$39.99', isCoscustomizable: true },
        { image: images.image18, name: 'High Heels', price: '$29.99', isCoscustomizable: false },
        { image: images.wallet, name: 'Leather Wallet', price: '$149.99', isCoscustomizable: false },
    ];

    return (
        <>
            <Header search={search} setSearch={setSearch} isSearch={true} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24 }}>

                        <View style={style.topInfo}>
                            <Text style={style.noOfResult}>8 results found</Text>
                            <View style={style.sortWrapper}>
                                <Text style={style.sort}>Filter</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />

                                <Text style={[style.sort,{marginLeft:20}]}>Sort</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />
                            </View>
                        </View>

                        {/* Items */}
                        <View style={style.itemsWrapper}>
                            {items.map((val, ind) => {
                                return (
                                    <Item
                                        key={ind}
                                        data={val}
                                        navigation={navigation}
                                    />
                                );
                            })}
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const Item = ({ data, navigation }) => {
    return (
        <>
            <View style={style.itemWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ProductDetails');
                    }}>
                    <Image style={style.itemImage} source={data.image}></Image>
                </TouchableOpacity>

                <View style={style.itemDetails}>
                    <Text style={style.itemName}>{data.name}</Text>
                    <Text style={style.itemPrice}>{data.price}</Text>
                    {data.isCoscustomizable ? <>
                        <View style={style.customizable}>
                            <Text style={style.customizableText}>Customizable</Text>
                        </View>
                    </>
                        :
                        null
                    }
                    <View style={style.favorite}>
                        <Favorite />
                    </View>
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    itemsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemWrapper: {
        // backgroundColor: colors.blueLight, // sddfgsdf
        width: '47%',
        height: 252,
        borderRadius: 20,
        marginBottom: 17,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 3,
    },
    itemImage: {
        width: '100%',
        // height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    itemDetails: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 17,
        paddingVertical: 10,
        // position: 'relative',
    },
    itemName: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
        marginBottom: 10,
    },
    itemPrice: {
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        color: colors.black,
    },
    favorite: {
        position: 'absolute',
        top: 52,
        right: 12,
    },
    customizable: {
        backgroundColor: colors.orange,
        fontFamily: "Lato-Bold",
        position: 'absolute',
        top: 68,
        left: 8,
        borderRadius: 10,
        // height:20,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    customizableText: {
        fontFamily: "Lato-Bold",
        fontSize: 13,
    },
    topInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 12,
    },
    noOfResult: {
        color: colors.blue,
        fontFamily: "Lato-Bold",
        fontSize: 14,
    },
    sortWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    sort: {
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 14,
        marginHorizontal: 7,
    },
});
