import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalScreen = () => {
    const router = useRouter();
    const { journals } = useAppContext();
    const [selectedId, setSelectedId] = useState('1');

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Journal</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <TouchableOpacity onPress={() => setSelectedId('none')} className={`bg-[#1C1C1E] rounded-lg p-4 mb-8 flex-row justify-between items-center ${selectedId === 'none' ? 'border-2 border-blue-500' : ''}`}>
                    <Text className="text-white text-lg">None</Text>
                </TouchableOpacity>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">PERSONAL</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    {journals.map((journal, index) => (
                        <TouchableOpacity
                            key={journal.id}
                            onPress={() => setSelectedId(journal.id)}
                            className={`flex-row items-center p-4 border-b border-gray-700 last:border-b-0 ${selectedId === journal.id ? 'bg-gray-700' : ''}`}
                        >
                            <View style={{ backgroundColor: journal.color }} className="w-6 h-6 rounded-md mr-4" />
                            <Text className="text-white text-lg">{journal.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default JournalScreen;