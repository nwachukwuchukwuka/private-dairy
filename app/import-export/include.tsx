import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const journals = [
    { name: 'Journal', color: '#D1B49A' },
    { name: 'Movie Log', color: '#F8D44C' },
    { name: 'Journal', color: '#A9A9A9' },
    { name: 'Journal', color: '#5AC8FA' },
];

const JournalRow = ({ name, color, isSelected, onPress }: { name: string; color: string; isSelected: boolean; onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between py-3 px-4 border-b border-gray-800 last:border-b-0">
        <View className="flex-row items-center">
            <View style={{ backgroundColor: color }} className="w-6 h-8 rounded-md mr-4" />
            <Text className="text-white text-lg">{name}</Text>
        </View>
        {isSelected && <Ionicons name="checkmark" size={24} color="#007AFF" />}
    </TouchableOpacity>
);

const IncludeScreen = () => {
    const [selected, setSelected] = useState<string>('All Entries');
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black pt-4" edges={['top']}>
            <View className="flex-row items-center gap-4 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10 ">
                    <Ionicons name="chevron-back" size={28} color="#007AFF" />
                    <Text className="text-blue-500 text-xl">Import/Export</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-xl font-bold">Journal</Text>
                </View>
            </View>

            <View className="p-4 mt-14">
                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <TouchableOpacity onPress={() => setSelected('All Entries')} className="flex-row justify-between items-center py-3 px-4">
                        <Text className="text-white text-lg">All Entries</Text>
                        {selected === 'All Entries' && <Ionicons name="checkmark" size={24} color="#007AFF" />}
                    </TouchableOpacity>
                </View>

                <Text className="text-gray-400 uppercase font-bold mb-2 ml-4">Personal</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    {journals.map((journal, index) => (
                        <JournalRow
                            key={index}
                            name={journal.name}
                            color={journal.color}
                            isSelected={selected === `${journal.name}-${index}`}
                            onPress={() => setSelected(`${journal.name}-${index}`)}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default IncludeScreen;