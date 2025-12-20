import { useAppContext } from '@/context/context';
import { format, isSameDay, isSameMonth } from 'date-fns';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnThisDayScreen = () => {
    const router = useRouter();
    const { entries } = useAppContext();

    const today = new Date();

    const onThisDayEntriesCount = useMemo(() => {
        return entries.filter(entry =>
            isSameMonth(entry.date, today) &&
            isSameDay(entry.date, today)
        ).length;
    }, [entries, today]);

    // const previousYears = [
    //     format(today, 'yyyy'), // Current Year
    //     format(today, 'yyyy') - 1, // Last Year
    //     // You could add more years here dynamically if needed
    // ];

    const previousYears = useMemo(() => [
        format(today, 'yyyy'),
        (parseInt(format(today, 'yyyy'), 10) - 1).toString(),
    ], [today]);
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="px-4 pt-4 border-b border-gray-800">
                <View className=" pb-3 items-center">
                    <Text className="text-gray-100">On This Day ({onThisDayEntriesCount} Entries)</Text>
                </View>
                <View className="flex-row justify-between items-center py-3">
                    <View className="w-16" />
                    <Text className="text-white text-lg font-bold">{format(today, 'MMMM d')}</Text>
                    <TouchableOpacity onPress={() => router.back()} className="w-16 items-end">
                        <Text className="text-white text-lg font-bold">Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerClassName="p-4 items-center">
                <Text className="text-gray-100 text-lg mb-8">
                    No entries on this day
                </Text>

                {previousYears.map((year, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-[#1C1C1E] w-full p-4 rounded-lg mb-3"
                        onPress={() => router.push({
                            pathname: '/more/on-this-day-detail',
                            params: { year: year }
                        })}
                    >
                        <Text className="text-blue-500 text-lg text-center">
                            {format(today, 'MMMM d')}, {year}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default OnThisDayScreen;