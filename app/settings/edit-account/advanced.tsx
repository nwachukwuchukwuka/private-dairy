import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const AdvancedScreen = () => {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">Advanced Options</Text>
                <TouchableOpacity>
                    <Text className="text-blue-500 text-lg font-bold">Save</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="p-4 pt-8">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <TouchableOpacity className="p-3 border-b border-gray-700">
                        <Text className="text-red-500 text-base">Delete account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-3">
                        <Text className="text-red-500 text-base">Merge content into another account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default AdvancedScreen;