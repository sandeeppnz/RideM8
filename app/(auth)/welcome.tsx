import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const welcome = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const swiperRef = useRef<Swiper>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.push("/(auth)/signup");
        }}
        className="w-full items-end mt-10 pr-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        activeDotColor="#000"
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex w-full items-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row mt-10 w-full items-center justify-center">
                <Text className="text-black text-3xl font-JakartaBold mx-10 text-center">
                    {item.title}
                </Text>
            </View>
            <View className="p-5">
                <Text className="text-center text-[#858585] mx-10 mt-3 font-JakartaRegular">
                    {item.description}
                </Text>
            </View>
          </View>
        ))}
      </Swiper>

      {/* 
      <TouchableOpacity className="bg-black p-4 rounded-lg mb-10 w-11/12">
        <Text className="text-white text-center text-lg font-semibold">
          Get Started
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default welcome;
