import React, { useState } from 'react';
import {
    TextInput,
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

export default BooleanButton = (props) => {
    // const navigation = useNavigation();
    const [isTrue, setIsTrue] = useState(props.isTrue);
    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    props.setIsTrue?props.setIsTrue(prev => !prev):null;
                    setIsTrue(prev => !prev); 
                }}>
                <View style={{position: "relative"}}>
                    <View style={[style.base, {
                        backgroundColor: isTrue ? props.color?props.color:colors.orange : colors.blackLight,
                    }]}>
                    </View>
                    <View style={[style.slider, {
                        backgroundColor: isTrue ? props.color?props.color:colors.orange : colors.blackLight,
                        left: isTrue ? 16 : -2,
                    }]}></View>
                </View>
            </TouchableOpacity>
        </>
    );
};

const style = StyleSheet.create({
    base: {
        width: 34,
        height: 14,
        borderRadius: 7,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        opacity: 0.5,
    },
    slider: {
        position: "absolute",
        top: -3,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderRadius: 18.5,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
    },
});
