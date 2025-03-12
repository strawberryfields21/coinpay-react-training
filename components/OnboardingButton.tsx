import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const OnboardingButton = () => {
    return (
        <View className="align-middle h-[50px] px-5 mb-10">
            <TouchableOpacity className="w-full flex-1 bg-primary rounded-[32px] justify-center">
                <Text className="text-center text-white font-bold  text-lg">Next</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OnboardingButton
