import { useAppContext } from '@/context/context';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MoreStreak = () => {
    const router = useRouter();
    const { streakDays, today } = useMemo(() => {
        const today = new Date();
        const startDate = subDays(today, 6);
        const dateRange = eachDayOfInterval({ start: startDate, end: today });

        return { streakDays: dateRange, today };
    }, []);


    const { activeJournal, entries } = useAppContext();
    const streakCount = 0;
    const longestStreak = 0;


    return (
        <View className="mb-10">
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-white text-2xl font-bold">Streak</Text>
                <TouchableOpacity onPress={() => router.push('/journals/streak-modal')}>
                    <Text className="text-blue-400 text-base">See more</Text>
                </TouchableOpacity>
            </View>
            <View className="bg-[#1C1C1E] rounded-2xl p-4 pt-5">
                <View className="flex-row mb-6">
                    <View className="flex-1 items-center border-r border-gray-600">
                        <Text className="text-gray-400 text-sm mb-1">
                            Current Streak
                        </Text>
                        <Text className="text-white text-3xl font-semibold">{streakCount}</Text>
                    </View>
                    <View className="flex-1 items-center">
                        <Text className="text-gray-400 text-sm mb-1">
                            Longest Streak
                        </Text>
                        <Text className="text-white text-3xl font-semibold">{longestStreak}</Text>
                    </View>
                </View>
                <View className="flex-row justify-around items-end">

                    {streakDays.map((date) => (
                        <View key={date.toISOString()} className="items-center gap-2 relative">
                            <View className="w-10 h-10 rounded-full border-2 border-gray-600" />
                            <Text className="text-gray-400">{format(date, 'd')}</Text>
                            {isSameDay(date, today) && (
                                <View className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute -bottom-2" />
                            )}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default MoreStreak
