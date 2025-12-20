import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SwitchRow = ({ label, subtitle }: { label: string, subtitle?: string }) => (
    <View className=' mb-8'>
        <View className="bg-[#1C1C1E] rounded-2xl p-4">
            <View className="flex-row justify-between items-center">
                <Text className="text-white text-lg">{label}</Text>
                <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
            </View>
        </View>
        {subtitle && <Text className="text-gray-400 text-sm mt-2 pr-10">{subtitle}</Text>}
    </View>
);

const LabsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Labs</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-xl p-6 items-center text-center mb-8">
                    <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mb-4">
                        <Ionicons name="flask-outline" size={32} color="white" />
                    </View>
                    <Text className="text-white text-3xl font-bold">Day One Labs</Text>
                    <Text className="text-gray-400 text-base mt-2 text-center">
                        Get early access to experimental features and help shape the future of journaling. Explore new tools, share feedback, and preview what's next.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>

                <SwitchRow label="Email Newsletter" subtitle="Receive an email when new Labs features are made available" />
                <SwitchRow label="Enable Labs" />
                <SwitchRow label="AI Features" subtitle="Enable all Day One Labs AI features, or use the toggles below to disable individual AI features." />

                <View className="my-4">
                    <SwitchRow label="AI Entry Chat" />
                    <SwitchRow label="AI Entry Highlights" subtitle="Create a concise list of highlights of your current journal entry directly in the entry editor." />
                    <SwitchRow label="AI Format Transcription" subtitle="Enables AI-powered formatting for audio transcriptions, improving readability with proper punctuation, grammar, and optional titles." />
                    <SwitchRow label="AI Image Generation" subtitle="Generate custom images in the editor based on a journal entry's content. Learn more" />
                    <SwitchRow label="AI Multi Entry Summary" subtitle="Open any date's entries from different years and generate a summary of your journal entries for that date. Learn more" />
                    <SwitchRow label="AI Title Suggestions" subtitle="Generate entry title suggestions based on the content of your entry. Learn more" />
                    <SwitchRow label="Daily Chat" subtitle="Chat about your day and then turn it into a journal entry. Learn more" />
                    <SwitchRow label="Go Deeper" subtitle="Get personalized, dynamic prompts in the editor, helping you reflect more deeply." />
                </View>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-2xl p-3 items-center">
                    <Text className="text-blue-500 text-lg">Share feedback</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default LabsScreen;