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
import {SafeAreaView} from 'react-native-safe-area-context';

export default Home = () => {
  // console.log("colors")
  return (
    <>
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <Text>Hello</Text>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

