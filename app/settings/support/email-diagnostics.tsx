import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailDiagnosticsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}><Ionicons name="close" size={28} color="white" /></TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center"><Ionicons name="arrow-up" size={24} color="white" /></TouchableOpacity>
            </View>
            <ScrollView className="px-4">
                <Text className="text-white text-3xl font-bold mb-6">Day One Diagnostics</Text>
                <View className="border-y border-gray-600 py-2">
                    <Text className="text-gray-400">To: support@dayoneapp.com</Text>
                </View>
                <View className="border-b border-gray-600 py-2">
                    <Text className="text-gray-400">Cc/Bcc, From: chukwuka_nwachukwu@yahoo.com</Text>
                </View>
                <View className="border-b border-gray-600 py-2">
                    <Text className="text-gray-400">Subject: Day One Diagnostics</Text>
                </View>
                <View className="py-4">
                    <Text className="text-white font-bold mb-2">DAY ONE SUPPORT REQUEST</Text>
                    <TextInput placeholder="Describe the issue you're experiencing:" placeholderTextColor="gray" className="text-white text-lg h-24" multiline />
                    <Text className="text-gray-500 my-4">--------------------</Text>
                    <Text className="text-gray-400">User: 1274326025</Text>
                    <Text className="text-gray-400">Device ID: 5BA48E21-D195-4DCA-ACA4-A6EF85975EFB</Text>
                    <Text className="text-gray-400">Subscription Level: Basic</Text>
                    <Text className="text-gray-400 mt-4">Day One iOS 2025.25.1 (2683)</Text>
                    <Text className="text-gray-400">iOS 26.1</Text>
                    <Text className="text-gray-400">iPhone iPhone15,2</Text>
                </View>
                <View className="border border-gray-600 rounded-lg p-3 items-center w-40">
                    <Text className="text-white mt-2 text-center">DayOneDia...5-12-17.zip</Text>
                    <Text className="text-gray-400 text-sm">91 KB</Text>
                </View>
                <Text className="text-gray-400 mt-8">Sent from my iPhone</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default EmailDiagnosticsScreen;