import {View, Text, FlatList, Image, useWindowDimensions,Animated} from 'react-native'
import PagerView from 'react-native-pager-view';
import React , {useState,useRef} from 'react'
import OnboardingPaginator from "@/components/OnboardingPaginator";

const OnboardingBanner = (item) => {

    const {width} = useWindowDimensions();
    return (
        <View >
        <View className="flex-row flex-wrap justify-center py-28" style={[{width}]}>
            <Image
                source={item.images}
                resizeMode="contain"
                className="w-full align-middle"
            >
            </Image>
        </View>
        <View>
                        <OnboardingPaginator data={item.id}/>
        </View>
            <View style={[{width}]}>
                <Text className="text-5xl p-7 font-semibold text-center">{item.Description}</Text>
            </View>
        </View>
    );
}
export default OnboardingBanner
