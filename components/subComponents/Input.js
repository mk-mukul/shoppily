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

export default Input = (props) => {

    return (
        <>
            <View style={style.inputWrapper}>
                <Text style={style.lable}>{props.lable}</Text>
                <View style={style.inputTextWrapper}>
                    {/* <View style={style.inputTextIcon}> */}
                        <Image style={{alignSelf: "center"}} source={props.icon}></Image>
                    {/* </View> */}


                    <TextInput
                        style={style.input}
                        placeholder={props.placeholder}
                        onChangeText={text => props.setText(text)}
                        defaultValue={props.text}
                        secureTextEntry={props.secure}
                    />
                    {props.error?<Image style={{alignSelf: "center"}} source={props.error}/>:null}
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        // padding: 10,
        // backgroundColor: colors.blueLight, //fasdfasdfas
    },
    lable: {
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.black,
        marginBottom: 8,
    },
    inputTextWrapper: {
        // backgroundColor: colors.blue, //fsdfasdfad
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        display: 'flex',
        flexDirection: 'row',
        shadowColor: colors.black,
        borderRadius: 30,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    input: {
        padding: 0,
        marginLeft:16,
        marginRight: 16,
        flexGrow: 1,
        fontFamily: "Lato-Regular",
        fontSize: 12,
    },
});
