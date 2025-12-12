import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PROMPTS = [
    "What is one small way I can simplify my day today?",
    "What does this season remind me of?",
    "What do I want to prioritize this week?",
    "What's a favorite memory from past holiday seasons?",
    "What simple joy can I savor this weekend?",
    "What is one thing I can do today to feel more calm?",
    "What does generosity mean to me right now?",
    "What personal tradition do I want to honor or begin this season?",
    "What is one word I want to guide me this month?",
    "What am I looking forward to the most in December?",
];

const DailyPromptsScreen = () => {
    const router = useRouter();
    const [selectedPrompt, setSelectedPrompt] = useState(PROMPTS[0]);

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row justify-end items-center p-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>
            <Text className="text-gray-400 text-sm uppercase font-bold mb-2 px-4">
                Recent Prompts
            </Text>

            <ScrollView contentContainerClassName="px-2">

                {PROMPTS.map((prompt, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedPrompt(prompt)}
                        className="flex-row items-center justify-center py-8 border-t border-[#3A3A3C]"
                    >
                        <Text className="text-gray-300 text-xl text-center flex-1 px-14">{prompt}</Text>
                        {selectedPrompt === prompt && (
                            <Ionicons name="checkmark" size={24} color="#34C759" />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default DailyPromptsScreen;