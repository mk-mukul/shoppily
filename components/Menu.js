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

export default Menu = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const cards = [
        {id: 1, bg:colors.red, heading:"Home Decor"},
        {id: 2, bg:colors.orange, heading:"Jewelry"},
        {id: 3, bg:colors.blueLight, heading:"Clothing"},
    ];

    return (
        <>
            <Header title={"Shopping Bag"} search={search} setSearch={setSearch} isSearch={true} isWhite={true} />
            <ScrollView style={{ backgroundColor: colors.white }}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24, paddingTop: 60 }}>

                        <View style={[style.flex, { marginBottom: 18 }]}>
                            <Text style={style.menuHeading}>Women</Text>
                            <Text style={style.menuHeading}>Men</Text>
                            <Text style={[style.menuHeading, { color: colors.blue }]}>Category</Text>
                        </View>

                        <View style={{ position: "relative", height: 7, }}>
                            <View style={{ backgroundColor: colors.black, paddingVertical: 1, marginVertical: 0 }}>
                            </View>
                            <View style={[style.circle, { right: "15%" }]}></View>
                        </View>
                    </View>
                    <View style={style.cardsWrapper}>
                        <FlatList
                            data={cards}
                            renderItem={randerMenuCard}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        {/* <MenuCard bg={colors.red} heading={"Home Decor"} /> */}
                        {/* <MenuCard bg={colors.orange} heading={"Jewelry"} /> */}
                    </View>

                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const randerMenuCard = ({item}) => {
    return <>
        <View style={[style.cardWrapper, { backgroundColor: item.bg, marginLeft: 20 }]}>
            <Text style={[style.cardHeading, { marginVertical: 25 }]}>{item.heading}</Text>
            <View style={style.cardContentWrapper}></View>
            <Text style={style.cardText}>Best Sellers</Text>
            <Text style={style.cardText}>List Item 2</Text>
            <Text style={style.cardText}>List Item 3</Text>
        </View>
    </>
}



const style = StyleSheet.create({
    flex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuHeading: {
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 24,
    },
    circle: {
        position: "absolute",
        width: 14,
        height: 14,
        backgroundColor: colors.blue,
        borderRadius: 7,
        top: -7,
    },
    cardsWrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    cardWrapper: {
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        width: 157,
        height: 380,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
        marginBottom: 10,
    },
    cardHeading: {
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 28,
    },
    cardText: {
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 18,
        marginBottom: 6,
    },
    cardContentWrapper: {
        display: "flex",
        alignItems: "center",
        marginVertical: 15,
    },
});
