import { useAppContext } from '@/context/context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { differenceInCalendarDays, isSameDay } from 'date-fns';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const BookView = () => {
    const router = useRouter();
    const { entries, activeJournal } = useAppContext();

    const stats = useMemo(() => {
        if (!activeJournal) {
            return { streak: 0, entryCount: 0, mediaCount: 0, dayCount: 0, onThisDayCount: 0 };
        }

        const journalEntries = entries.filter(entry => entry.journalId === activeJournal.id);

        const entryCount = journalEntries.length;
        const mediaCount = journalEntries.filter(entry => !!entry.imageUri).length;

        const uniqueDays = new Set(journalEntries.map(entry => entry.date.toDateString()));
        const dayCount = uniqueDays.size;

        const today = new Date();
        const onThisDayCount = journalEntries.filter(entry =>
            isSameDay(entry.date, today)
        ).length;

        let streak = 0;
        if (journalEntries.length > 0) {
            const sortedEntries = [...journalEntries].sort((a, b) => b.date.getTime() - a.date.getTime());
            const mostRecentDate = sortedEntries[0].date;
            const diffFromToday = differenceInCalendarDays(today, mostRecentDate);

            if (diffFromToday <= 1) {
                streak = 1;
                let lastDate = mostRecentDate;
                for (let i = 1; i < sortedEntries.length; i++) {
                    const currentDate = sortedEntries[i].date;
                    const diff = differenceInCalendarDays(lastDate, currentDate);
                    if (diff === 1) {
                        streak++;
                        lastDate = currentDate;
                    } else if (diff > 1) {
                        break;
                    }
                }
            }
        }

        return { streak, entryCount, mediaCount, dayCount, onThisDayCount };
    }, [entries, activeJournal]);

    const handleEditPress = () => {
        if (!activeJournal) {
            Alert.alert("No Journal Selected", "Please select a journal from the menu to edit it.");
            return;
        }

        router.push({
            pathname: '/journals/journal-editor-modal',
            params: { ...activeJournal },
        });
    };


    return (
        <ScrollView className="flex-1 bg-[#1C1C1E]">
            <View className="p-4">
                <View className="mb-10">
                    <Text className="text-white text-2xl font-bold mb-4">
                        Description
                    </Text>

                    <TouchableOpacity onPress={handleEditPress}>
                        {activeJournal?.description ? (
                            <Text className='text-white text-lg'>{activeJournal.description}</Text>
                        ) : (
                            <Text className='text-gray-400 text-lg'>Add a description...</Text>
                        )}
                    </TouchableOpacity>

                </View>

                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-2">Stats</Text>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="w-[40%]" onPress={() => router.push('/journals/streak-modal')}>
                            <View className="bg-[#2C2C2E] p-4 rounded-xl w-[150px] h-[150px] mr-3 mb-3 items-center justify-center">
                                <Text className="text-gray-400 text-xs font-bold mb-1">
                                    STREAK
                                </Text>
                                <Text className="text-white text-4xl font-semibold">{stats.streak}</Text>
                                <Text className="text-gray-400 text-sm">Days</Text>
                            </View>
                        </TouchableOpacity>
                        <View className="flex-1 gap-3 overflow-hidden">
                            <View className="flex-row gap-3 h-[70px] w-full">
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        ENTRIES
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        {stats.entryCount}
                                    </Text>
                                </View>
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        MEDIA
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        {stats.mediaCount}
                                    </Text>
                                </View>
                            </View>


                            <View className="flex-row gap-3 h-[70px]  w-full">
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        DAYS
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        {stats.dayCount}
                                    </Text>
                                </View>
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        ON THIS DAY
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        {stats.onThisDayCount}

                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="bg-[#2C2C2E] p-4 rounded-xl mb-8">
                    <View className="flex-row items-start">
                        <View className="mr-3">
                            <Ionicons name="options-outline" size={28} color="white" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white text-lg font-bold">
                                Customize Your Journal
                            </Text>
                            <Text className="text-gray-400">
                                Customize your journal or configure it to your journaling
                                style.
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Feather name="x" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="items-center">
                    <TouchableOpacity className="bg-[#2C2C2E] py-1 px-8 rounded-full" onPress={handleEditPress}>
                        <Text className="text-white text-lg">Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default BookView;