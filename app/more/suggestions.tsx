import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const suggestionPrompts = [
    { text: 'Write about your favorite thing to do on a day off. Why is it your favorite?', color: 'bg-red-500' },
    { text: 'When was the last time you created something that inspired you? Include a picture of it if you have it.', color: 'bg-purple-500' },
    { text: 'Describe a recent challenge you faced and how you overcame it.', color: 'bg-teal-500' },
];

const SuggestionsScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <View className="p-4 border-b border-gray-700">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <View className="bg-gray-800 rounded-lg p-4 mb-8">
                    <View className="flex-row justify-between items-start">
                        <View className="bg-indigo-500 p-2 rounded-lg mr-4">
                            <Ionicons name="sparkles" size={24} color="white" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white text-lg font-bold">Journaling Suggestions</Text>
                            <Text className="text-gray-400 mt-1">
                                iPhone can automatically suggest significant moments created from your recent activity, such as photos, music, workouts, and more to help you get started writing.
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="close" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text className="text-blue-500 font-bold mt-4">Get Started</Text>
                    </TouchableOpacity>
                </View>

                {suggestionPrompts.map((prompt, index) => (
                    <TouchableOpacity key={index} className={`rounded-2xl p-6 min-h-[150px] mb-4 ${prompt.color}`}>
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white font-semibold uppercase tracking-wider">Reflection</Text>
                            <Ionicons name="refresh" size={24} color="white" />
                        </View>
                        <Text className="text-white text-2xl font-semibold">{prompt.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SuggestionsScreen;