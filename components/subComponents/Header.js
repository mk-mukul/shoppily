import React, { useState } from 'react';
import {
    TextInput,
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default Header = (props) => {

    // const navigation = useNavigation();
    const [isSearch, setIsSearch] = useState(false)


    return (
        <>
            <SafeAreaView>
                <View style={[style.headerWrapper, {
                    backgroundColor: props.isWhite ? colors.white : colors.red,
                }]}>
                    {!isSearch ? <>
                        {props.isWhite ? null : <Image style={{ marginRight: 25 }} source={images.topArrow} />}
                        {/* <View onPress={()=>navigation.goBack()}> */}
                        {/* </View> */}
                        <Text style={[style.heading, {
                            color: props.isWhite ? colors.red : colors.white,
                        }]}>Shoppily</Text>
                        <TouchableOpacity onPress={() => { setIsSearch(true) }}>
                            {props.isWhite ? <Image source={images.searchRed} /> : <Image source={images.search} />}
                        </TouchableOpacity>
                    </>
                        : <>
                            <TouchableOpacity style={{}} onPress={() => {setIsSearch(false) }}>
                                <Image style={{ marginRight: 25 }} source={images.topArrow} />
                            </TouchableOpacity>
                            <View style={{ flexGrow: 1 }}>
                                <Search search={props.search} setSearch={props.setSearch} />
                            </View>
                        </>
                    }
                </View>
            </SafeAreaView>
        </>
    );
};

const Search = (props) => {
    return (<View style={{ width: "100%", }}>
        <View style={style.inputTextWrapper}>
            <Image style={{ height: 21, width: 21, alignSelf: "center" }} source={images.searchRed}></Image>
            <TextInput
                style={style.input}
                placeholder={" Search on Shoppily"}
                placeholderTextColor={colors.red}
                onChangeText={text => props.setSearch(text)}
                defaultValue={props.search}
            />
            <View></View>
        </View>
    </View>)
}



const style = StyleSheet.create({
    headerWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    heading: {
        fontFamily: "Lato-Bold",
        fontSize: 30,
        flexGrow: 1,
        marginVertical: 5,
    },
    inputTextWrapper: {
        backgroundColor: colors.white,
        paddingVertical: 9,
        paddingHorizontal: 19,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        maxWidth: "88%",
    },
    input: {
        padding: 0,
        marginLeft: 20,
        flexGrow: 1,
        fontFamily: "Lato-Bold",
        color: colors.red,
        fontSize: 14,
    },
});