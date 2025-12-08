import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const AdvancedScreen = () => {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black">
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#1C1C1E' },
                    headerTitle: () => <Text className="text-white font-bold text-lg">Advanced Options</Text>,
                    headerBackVisible: true,
                    headerBackTitle: "Back",
                    headerTintColor: '#007AFF',
                }}
            />
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