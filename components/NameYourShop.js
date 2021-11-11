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

export default NameYourShop = ({ navigation }) => {
const [name, setName] = useState("");
    return (
        <>
            <Header back={'Home'} title={'Name Your Shop'} isWhite={true} />
            <ScrollView
                style={{ backgroundColor: colors.white }}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View
                        style={{
                            backgroundColor: colors.white,
                            paddingHorizontal: 24,
                            paddingTop: 25,
                        }}>

                        <View style={style.imageWrapper}>
                            <Image style={{ width: 294, height: 214 }} source={images.NameYourShop} />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Input
                                lable={'Shop Name'}
                                placeholder={'Name'}
                                text={name}
                                setText={setName}
                            />
                        </View>

                        <View style={{ marginBottom: 30, marginTop: 50 }}>
                            <Button
                                to={'YourShopDetails'}
                                lable={"Save & Continue"}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};

const style = StyleSheet.create({
    imageWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 30,
    },
    heading: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        marginBottom: 10,
    },
});
