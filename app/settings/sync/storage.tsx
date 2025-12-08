import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StorageRow = ({ label, value }: { label: string; value: string }) => (
    <View className="flex-row justify-between items-center p-3 border-b border-gray-700 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <Text className="text-gray-400 text-lg">{value}</Text>
    </View>
);

const StorageScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className=" flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                    <Text className="text-white text-lg">Sync</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Storage</Text>
                </View>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <View className="bg-yellow-600/20 p-3 rounded-lg mb-8">
                    <Text className="text-yellow-400 text-center">Changes made to Selective Sync may not be reflected immediately</Text>
                </View>

                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <StorageRow label="Other" value="3.8 MB" />
                    <StorageRow label="Entries" value="3.7 MB" />
                    <StorageRow label="Photos" value="978 KB" />
                    <StorageRow label="Thumbnails" value="48 KB" />
                    <StorageRow label="Audios" value="Zero KB" />
                    <StorageRow label="Videos" value="Zero KB" />
                    <StorageRow label="Books" value="Zero KB" />
                </View>

                <View className="bg-[#1C1C1E] rounded-lg mb-2">
                    <TouchableOpacity className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-lg">Optimize Device Storage</Text>
                        <Ionicons name="checkmark" size={24} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-3">
                        <Text className="text-white text-lg">Download All Media</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-gray-500 text-xs px-4 mb-8">Full-resolution media is stored in the cloud and downloaded on demand</Text>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center">
                    <Text className="text-blue-500 text-lg">Clear Local Media Storage</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-xs px-4 mt-2">This will free up local device storage, while the full-resolution media will remain stored on the Day One Sync server. Media will re-download on demand when entries are opened.</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default StorageScreen;