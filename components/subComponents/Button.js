import * as React from 'react';
import {
    View,
    Image,
    FlatList,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';
// import colors from '../assets/colors/colors';
// import images from '../assets/images/images';

export default Button = props => {
    return (
        <>
            <View style={style.buttonWrapper}>
                <View style={style.button}>
                    <Text style={style.buttonText}>{props.lable}</Text>
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        // padding: 10,
    },
    button: {
        height: 54,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: colors.blue,
        borderRadius: 30,
    },
    buttonText: {
        alignSelf: "center",
        fontFamily: "Lato-Bold",
        color: colors.white,
        fontSize: 14,
    },
});
