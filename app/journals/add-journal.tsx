import { useAppContext } from '@/context/context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const personalSuggestions = [
    'Journal', 'Daily', '2025', 'Dreams', 'Food', 'Intentions', 'Vacation', 'Pregnancy', 'Meeting Notes'
];
const sharedSuggestions = [
    '2025', 'Travel', 'Life Stories', 'Goals', 'Meetings', 'Vacation', 'Pregnancy', 'Our Wedding', 'Our Story'
];

const colors = ['#F5A623', '#4A90E2', '#7ED321', '#BD10E0', '#D0021B'];

const AddJournal = () => {
    const router = useRouter();
    const { addJournal } = useAppContext();
    const [tab, setTab] = useState<'Personal' | 'Shared'>('Personal');
    const [journalName, setJournalName] = useState('Journal');
    const [journalColor, setJournalColor] = useState('#F5A623');

    const suggestions = tab === 'Personal' ? personalSuggestions : sharedSuggestions;

    const handleSuggestionPress = (name: string) => {
        setJournalName(name);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setJournalColor(randomColor);
    };

    const handleSaveJournal = () => {
        const newJournal = {
            name: journalName,
            color: journalColor,
        };

        addJournal(newJournal);
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-black p-4 items-center">
            <View className="w-full flex-row justify-between items-center mb-8">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-white text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">New Journal</Text>
                <TouchableOpacity onPress={handleSaveJournal}>
                    <Text className="text-white text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <View className="items-center mb-8">
                <View className={`w-32 h-40  rounded-lg items-center justify-center`} style={{ backgroundColor: journalColor }}>
                    {tab === 'Shared' && <MaterialCommunityIcons name="account-group-outline" size={48} color="white" />}
                </View>
                <Text className="text-white text-2xl mt-4">{journalName}</Text>
            </View>

            <View className="flex-row bg-gray-800 rounded-full p-1 mb-8">
                <TouchableOpacity
                    onPress={() => setTab('Personal')}
                    className={`px-8 py-2 rounded-full ${tab === 'Personal' ? 'bg-gray-600' : ''}`}
                >
                    <Text className="text-white">Personal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTab('Shared')}
                    className={`px-8 py-2 rounded-full ${tab === 'Shared' ? 'bg-gray-600' : ''}`}
                >
                    <Text className="text-white">Shared</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={suggestions}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleSuggestionPress(item)}
                        className="bg-gray-800 rounded-full px-4 py-2 m-1"
                    >
                        <Text className="text-white">{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerClassName="items-center"
            />
        </SafeAreaView>
    );
};

export default AddJournal;