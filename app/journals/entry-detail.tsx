import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const premiumFeatures = [
    "Multiple journals",
    "Video and audio entries with transcription",
    "Sync across devices, Mac, iPad, Web",
    "And lots more... (see Premium)"
];

const EntryDetailModal = () => {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#34B4E8]">
            <View className="p-4 bg-[#34B4E8] flex-row justify-between items-center">
                <Text className="text-white font-semibold text-lg">Tue, Nov 18, 2025  10:02 AM</Text>
                <View className="flex-row items-center gap-5">
                    <TouchableOpacity>
                        <Feather name="more-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className="text-white text-lg">Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#1C1C1E', flex: 1 }} >
                <Text className="text-white text-3xl font-bold mb-2">Welcome to Day One</Text>
                <Text className="text-gray-300 text-base leading-6 mb-8">
                    Start your journaling journey with Day One and invite clarity, gratitude, and reflection into your life.
                </Text>

                <Text className="text-gray-500 font-bold text-sm tracking-wider mb-2">DAY ONE BASIC IS FREE:</Text>
                <Text className="text-gray-300 text-base leading-6 mb-8">
                    Enrich your entries with <Text className="font-bold text-white">photos, audio, video, locations, tags, weather,</Text> etc. Build consistency with helpful reminders, inspiring templates, and engaging streaks.
                </Text>

                <Text className="text-gray-300 text-base leading-6 mb-8">
                    Preserve your memories beautifully by turning your journal into a printed, elegant bound book.
                </Text>

                <Text className="text-gray-500 font-bold text-sm tracking-wider mb-4">DAY ONE PREMIUM INCLUDES:</Text>

                <View className="gap-4 mb-8">
                    {premiumFeatures.map((feature, index) => (
                        <View key={index} className="flex-row gap-3 items-start">
                            <Text className="text-blue-400 text-base mt-1">•</Text>
                            <Text className="text-white text-base leading-6 flex-1">
                                {feature.includes("Premium") ? (
                                    <>
                                        And lots more... (see <Text className="text-blue-400">Premium</Text>)
                                    </>
                                ) : (
                                    feature
                                )}
                            </Text>
                        </View>
                    ))}
                </View>

                <Text className="text-gray-300 text-base mt-8">
                    Capture life as you live it. 💙
                </Text>

                <Text className="text-blue-400 mt-8 font-semibold">
                    Journal
                </Text>
            </ScrollView>

        </View>
    );
}

export default EntryDetailModal;