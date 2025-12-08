import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditAccountScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">Edit Account</Text>
                <TouchableOpacity>
                    <Text className="text-blue-500 text-lg font-bold">Save</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-lg p-4 mb-4">
                    <View className="flex-row justify-between items-center pb-3 border-b border-gray-700">
                        <Text className="text-white text-lg">User ID</Text>
                        <Text className="text-gray-400 text-lg">1274326025</Text>
                    </View>
                    <View className="flex-row justify-between items-center pt-3">
                        <Text className="text-white text-lg">Account</Text>
                        <Text className="text-gray-400 text-lg">Basic</Text>
                    </View>
                </View>
                <Text className="text-gray-500 text-xs px-4 mb-8">
                    Basic is the free tier of Day One which is limited to 1 journal, 1 photo per entry and 1 synced device.
                </Text>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">DAY ONE ACCOUNT INFORMATION</Text>
                <View className="bg-[#1C1C1E] rounded-lg p-4">
                    <View className="flex-row justify-between items-center pb-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Name</Text>
                        <Text className="text-gray-400 text-lg">Display Name (Required)</Text>
                    </View>
                    <View className="flex-row justify-between items-center py-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Email</Text>
                        <Text className="text-gray-400 text-lg">nwachukwuadinoyi@gmail.com</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/settings/edit-account/change-password')} className="flex-row justify-between items-center py-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Change Password</Text>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center py-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Sign In With Apple</Text>
                        <TouchableOpacity><Text className="text-blue-500 text-lg">Link</Text></TouchableOpacity>
                    </View>
                    <View className="flex-row justify-between items-center pt-4">
                        <View className="w-16 h-16 bg-pink-400 rounded-full items-center justify-center">
                            <Ionicons name="person" size={32} color="white" />
                        </View>
                        <TouchableOpacity><Text className="text-blue-500 text-lg">Edit Photo</Text></TouchableOpacity>
                    </View>
                </View>

                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mt-8">
                    <Text className="text-white text-lg">Email Newsletter</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-4 mt-4">
                    <Text className="text-white text-lg">Sign Out</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/settings/advanced')} className="bg-[#1C1C1E] rounded-lg p-4 mt-4 flex-row justify-between items-center">
                    <Text className="text-white text-lg">Advanced</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default EditAccountScreen;