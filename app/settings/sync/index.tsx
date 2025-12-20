import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';

const SyncScreen = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                    <Text className="text-white text-lg">Settings</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Sync</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6">
                    <Ionicons name="cloud-outline" size={64} color="gray" />
                    <Text className="text-gray-400 text-center text-sm mt-4 px-6">
                        Secure backup keeps your journal safe on our private servers.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>

                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <TouchableOpacity onPress={() => router.push('/settings/sync/status')} className="flex-row justify-between items-center p-3">
                        <Text className="text-white text-lg">Sync Status</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">On</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-4 flex-row items-center gap-4 mb-8">
                    <View className="bg-blue-500 p-2 rounded-lg">
                        <Ionicons name="laptop-outline" size={24} color="white" />
                    </View>
                    <View>
                        <Text className="text-white font-bold text-lg">Go Premium</Text>
                        <Text className="text-gray-400 text-sm">Sync your journal across all your devices.</Text>
                    </View>
                </TouchableOpacity>

                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <TouchableOpacity onPress={() => router.push('/settings/sync/selective-sync')} className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-lg">Journals</Text>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/settings/sync/storage')} className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-lg">Storage</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">8.5 MB</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center p-3">
                        <Text className="text-white text-lg">Sync Media Over Cellular</Text>
                        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" value={true} />
                    </View>
                </View>
                <Text className="text-gray-500 text-xs px-4 mb-8">If Low Power Mode is enabled while on cellular or if Low Data Mode is enabled, Day One will not sync full-resolution media. Full-resolution media will be downloaded individually when opened.</Text>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">ENCRYPTION KEY</Text>
                <View className="bg-[#1C1C1E] rounded-lg p-3 mb-2">
                    <TouchableOpacity onPress={() => router.push('/settings/sync/encryption-key')}>
                        <Text className="text-blue-500 text-lg">View Encryption Key</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-gray-500 text-xs px-4 mb-8">End-to-End encrypted journals data utilizes a private key to encrypt all data before it reaches the server.</Text>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center mb-4">
                    <Text className="text-blue-500 text-lg">Sync Now</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center mb-8">
                    <Text className="text-red-500 text-lg">Pause Sync</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/settings/sync/sync-advanced')} className="bg-[#1C1C1E] rounded-lg p-3 flex-row justify-between items-center">
                    <Text className="text-white text-lg">Advanced Sync Settings</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default SyncScreen;