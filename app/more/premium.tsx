import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PremiumFeature = ({ icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
    <View className="flex-row items-center mb-4">
        <Ionicons name={icon} size={24} color="#A7A2E5" />
        <View className="ml-4">
            <Text className="text-white text-lg">{title}</Text>
            <Text className="text-gray-400">{subtitle}</Text>
        </View>
    </View>
);

const ReviewCard = ({ text, author }: { text: string; author?: string }) => (
    <View className="bg-[#1C1C1E] rounded-lg p-4 mb-4">
        <Text className="text-white mb-2">{text}</Text>
        <View className="flex-row">
            {[...Array(5)].map((_, i) => <Ionicons key={i} name="star" size={16} color="#FFCC00" />)}
        </View>
    </View>
);

const PremiumScreen = () => {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black">
            <SafeAreaView className="flex-1" edges={['top']}>
                <TouchableOpacity onPress={() => router.back()} className="absolute top-8 left-4 z-10">
                    <Ionicons name="close" size={32} color="gray" />
                </TouchableOpacity>

                <ScrollView contentContainerClassName="pt-20 pb-32 px-4">
                    <Text className="text-white text-3xl font-bold text-center">"Worth every penny"</Text>
                    <Text className="text-gray-400 text-center mt-2 mb-6">See why over 500,000 people have gone Premium</Text>

                    <View className="  border border-indigo-500 rounded-xl p-4  mt-4">
                        <TouchableOpacity className="bg-indigo-500 self-center px-3 py-1 rounded-full mb-4 -mt-8">
                            <Text className="text-white text-sm">Premium</Text>
                        </TouchableOpacity>
                        <PremiumFeature icon="camera-outline" title="Unlimited photos and videos" subtitle="A picture is worth a thousand words" />
                        <PremiumFeature icon="phone-portrait-outline" title="Multiple devices" subtitle="Start on your phone, finish on your iPad or Mac" />
                        <PremiumFeature icon="mic-outline" title="Audio recording" subtitle="Voice-to-text transcription" />
                        <TouchableOpacity>
                            <Text className="text-blue-500 text-center mt-2">See more</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="items-center my-6">
                        <View className="flex-row">
                            {[...Array(5)].map((_, i) => <Ionicons key={i} name="star" size={24} color="#FFCC00" />)}
                        </View>
                        <Text className="text-white mt-2">4.8 Rating (166K Ratings)</Text>
                    </View>

                    <ReviewCard text="The BEST . I'm so happy this app exists and it's worth all your money." />
                    <ReviewCard text="Worth the money. I am not the journaling type but this app has converted me." />
                </ScrollView>
            </SafeAreaView>

            <View className="absolute bottom-0 left-0 right-0 p-4 bg-black border-t border-gray-800">
                <TouchableOpacity className="bg-indigo-600 w-full py-4 rounded-lg items-center justify-center">
                    <Text className="text-white text-lg font-bold">Start my 1 month free trial</Text>
                </TouchableOpacity>
                <Text className="text-gray-400 text-center text-xs mt-2">1 month free, then ₦ 79,900.00/year</Text>
            </View>
        </View>
    );
};

export default PremiumScreen;