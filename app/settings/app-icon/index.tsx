import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppIcon = ({ color, isSelected }: { color: string, isSelected?: boolean }) => (
    <View className={`w-16 h-16 ${color} rounded-2xl items-center justify-center m-2 ${isSelected ? 'border-2 border-white' : ''}`}>
        <Feather name="bookmark" size={32} color="white" />
    </View>
);

const AppIconScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">App Icon</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4 items-center">
                <Feather name="bookmark" size={48} color="gray" className="my-6" />
                <Text className="text-gray-400 text-base text-center px-6">
                    Put your personal touch on Day One by choosing an app icon that fits your style. Choose from bold, discreet, or something in between.
                    <Text className="text-blue-500"> Learn more</Text>
                </Text>
                <Text className="text-gray-500 text-sm my-6">★ premium ★</Text>

                <View className="w-full">
                    <Text className="text-gray-400 text-lg font-bold mb-2 ml-4">SOLID</Text>
                    <View className="flex-row flex-wrap justify-center">
                        <AppIcon color="bg-blue-500" isSelected />
                        <AppIcon color="bg-cyan-400" />
                        <AppIcon color="bg-green-500" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-green-500" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-cyan-400" />
                    </View>
                </View>
                <View className="w-full mt-8">
                    <Text className="text-gray-400 text-lg font-bold mb-2 ml-4">COLORFUL</Text>
                    <View className="flex-row flex-wrap justify-center">
                        <AppIcon color="bg-blue-500" isSelected />
                        <AppIcon color="bg-cyan-400" />
                        <AppIcon color="bg-green-500" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-green-500" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-gray-700" />
                        <AppIcon color="bg-cyan-400" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AppIconScreen;