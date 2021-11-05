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

export default OrderConfirmation = ({ navigation }) => {
    return (
        <>
            <Header back={"Payment"} title={'Order'} />
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



                        <View style={style.headingWrapper}>
                            <Image style={{width:198,height:200,marginTop:100}} source={images.orderPlaced} />
                            <Text style={style.heading}>Order Placed!</Text>
                        </View>



                        <View style={{ marginBottom: 120, marginTop: 50 }}>
                            <Button to={"Home"} lable="CONTINUE SHOPPING >" />
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
        marginBottom: 10,
    },
});
