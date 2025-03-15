import {View, Text} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from "@expo/vector-icons";
import OnboardingPasscodeStepper from "@/components/OnboardingPasscodeStepper";
import PasscodeInput from "@/components/PasscodeInput";

const OnboardingPasscode = () => {
    return (
        <>
        <View className="flex mb-3" >
            <AntDesign name="left" size={24} color="black" className="ml-2"/>

        </View>
        <OnboardingPasscodeStepper/>
            <View className="m-5">
               <Text className="font-bold text-2xl">Create passcode</Text>
                <Text className="font-light text-lg pt-2">This info needs to be accurate with your ID document</Text>
            </View>
            <PasscodeInput/>
        </>
    )
}
export default OnboardingPasscode
