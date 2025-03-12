import {Animated, FlatList, SafeAreaView, Text, View} from "react-native";
import OnboardingBanner from "@/components/OnboardingBanner";
import {useRef, useState} from "react";
import onboardingBanner from "@/components/OnboardingBanner";
import OnboardingButton from "@/components/OnboardingButton";
export default function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const sliderRef = useRef(null);
    // @ts-ignore
    const viewableItemsChanged = useRef(({viewableItems}  ) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    const onBoardingBannerData  = [
        {
            id: 1,
            Description : "Trusted by millions of people, part of one part",
            images : require("../assets/images/Onboarding1.png"),
        },
        {
            id: 2,
            Description : "Spend money abroad, and track your expense",
            images : require("../assets/images/Onboarding2.png"),

        },
        {
            id: 3,
            Description : "Receive Money From Anywhere In The World",
            images : require("../assets/images/Onboarding3.png"),
        }];
  return (
      <SafeAreaView className="flex-1 bg-white">
          <View className="flex-[3] h-[70%]">
          <FlatList
          data={onBoardingBannerData}
                    renderItem={({item}) =>(
                        <OnboardingBanner
                            {...item}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'row' }}
                    pagingEnabled
                    keyExtractor={item => item.id.toString()}
                    bounces={false}
                    onScroll={Animated.event([{nativeEvent :
                            {contentOffset:{x : scrollX}}}
                        ], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    ref={sliderRef}
                    onViewableItemsChanged={viewableItemsChanged}
          >
          </FlatList>
              <OnboardingButton/>
          </View>

      </SafeAreaView>
  );
}
