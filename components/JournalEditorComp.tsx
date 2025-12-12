import { COLORS } from '@/constants/constants';
import { useAppContext } from '@/context/context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const defaultColor = COLORS.find(c => c.name === 'Sky Blue') || COLORS[0];
const JournalEditor = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { id } = params;

    const { journals, activeJournal, setActiveJournal, updateJournal, deleteJournal } = useAppContext();
    const journalToEdit = useMemo(() => journals.find(j => j.id === id), [journals, id]);
    const [journalName, setJournalName] = useState(journalToEdit?.name || '');
    const [journalDescription, setJournalDescription] = useState(journalToEdit?.description || '');

    // const selectedColorObject = useMemo(() => {
    //     return COLORS.find(c => c.hex === journalToEdit?.color);
    // }, [journalToEdit]);

    const selectedColorObject = useMemo(() => {
        const currentColor = COLORS.find(c => c.hex === journalToEdit?.color);
        return currentColor || defaultColor;
    }, [journalToEdit]);


    // const handleSave = () => {
    //     if (id && journalName.trim()) {
    //         const updatedData = { name: journalName, description: journalDescription, };
    //         updateJournal(id as string, updatedData);

    //         if (activeJournal?.id === id) {
    //             setActiveJournal({ ...activeJournal, ...updatedData });
    //         }
    //     }
    //     router.back();
    // };

    const handleSave = () => {
        if (id && journalName.trim()) {

            const updatedData = {
                name: journalName,
                description: journalDescription,
                color: selectedColorObject.hex,
            };
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

            <View className="bg-[#2C2C2E] rounded-lg p-4">
                <TextInput
                    value={journalName}
                    onChangeText={setJournalName}
                    className=" text-lg"
                    style={{ color: selectedColorObject?.hex }}
                />
                <View className="border-b border-gray-700 my-4" />
                <TextInput
                    value={journalDescription}
                    onChangeText={setJournalDescription}
                    placeholder="Description (Optional)"
                    placeholderTextColor="gray"
                    className="text-white text-lg"
                />
                <View className="border-b border-gray-700 my-4" />
                <TouchableOpacity
                    onPress={() => router.push({
                        pathname: '/journals/color-picker',
                        params: { id: id }
                    })}
                    className="flex-row justify-between">
                    <Text className="text-white text-lg">Color</Text>

                    <Text className="text-lg" style={{ color: selectedColorObject.hex }}>
                        {selectedColorObject.name}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text className="text-gray-500 mt-2 ml-4">{journalToEdit?.entries || 0} Entries, 0 Media</Text>

            <View className="bg-[#2C2C2E] rounded-lg p-4 mt-8">
                <Text className="text-white text-lg">Advanced</Text>
            </View>

            <TouchableOpacity onPress={handleDelete} className="bg-[#2C2C2E] rounded-lg p-4 mt-8">
                <Text className="text-red-500 text-lg font-bold">Delete Journal</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default JournalEditor;  