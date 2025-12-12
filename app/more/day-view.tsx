import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { addDays, format, isSameDay, subDays } from 'date-fns';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayViewScreen = () => {
    const router = useRouter();
    const { initialDate } = useLocalSearchParams();
    const [currentDate, setCurrentDate] = useState(
        initialDate ? new Date(initialDate as string) : new Date()
    );
    // const [currentDate, setCurrentDate] = useState(new Date());
    const { entries, activeJournal } = useAppContext();
    const [isEntriesExpanded, setEntriesExpanded] = useState(true);

    const goToNextDay = () => {
        setCurrentDate(prevDate => addDays(prevDate, 1));
    };
    const goToPreviousDay = () => {
        setCurrentDate(prevDate => subDays(prevDate, 1));
    };

    const entriesForDay = useMemo(() => {
        return entries.filter(entry =>
            entry.journalId === activeJournal?.id && isSameDay(entry.date, currentDate)
        );
    }, [entries, activeJournal, currentDate]);

    const isToday = isSameDay(currentDate, new Date());

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.push('/journals/new-entry')}>
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#1C1C1E] px-4 py-2 rounded-full">
                    <Text className="text-white font-semibold">All Entries</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            {/* Date Navigator */}
            <View className="flex-row bg-[#1C1C1E] rounded-lg justify-between items-center p-3 mx-3 mb-3">
                <TouchableOpacity onPress={goToPreviousDay}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View className="items-center">
                    <Text className="text-white text-base font-semibold">{format(currentDate, 'EEE, MMM d, yyyy')}</Text>
                    {isToday && <Text className="text-gray-400 text-xs">Today</Text>}
                </View>
                <TouchableOpacity onPress={goToNextDay}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {entriesForDay.length > 0 ? (
                <ScrollView contentContainerClassName="pb-10">
                    <Pressable className="flex-row justify-between items-center p-3 bg-[#1C1C1E] rounded-lg mx-3" onPress={() => setEntriesExpanded(!isEntriesExpanded)}>
                        <Text className="text-white text-lg">{entriesForDay.length} Entries</Text>
                        <Ionicons name={isEntriesExpanded ? "chevron-up" : "chevron-down"} size={20} color="gray" />
                    </Pressable>
                    {isEntriesExpanded && (
                        <View className="p-3">
                            {entriesForDay.map(entry => (
                                <TouchableOpacity key={entry.id} className="bg-[#1C1C1E] p-4 rounded-xl mb-3" >
                                    <Text className="text-white font-bold mb-2">{entry.title}</Text>
                                    {entry.imageUri && (
                                        <Image
                                            source={{ uri: entry.imageUri }}
                                            className="w-full h-48 rounded-lg mb-3"
                                        />
                                    )}
                                    <Text className="text-gray-400 text-xs">{entry.metadata}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}


                    <View className="p-3">
                        <View className="bg-[#1C1C1E] rounded-xl mb-4 p-3">
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="image-outline" size={20} color="white" />
                                <Text className="text-white text-lg font-semibold ml-2">Apple Photo Library</Text>
                            </View>

                            <View className="flex-row">
                                <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/2 h-32 rounded-l-lg" />
                                <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/2 h-32 rounded-r-lg" />
                            </View>
                        </View>

                        <View className="bg-[#1C1C1E] rounded-xl mb-4">
                            <View className="p-3">
                                <View className="flex-row items-center mb-2">
                                    <Ionicons name="location-outline" size={20} color="white" />
                                    <Text className="text-white text-lg font-semibold ml-2">Places</Text>
                                </View>
                            </View>
                            <View className="h-32 bg-gray-700 items-center justify-center">
                                <Text className="text-white">(Map Component)</Text>
                            </View>
                            <View className="p-3">
                                <Text className="text-white font-semibold">Abakaliki</Text>
                                <Text className="text-gray-400">10:00 AM (93h 27m)</Text>
                            </View>
                        </View>

                        <View className="bg-[#1C1C1E] rounded-xl p-3 flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Ionicons name="calendar-outline" size={20} color="white" />
                                <Text className="text-white text-lg font-semibold ml-2">Events</Text>
                            </View>
                            <TouchableOpacity>
                                <Text className="text-blue-500 font-semibold">Enable</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            ) : (
                <View className="flex-1 px-4">
                    <View className="bg-[#1C1C1E] rounded-lg flex-row justify-between items-center p-4 mb-4">
                        <Text className="text-white text-lg">0 Entries</Text>
                        <TouchableOpacity onPress={() => router.push('/journals/new-entry')}>
                            <Text className="text-blue-500 text-lg font-semibold">New Entry</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="bg-[#1C1C1E] rounded-lg p-4 mb-4">
                        <View className="flex-row justify-between items-start">
                            <Ionicons name="calendar-outline" size={20} color="white" />
                            <View className="flex-1 mx-3">
                                <Text className="text-white text-lg font-semibold">Events</Text>
                            </View>
                            <TouchableOpacity>
                                <Text className="text-blue-500 font-semibold">Select Calendar(s)</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="text-gray-400 text-sm mt-2">Pull in a summary of your calendar events for the day.</Text>

                    </View>
                    <View className="bg-[#1C1C1E] rounded-lg p-4 mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="image-outline" size={20} color="white" />
                            <Text className="text-white text-lg font-semibold ml-3">Apple Photo Library</Text>
                        </View>
                        <Text className="text-gray-400 mt-2 ml-8">No Photos</Text>
                    </View>
                    <View className="bg-[#1C1C1E] rounded-lg p-4">
                        <View className="flex-row items-center">
                            <Ionicons name="location-outline" size={20} color="white" />
                            <Text className="text-white text-lg font-semibold ml-3">Places</Text>
                        </View>
                        <Text className="text-gray-400 mt-2 ml-8">No Places</Text>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default DayViewScreen;