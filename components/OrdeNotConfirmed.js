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

export default OrderNotConfirmed = ({ navigation }) => {
    return (
        <>
            <Header title={'Order'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View
                        style={{
                            backgroundColor: colors.white,
                            paddingHorizontal: 24,
                            paddingTop: 40,
                        }}>

                        <View style={[style.flexWrapper,{marginBottom:30}]}>
                            <Text style={style.heading}>Sorry!</Text>
                        </View>

                        <View style={style.flexWrapper}>
                            <Image
                                style={{ width: 198, height: 200, marginBottom: 30 }}
                                source={images.orderNotPlaced}
                            />
                        </View>
                        
                        <View style={[style.flexWrapper,{marginBottom:35}]}>
                            <Text style={[style.heading,{textAlign:"center"}]}>We ran into some trouble while processing your payment</Text>
                        </View>

                        <View style={[style.flexWrapper,{justifyContent:"space-between",marginBottom:30}]}>
                            <View style={{ width: "48%" }}>
                                <Button lable="SUPPORT >" isWhite={true} isShadow={true} color={colors.orange} />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Button lable="CART >" isShadow={true} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const style = StyleSheet.create({
    flexWrapper: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
    },
    heading: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 30,
    },
});
