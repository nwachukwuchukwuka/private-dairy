import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const journalsData = [
    { name: 'Journal', color: '#D1B49A', count: 36 },
    { name: 'Movie Log', color: '#F8D44C', count: 0 },
    { name: 'Journal', color: '#A9A9A9', count: 0 },
    { name: 'Journal', color: '#5AC8FA', count: 0 },
];

const JournalsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                    <Text className="text-white text-lg">Settings</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Journals</Text>
                </View>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6">
                    <Ionicons name="book-outline" size={48} color="gray" />
                    <Text className="text-gray-400 text-center text-sm mt-4 px-6">
                        Create different journals within Day One for every aspect of your life.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg flex-row justify-between items-center p-3 mb-8" onPress={() => router.push('/settings/journals/selective-screen-modal')}>
                    <Text className="text-white text-lg">Selective Sync</Text>
                    <View className="flex-row items-center">
                        <Text className="text-gray-400 text-lg mr-2">4 of 4</Text>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </View>
                </TouchableOpacity>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">JOURNALS</Text>
                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    {journalsData.map((journal, index) => (
                        <TouchableOpacity key={index} className="flex-row items-center p-3 border-b border-gray-700 last:border-b-0" onPress={() => router.push('/journals/journal-editor')}>
                            <View style={{ backgroundColor: journal.color }} className="w-6 h-8 rounded-md mr-4" />
                            <Text className="text-white text-lg flex-1">{journal.name}</Text>
                            <Text className="text-gray-400 text-lg mr-4">{journal.count}</Text>
                            <Ionicons name="menu" size={24} color="gray" />
                        </TouchableOpacity>
                    ))}
                </View>

                <View className="bg-[#1C1C1E] rounded-lg">
                    <TouchableOpacity className="flex-row items-center p-3 border-b border-gray-700">
                        <Ionicons name="add-circle-outline" size={24} color="gray" className="mr-4" />
                        <Text className="text-white text-lg">New Personal Journal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center p-3">
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="gray" className="mr-4" />
                        <Text className="text-white text-lg">New Shared Journal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default JournalsScreen;