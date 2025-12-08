import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChangePasswordScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#007AFF" />
                    <Text className="text-blue-500 text-lg">Back</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Change Password</Text>
                </View>

                <TouchableOpacity className="ml-auto">
                    <Text className="text-blue-500 text-lg font-bold">Save</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="p-4 pt-8">
                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">ENTER CURRENT PASSWORD</Text>
                <TextInput placeholder="Current Password" placeholderTextColor="gray" secureTextEntry className="bg-[#1C1C1E] text-white p-3 rounded-lg text-lg" />

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4 mt-8">CREATE PASSWORD</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    <TextInput placeholder="New Password" placeholderTextColor="gray" secureTextEntry className="text-white p-3 text-lg border-b border-gray-700" />
                    <TextInput placeholder="Confirm New Password" placeholderTextColor="gray" secureTextEntry className="text-white p-3 text-lg" />
                </View>
                <Text className="text-gray-500 text-xs px-4 mt-2">Password must be at least 5 characters</Text>

                <TouchableOpacity onPress={() => router.push('/settings/edit-account/reset-password')} className="mt-6">
                    <Text className="text-blue-500 text-lg">Forgot Password?</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ChangePasswordScreen;