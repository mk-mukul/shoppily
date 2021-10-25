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
                        <Image style={{alignSelf: "center",width:24, height:24}} source={props.icon}></Image>
                    <TextInput
                        style={style.input}
                        placeholder={props.placeholder}
                        placeholderTextColor={colors.blackLight}
                        onChangeText={text => props.setText(text)}
                        defaultValue={props.text}
                        secureTextEntry={props.secure}
                        selectionColor={colors.black}
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
        paddingHorizontal: 19,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
    },
    input: {
        padding: 0,
        marginLeft:16,
        marginRight: 16,
        marginVertical: 10,
        flexGrow: 1,
        fontFamily: "Lato-Regular",
        color: colors.black,
        fontSize: 12,
    },
});
