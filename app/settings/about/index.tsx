import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="items-end p-4">
                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-gray-700 rounded-full items-center justify-center">
                    <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View className="items-center mt-8">
                <View className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4">
                    <Ionicons name="book" size={48} color="white" />
                </View>
                <Text className="text-white text-3xl font-bold">Day One</Text>
                <Text className="text-gray-400 mt-1">Version 2025.25.1 (2683)</Text>
            </View>

            <View className="p-4 mt-12">
                <View className="bg-[#1C1C1E] rounded-lg mb-4">
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">Rate Us</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">Share with Friends</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">Twitter</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C] flex-row justify-between items-center"><Text className="text-white text-lg">Website</Text><Text className="text-gray-400">dayoneapp.com</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 flex-row justify-between items-center"><Text className="text-white text-lg">Blog</Text><Text className="text-gray-400">dayoneapp.com/blog</Text></TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => router.push('/settings/about/legal')} className="bg-[#1C1C1E] rounded-lg p-3 flex-row justify-between items-center mb-4">
                    <Text className="text-white text-lg">Legal and More</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 flex-row justify-between items-center mb-4">
                    <Text className="text-white text-lg">Automatic Family</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 flex-row justify-between items-center mb-4">
                    <Text className="text-white text-lg">Work With Us</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default AboutScreen;