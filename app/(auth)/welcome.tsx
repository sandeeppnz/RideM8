import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const welcome = () => {
  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
            onPress={() => {
                router.push('/(auth)/signup');
            }}
            className="w-full items-end mt-10 pr-5">
        <Text className="text-black text-md font-JakartaBold">
          Skip
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-black p-4 rounded-lg mb-10 w-11/12">
        <Text className="text-white text-center text-lg font-semibold">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default welcome;
