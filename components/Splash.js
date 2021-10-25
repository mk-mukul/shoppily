import * as React from 'react';
import {
    View,
    Image,
    FlatList,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import Button from './subComponents/Button';

export default Splash = ({ navigation }) => {
    // console.log("colors")
    return (
        <>
            <View  style={{backgroundColor:colors.white, minHeight: "100%"}}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}>
                    <SafeAreaView>
                        <View style={style.mainWrapper}>
                            <Text style={style.title}>Shoppily</Text>
                            <View style={style.headlineWrapper}>
                                <Text style={[style.headline, { color: colors.black, fontSize: 24 }]}>a marketplace made by you</Text>
                                <Text style={[style.headline, { color: colors.red, fontSize: 48 }]}>for you</Text>
                            </View>

                            <View style={style.buttonWrapper}>
                                <View style={{ marginBottom: 42 }}>
                                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                                        <Button lable="LOG IN" isWhite={true} isBorder={true} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom: 32 }}>
                                    <Button lable="REGISTER" />
                                </View>
                            </View>
                            <Text style={{ color: colors.blue, fontFamily: "Lato-Regular", marginBottom: 20 }}>Skip login</Text>





                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    mainWrapper: {
        display: "flex",
        alignItems: "center",
    },
    title: {
        color: colors.red,
        fontFamily: "Lato-Bold",
        fontSize: 36,
        marginTop: 80,
        marginBottom: 150,
    },
    headlineWrapper: {
        width: "100%",
        paddingHorizontal: 50,
        marginBottom: 150,
    },
    headline: {
        fontFamily: "Lato-Bold",
    },
    buttonWrapper: {
        width: "100%",
        paddingHorizontal: 98,
    },
});
