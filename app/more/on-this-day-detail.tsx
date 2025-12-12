import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { format, isSameDay, isSameMonth } from 'date-fns';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnThisDayDetailScreen = () => {
    const router = useRouter();
    const { year } = useLocalSearchParams();
    const { entries } = useAppContext();
    const today = new Date();

    const [isExpanded, setIsExpanded] = useState(true);

    const entriesForThisDay = useMemo(() => {
        if (!year) return [];
        return entries.filter(entry =>
            isSameMonth(entry.date, today) &&
            isSameDay(entry.date, today) &&
            format(entry.date, 'yyyy') === year
        );
    }, [entries, today, year]);

    const entryCount = entriesForThisDay.length;
    const yearText = entryCount > 0 ? "1 Year" : "0 Years";
    const entryText = `${entryCount} Entr${entryCount === 1 ? 'y' : 'ies'}`;

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="px-4 pt-4">
                <View className="border-b border-gray-800 pb-3 items-center">
                    <Text className="text-gray-400">On This Day ({yearText}, {entryText})</Text>
                </View>
                <View className="flex-row justify-between items-center py-3">
                    <TouchableOpacity className="w-16">
                        <Ionicons name="ellipsis-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold">{format(today, 'MMMM d')}</Text>
                    <TouchableOpacity onPress={() => router.back()} className="w-16 items-end">
                        <Text className="text-white text-lg font-bold">Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <View className="h-48 bg-gray-700 items-center justify-center rounded-lg mb-8">
                    <Text className="text-white">(Map Placeholder)</Text>
                    <View className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-md">
                        <Text className="text-white font-bold"> Maps</Text>
                    </View>
                </View>

                <TouchableOpacity className="flex-row justify-between items-center mb-2">
                    <Text className="text-white font-bold text-lg">This Year</Text>
                    <View className="flex-row items-center">
                        <Text className="text-gray-400 text-lg mr-2">Today</Text>
                        <View className="w-4 h-4 border-2 border-blue-500 rounded-full items-center justify-center">
                            <View className="w-2 h-2 bg-blue-500 rounded-full" />
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </View>
                </TouchableOpacity>

                {entryCount > 0 ? (
                    <View>
                        <TouchableOpacity
                            onPress={() => setIsExpanded(!isExpanded)}
                            className="bg-[#2C2C2E] rounded-lg p-4 flex-row justify-between items-center"
                        >
                            <Text className="text-white text-lg">{entryText}</Text>
                            <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="gray" />
                        </TouchableOpacity>

                        {isExpanded && (
                            <View className="mt-2">
                                {entriesForThisDay.map(entry => (
                                    <TouchableOpacity key={entry.id}
                                        className="bg-[#2C2C2E] rounded-lg p-4 mb-2"
                                        onPress={() => router.push({
                                            pathname: '/journals/edit-entry',
                                            params: { entryId: entry.id }
                                        })}>
                                        <Text className="text-white font-bold text-lg mb-1">{entry.title}</Text>
                                        <Text className="text-gray-400 text-sm">
                                            {format(entry.date, 'h:mm a • eeee, MMMM d, yyyy')}・
                                            <Text className="text-teal-400">{format(entry.date, 'yyyy')}</Text>
                                            ・{entry.metadata}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                ) : (
                    <Text className="text-gray-500 text-center mt-4">No entries for this day in {year}.</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default OnThisDayDetailScreen;