import { useAppContext } from '@/context/context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Journal {
    id: string;
    name: string;
    color: string;
    entries: number;
}

const JournalMenu = () => {
    const router = useRouter();
    const { journals, setActiveJournal } = useAppContext();

    const [editMode, setEditMode] = useState(false);

    const handleSelectJournal = (journal: Journal) => {
        setActiveJournal(journal);
        router.back();
    };

    const renderJournal = ({ item }: { item: Journal }) => (
        <TouchableOpacity onPress={() => handleSelectJournal(item)} disabled={editMode}
        >
            <View className="flex-row items-center justify-between p-4 border-b border-gray-800">
                <View className="flex-row items-center">
                    <View className={`w-10 h-12 rounded-md mr-4`} style={{ backgroundColor: item.color }} />
                    <View>
                        <Text className="text-white text-lg">{item.name}</Text>
                        <Text className="text-gray-400">{item.entries} entries</Text>
                    </View>
                </View>
                {editMode && (
                    <TouchableOpacity onPress={() => router.push({ pathname: '/journals/journal-editor-page', params: { ...item } })}>
                        <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E] p-4">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-3xl font-bold">Journals</Text>
                <View className="flex-row gap-2">
                    <TouchableOpacity onPress={() => router.push('/journals/add-journal')} className="bg-gray-800 p-1 px-2 rounded-lg flex-row items-center ">
                        <Ionicons name="add" size={18} color="white" />
                        <Text className="text-white">Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEditMode(!editMode)} className="bg-gray-800 p-1 px-2 rounded-lg">
                        <Text className="text-white">{editMode ? 'Done' : 'Edit'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.back()} className="bg-gray-800 p-1 rounded-full">
                        <Ionicons name="close" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-[#3A3A3C] p-4 rounded-lg mb-4">
                <Text className="text-white text-lg font-bold">Add a new journal!</Text>
                <Text className="text-gray-400">See our new journal creation flow with suggested journal names.</Text>
            </View>

            <FlatList
                data={journals}
                renderItem={renderJournal}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default JournalMenu;