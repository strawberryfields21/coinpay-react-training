import {View, Text} from 'react-native'
import React from 'react'

const OnboardingPaginator = ({data}) => {
    if (data == 1) {
        return (
            <View className="flex flex-row justify-center flex-wrap gap-0">
                <View className="h-3 rounded-md mx-1 w-5 bg-primary"></View>
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
            </View>
        )
    }
    else if (data == 2) {
        return(
            <View className="flex flex-row justify-center flex-wrap gap-0">
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
                <View className="h-3 rounded-md mx-1 w-5 bg-primary"></View>
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
            </View>
            )
    }
    else if (data == 3) {
        return(
            <View className="flex flex-row justify-center flex-wrap gap-0">
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
                <View className="h-3 rounded-md mx-1 w-10 bg-gray-400"></View>
                <View className="h-3 rounded-md mx-1 w-5 bg-primary"></View>
            </View>
        )
    }
}
export default OnboardingPaginator
