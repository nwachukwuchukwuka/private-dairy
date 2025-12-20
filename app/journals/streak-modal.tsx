import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeatmapSquare = ({ color = 'bg-gray-800' }: { color?: string }) => (
    <View className={`w-4 h-4 ${color} rounded-sm m-px`} />
);

const StreakScreen = () => {
    const router = useRouter();
    const { journals } = useAppContext();

    const mainHeatmapData = Array.from({ length: 7 * 20 });
    const journalHeatmapData = Array.from({ length: 24 });

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row justify-between items-center mb-6 px-4 pt-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="share-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                <View className="items-center mb-8">
                    <Text className="text-gray-400 text-lg">🌿</Text>
                    <Text className="text-gray-400 text-sm tracking-[6px] my-1">DAY ONE</Text>
                    <Text className="text-white text-6xl font-bold">5 Days</Text>
                    <Text className="text-gray-400 text-xs tracking-[2px] mt-1">
                        JOURNAL <Text className="text-orange-400">🔥</Text> STREAK
                    </Text>
                    <Text style={{ transform: [{ rotate: "180deg" }] }} className="text-gray-400 text-lg">🌿</Text>
                </View>

                <View className="flex-row px-4 mb-10">
                    <View className="justify-around mr-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <Text key={i} className="text-blue-300 text-xs">{day}</Text>
                        ))}
                    </View>
                    <View className="flex-row flex-wrap">
                        {mainHeatmapData.map((_, i) => (
                            <HeatmapSquare key={i} color={i > 130 ? 'bg-blue-400' : 'bg-gray-800'} />
                        ))}
                    </View>
                </View>

                <View className="px-4 space-y-6 mb-10">
                    {journals.map(journal => (
                        <View key={journal.id}>
                            <View className="flex-row justify-between items-baseline mb-2">
                                <Text style={{ color: journal.color }} className="text-lg font-bold">{journal.name}</Text>
                                <Text className="text-gray-500">{journal.entries}</Text>
                            </View>
                            <View className="flex-row flex-wrap">
                                {journalHeatmapData.map((_, i) => (
                                    <HeatmapSquare key={i} color={i > 15 && i % 4 !== 0 ? `bg-[${journal.color}]` : 'bg-gray-800'} />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View className="px-4">
                    <View className="bg-gray-800 rounded-lg p-4">
                        <Text className="text-gray-400 text-center">
                            Consecutive days with an entry created
                        </Text>
                        <Text className="text-gray-400 text-center mt-2">
                            <Text className="text-orange-400">🔥</Text> = Entry created today
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default StreakScreen;