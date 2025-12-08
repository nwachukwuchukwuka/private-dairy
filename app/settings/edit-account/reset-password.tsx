import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#007AFF" />
                    <Text className="text-blue-500 text-lg">Back</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Reset Password</Text>
                </View>

                <TouchableOpacity onPress={() => router.push('/settings/edit-account/check-email')} className="ml-auto">
                    <Text className="text-blue-500 text-lg font-bold">Next</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="p-4 pt-8">
                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">ENTER EMAIL ADDRESS</Text>
                <TextInput value="nwachukwuadinoyi@gmail.com" placeholderTextColor="gray" keyboardType="email-address" className="bg-[#1C1C1E] text-white p-3 rounded-lg text-lg" />
                <Text className="text-gray-500 text-xs px-4 mt-2">Enter your email and we'll send you a link to reset your password</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ResetPasswordScreen;