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

export default Address = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [cityName, setCityName] = useState("");
    const [state, setState] = useState("");

    return (
        <>
            <Header title={"Address"} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24, paddingTop: 25 }}>

                        <Text style={style.heading}>Deliver To:</Text>

                        <View style={style.twoInputWrapper}>
                            <View style={{ width: "48%" }}>
                                <Input
                                    lable={'Name'}
                                    placeholder={'First Name'}
                                    text={firstName}
                                    setText={setFirstName}
                                />
                            </View>
                            <View style={{ width: "48%", marginTop: 24 }}>
                                <Input
                                    placeholder={'Last Name'}
                                    text={lastName}
                                    setText={setLastName}
                                />
                            </View>
                        </View>

                        <View style={style.twoInputWrapper}>
                            <View style={{ width: "48%" }}>
                                <Input
                                    lable={'Contact'}
                                    placeholder={'Number'}
                                    text={number}
                                    setText={setNumber}
                                />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input
                                    lable={'Zip Code'}
                                    placeholder={'Eg: 000000'}
                                    text={zipCode}
                                    setText={setZipCode}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Input
                                lable={'Address Line 1'}
                                placeholder={'Apartment, Suite, Unit, Building, Floor, etc'}
                                text={address1}
                                setText={setAddress1}
                            />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Input
                                lable={'Address Line 2'}
                                placeholder={'Street Address'}
                                text={address2}
                                setText={setAddress2}
                            />
                        </View>

                        <View style={style.twoInputWrapper}>
                            <View style={{ width: "48%" }}>
                                <Input
                                    lable={'City'}
                                    placeholder={'City Name'}
                                    text={cityName}
                                    setText={setCityName}
                                />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input
                                    lable={'State/Province/Region'}
                                    placeholder={'State Name'}
                                    text={state}
                                    setText={setState}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 30, marginTop: 50 }}>
                            <Button lable="PLACE YOUR ORDER" total="$103" />
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
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 18,
        marginBottom: 10,
    },
    twoInputWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

});
