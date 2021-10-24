import * as React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';

export default Input = (props) => {

    return (
        <>
            <View style={style.inputWrapper}>
                <Text style={style.lable}>{props.lable}</Text>
                <View style={style.inputTextWrapper}>
                        <Image style={{alignSelf: "center"}} source={props.icon}></Image>
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
    },
    lable: {
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.black,
        marginBottom: 8,
    },
    inputTextWrapper: {
        paddingVertical: 14,
        paddingHorizontal: 19,
        display: 'flex',
        flexDirection: 'row',
        shadowColor: colors.black,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // shadowOffset: {
        //     height: 0,
        //     width: 0,
        // },
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
