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
import BooleanButton from './subComponents/BooleanButton';

export default AddProduct = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [personalization, setPersonalization] = useState("");
    const [isPersonalization, setIsPersonalization] = useState(true);

    

    return (
        <>
            <Header back={"StoreDashboard"} title={"Add Product"} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={{ backgroundColor: colors.white, paddingHorizontal: 24, paddingTop: 25 }}>

                        <View style={style.addImageWrapper}>
                            <View style={style.addImage}>
                                <Image style={{ width: 17, height: 17 }} source={images.imageEmoji} />
                                <Image style={[style.addImagePlus, { width: 23, height: 24 }]} source={images.hollowPlusOrange} />
                            </View>
                            <View style={style.addImages}>
                            </View>
                        </View>

                        <Text style={style.addNoOfImages}>{"Add product images (upto 5)"}</Text>

                        <View style={{ marginBottom: 16 }}>
                            <Input
                                lable={'Product Name'}
                                placeholder={'Enter the title of the product'}
                                text={productName}
                                setText={setProductName}
                            />
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Input
                                lable={'Category'}
                                placeholder={'Select a category'}
                                text={category}
                                setText={setCategory}
                            />
                        </View>

                        <View style={style.priceStockWrapper}>
                            <View style={{ width: "48%", marginBottom: 16 }}>
                                <Input
                                    lable={'Price'}
                                    placeholder={'Enter  the price'}
                                    text={price}
                                    setText={setPrice}
                                />
                            </View>
                            <View style={{ width: "48%", marginBottom: 16 }}>
                                <Input
                                    lable={'Stock'}
                                    placeholder={'Enter the stock'}
                                    text={stock}
                                    setText={setStock}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Input
                                lable={'Description'}
                                placeholder={'Enter the category the product belogs to'}
                                text={description}
                                setText={setDescription}
                            />
                        </View>
                        <View style={{ marginBottom: 36 }}>
                            <Input
                                lable={'Tags'}
                                placeholder={'Enter the category the product belogs to'}
                                text={tags}
                                setText={setTags}
                            />
                        </View>

                        <View style={style.enablePersonalizationWrapper}>
                            <Text style={style.enablePersonalization}>Enable Personalization Option</Text>
                            <BooleanButton isTrue={isPersonalization} setIsTrue={setIsPersonalization} color={colors.red} />
                        </View>
                        <View style={{ marginBottom: 80 }}>
                            {isPersonalization?
                            <Input
                            placeholder={'What do you want the customer to personalize?'}
                            text={personalization}
                            setText={setPersonalization}
                            />:null
                            }
                        </View>

                        <View style={{ marginBottom: 30, marginTop: 0 }}>
                            <Button alert="Product added" lable="ADD PRODUCT" />
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
            <Navigation />
        </>
    );
};



const style = StyleSheet.create({
    addImageWrapper: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        marginBottom: 7,
    },
    addImage: {
        width: "48%",
        height: 146,
        padding: 13,
        marginRight: "4%",
        borderRadius: 20,
        backgroundColor: colors.blackVeryLight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    addImagePlus: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    addImages: {
        maxWidth: "48%",
        paddingVertical: 4,
    },
    addNoOfImages: {
        marginBottom: 15,
        color: colors.blue,
        fontFamily: "Lato-Regular",
        fontSize: 12,
    },
    priceStockWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    enablePersonalizationWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    enablePersonalization: {
        color: colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 14,
        marginBottom: 16,
    },

});
