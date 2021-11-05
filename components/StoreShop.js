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
import BooleanButton from './subComponents/BooleanButton';

export default StoreShop = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const items = [
        { image: images.image18, name: 'High Heels', price: '$29.99', stock: 0, isCoscustomizable: true },
        { image: images.image24, name: 'High Heels', price: '$39.99', stock: 100, isCoscustomizable: false },
        { image: images.image24, name: 'High Heels', price: '$39.99', stock: 95, isCoscustomizable: true },
        { image: images.image18, name: 'High Heels', price: '$29.99', stock: 100, isCoscustomizable: false },
    ];

    return (
        <>
            <Header back="StoreDashboard" title={'Listings'} search={search} setSearch={setSearch} isSearch={true} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24 }}>

                        
                        <View style={style.topInfo}>
                            <Text style={style.noOfResult}>{items.length} results found</Text>
                            <View style={style.sortWrapper}>
                                <Text style={style.sort}>Filter</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />

                                <Text style={[style.sort, { marginLeft: 20 }]}>Sort</Text>
                                <Image style={{ height: 12, width: 18 }} source={images.menu} />
                            </View>
                        </View>

                        {/* Items */}
                        <View style={style.itemsWrapper}>

                        <TouchableOpacity style={[style.itemWrapper,style.addItemWrapper]} onPress={() => navigation.navigate("AddProduct")}>
                            {/* <View > */}
                                <Image style={{width:40,height:40,marginBottom:35}} source={images.hollowPlus} />
                                <Text style={style.addItem}>Add</Text>
                                <Text style={style.addItem}>Product</Text>
                            {/* </View> */}
                        </TouchableOpacity>

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

                    <View style={style.priceWrapper}>
                        <Text style={style.itemPrice}>{data.price}</Text>
                        <Text style={[style.itemPrice, { color: data.stock === 0 ? colors.red : colors.blue }]}>{"Stock: " + data.stock}</Text>
                    </View>

                    <View style={style.onSellButton}>
                        <BooleanButton />
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
    addItem: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.blackLight,
    },
    addItemWrapper: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
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
    onSellButton: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row-reverse",
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
