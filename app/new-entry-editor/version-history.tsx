import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VersionHistoryScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]" edges={['top']}>
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="z-10">
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Version History</Text>
                </View>
            </View>

            <View className="p-4 pt-8">
                <Text className="text-gray-400 uppercase font-bold text-xs mb-2 ml-4">
                    Entry Backups on Server
                </Text>
                <View className="bg-gray-800 rounded-lg">
                    <TouchableOpacity className="flex-row items-center justify-between p-4">
                        <View className="flex-row items-center">
                            <Ionicons name="archive-outline" size={22} color="gray" />
                            <Text className="text-white text-base ml-4">Tue, Dec 2, 2025 at 2:08 PM</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <Text className="text-gray-500 text-sm mt-2 px-4">
                    Select a backup to preview with an option to restore to that version
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default VersionHistoryScreen;