import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PromptAnswersScreen = () => {
    const router = useRouter();
    const { promptText } = useLocalSearchParams();
    const { entries } = useAppContext();

    const filteredEntries = useMemo(() => {
        if (!promptText) return [];
        return entries.filter(entry => entry.promptText === promptText);
    }, [entries, promptText]);

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-4">
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="p-4">
                {filteredEntries.length > 0 ? (
                    filteredEntries.map(entry => (
                        <TouchableOpacity
                            key={entry.id}
                            className="bg-[#2C2C2E] rounded-2xl p-4 mb-4"
                        >
                            <View className="bg-gray-500 self-start px-3 py-2 rounded-full mb-3">
                                <Text className="text-white font-semibold text-xs uppercase">
                                    {entry.promptText}
                                </Text>
                            </View>
                            {entry.title && (
                                <Text className="text-white text-lg mb-3">{entry.title}</Text>
                            )}

                            {entry.imageUri && (
                                <Image
                                    source={{ uri: entry.imageUri }}
                                    className="w-full h-48 rounded-lg mb-3"
                                />
                            )}

                            <Text className="text-gray-400 text-xs">{entry.metadata}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text className="text-gray-500 text-center mt-20">No answers for this prompt yet.</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default PromptAnswersScreen;