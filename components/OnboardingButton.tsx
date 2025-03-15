import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {router, useRouter} from "expo-router";

const OnboardingButton = () => {
const router = useRouter();
    return (
        <View className="align-middle h-[50px] px-5 mb-10">
            <TouchableOpacity className="w-full flex-1 bg-primary rounded-[32px] justify-center"
             onPress={()=> router.push('/onboarding/passcode')}   >
                <Text className="text-center text-white font-bold  text-lg">Next</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OnboardingButton
