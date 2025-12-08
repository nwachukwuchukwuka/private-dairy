import { useAppContext } from '@/context/context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalEditor = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { id, name, color, entries } = params;
    console.log("id from bookview", id);

    const { journals, activeJournal, setActiveJournal, updateJournal, deleteJournal } = useAppContext();
    const journalToEdit = useMemo(() => journals.find(j => j.id === id), [journals, id]);


    const [journalName, setJournalName] = useState(journalToEdit?.name || '');



    const handleSave = () => {
        if (id && journalName.trim()) {
            const updatedData = { name: journalName };
            updateJournal(id as string, updatedData);


            if (activeJournal?.id === id) {
                setActiveJournal({ ...activeJournal, ...updatedData });
            }
        }
        router.back();
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Journal",
            "Are you sure you want to delete this journal?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    onPress: () => {
                        if (id) {
                            deleteJournal(id as string);
                        }
                        router.back();
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-black p-4">
            <View className="flex-row justify-between items-center mb-8">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-white text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Journal Editor</Text>
                <TouchableOpacity onPress={handleSave}>

                    <Text className="text-white text-lg font-bold">Save</Text>
                </TouchableOpacity>
            </View>

            <View className="bg-gray-800 rounded-lg p-4">
                <TextInput
                    value={journalName}
                    onChangeText={setJournalName}
                    className="text-white text-lg"
                />
                <View className="border-b border-gray-700 my-4" />
                <Text className="text-gray-400">Description (Optional)</Text>
                <View className="border-b border-gray-700 my-4" />
                <View className="flex-row justify-between">
                    <Text className="text-white text-lg">Color</Text>
                    <Text className="text-blue-500 text-lg">Day One Blue</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 ml-4">{journalToEdit?.entries || 0} Entries, 0 Media</Text>

            <View className="bg-gray-800 rounded-lg p-4 mt-8">
                <Text className="text-white text-lg">Advanced</Text>
            </View>

            <TouchableOpacity onPress={handleDelete} className="bg-red-500 rounded-lg p-4 mt-8 items-center">
                <Text className="text-white text-lg font-bold">Delete Journal</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default JournalEditor;  