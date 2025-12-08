import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const journals = [
    { name: 'Journal', color: '#D1B49A' },
    { name: 'Movie Log', color: '#F8D44C' },
    { name: 'Journal', color: '#A9A9A9' },
    { name: 'Journal', color: '#5AC8FA' },
];

const JournalRow = ({ name, color }: { name: string; color: string; }) => (
    <TouchableOpacity className="flex-row items-center py-3 px-4 border-b border-gray-800 last:border-b-0">
        <View style={{ backgroundColor: color }} className="w-6 h-8 rounded-md mr-4" />
        <Text className="text-white text-lg">{name}</Text>
    </TouchableOpacity>
);


const MoveJournalScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['top']}>
            <View className="flex-row items-center p-3 relative mb-6">
                <TouchableOpacity onPress={() => router.back()} className="z-10">
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Copy</Text>
                </View>
            </View>

            <View className="p-4 mb-6">
                <Text className="text-gray-400 uppercase font-bold mb-2 ml-4">Personal</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    {journals.map((journal, index) => (
                        <JournalRow key={index} name={journal.name} color={journal.color} />
                    ))}
                </View>
            </View>

            <View className="p-4">
                <TouchableOpacity className="bg-[#1C1C1E] py-3 rounded-lg">
                    <Text className="text-blue-500 text-center text-lg">New Journal</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MoveJournalScreen;