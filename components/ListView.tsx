import { useAppContext } from '@/context/context';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const entriesByMonth = [
    {
        month: "December 2025",
        days: [
            {
                dayOfWeek: "THU",
                dayOfMonth: "04",
                entries: [
                    { title: "Earth", metadata: "2:23 AM · Abakaliki, Abakaliki · 77°F Cloudy" },
                ]
            },
            {
                dayOfWeek: "WED",
                dayOfMonth: "03",
                entries: [
                    { title: "This is for testing purposes", metadata: "3:23 PM · Abakaliki, Abakaliki · 77°F...", image: true },
                ]
            },
            {
                dayOfWeek: "TUE",
                dayOfMonth: "02",
                entries: [
                    { title: "", metadata: "1:28 PM · Abakaliki, Abakaliki · 93°F Mostly Clear" },
                    { title: "", metadata: "1:20 PM · Abakaliki, Abakaliki · 93°F Mostly Clear" },
                ]
            },
            {
                dayOfWeek: "MON",
                dayOfMonth: "01",
                entries: [
                    { title: "", metadata: "5:36 PM · Abakaliki, Abakaliki · 90°F Partly Cloudy" },
                    { title: "", metadata: "5:34 PM · Abakaliki, Abakaliki · 90°F Partly Cloudy" },
                ]
            }
        ]
    },
    {
        month: "November 2025",
        days: [
            {
                dayOfWeek: "WED",
                dayOfMonth: "26",
                entries: [
                    { title: "WHAT ARE MY TOP THREE VALUES?", metadata: "1:09 PM · Abakaliki, Abakaliki · 92°F Mostly Clear" },
                    { title: "HOW AM I CELEBRATING THANKSGIVING THIS YEAR?", metadata: "1:09 PM · Abakaliki, Abakaliki · 92°F Mostly Clear" },
                ]
            }
        ]
    }
];

const ListView = () => {
    const router = useRouter();
    const { entries, activeJournal } = useAppContext();

    // const entriesByMonth = useMemo(() => {
    //     const groupedByMonth: { [key: string]: { [key: string]: any[] } } = {};

    //     entries.forEach(entry => {
    //         const monthKey = format(entry.date, 'MMMM yyyy');
    //         const dayKey = format(entry.date, 'dd');

    //         if (!groupedByMonth[monthKey]) {
    //             groupedByMonth[monthKey] = {};
    //         }
    //         if (!groupedByMonth[monthKey][dayKey]) {
    //             groupedByMonth[monthKey][dayKey] = [];
    //         }
    //         groupedByMonth[monthKey][dayKey].push(entry);
    //     });

    //     return Object.keys(groupedByMonth).map(month => ({
    //         month,
    //         days: Object.keys(groupedByMonth[month]).map(day => ({
    //             dayOfMonth: day,
    //             dayOfWeek: format(groupedByMonth[month][day][0].date, 'EEE').toUpperCase(),
    //             entries: groupedByMonth[month][day],
    //         })).sort((a, b) => parseInt(b.dayOfMonth, 10) - parseInt(a.dayOfMonth, 10))
    //     }));
    // }, [entries]);


    const entriesByMonth = useMemo(() => {
        const journalEntries = entries.filter(entry => entry.journalId === activeJournal?.id);
        const groupedByMonth: { [key: string]: { [key: string]: any[] } } = {};
        journalEntries.forEach(entry => {
            const monthKey = format(entry.date, 'MMMM yyyy');
            const dayKey = format(entry.date, 'dd');
            if (!groupedByMonth[monthKey]) groupedByMonth[monthKey] = {};
            if (!groupedByMonth[monthKey][dayKey]) groupedByMonth[monthKey][dayKey] = [];
            groupedByMonth[monthKey][dayKey].push(entry);
        });
        return Object.keys(groupedByMonth).map(month => ({
            month,
            days: Object.keys(groupedByMonth[month]).map(day => ({
                dayOfMonth: day,
                dayOfWeek: format(groupedByMonth[month][day][0].date, 'EEE').toUpperCase(),
                entries: groupedByMonth[month][day],
            })).sort((a, b) => parseInt(b.dayOfMonth, 10) - parseInt(a.dayOfMonth, 10))
        }));
    }, [entries, activeJournal]);

    const hasEntriesForCurrentJournal = entries.some(entry => entry.journalId === activeJournal?.id);

    return (
        <View className="flex-1 bg-black">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {!hasEntriesForCurrentJournal ? (
                    <View className="items-center justify-center mt-20">
                        <Text className="text-gray-500 text-lg">No entries yet.</Text>
                        <Text className="text-gray-500 text-base mt-2">Tap the '+' button to get started!</Text>
                    </View>
                ) : (
                    entriesByMonth.map((monthData, monthIndex) => (
                        <View key={monthIndex} className="px-4">
                            <Text className="text-white font-bold text-lg mt-6 mb-4">
                                {monthData.month}
                            </Text>

                            {monthData.days.map((dayData, dayIndex) => (
                                <View key={dayIndex} className="flex-row py-4 border-t border-gray-800">
                                    <View className="items-center w-16">
                                        <Text className="text-gray-400 text-xs font-bold">{dayData.dayOfWeek}</Text>
                                        <Text className="text-white text-3xl font-light">{dayData.dayOfMonth}</Text>
                                    </View>
                                    <View className="flex-1">
                                        {dayData.entries.map((entry, entryIndex) => (
                                            <TouchableOpacity
                                                key={entry.id}
                                                className={`flex-row items-start ${entryIndex > 0 ? 'mt-4 pt-4 border-t border-gray-800' : ''}`}
                                            >
                                                <View className="flex-1">
                                                    {entry.title && (
                                                        <Text className="text-white font-bold text-lg mb-1">
                                                            {entry.title}
                                                        </Text>
                                                    )}
                                                    <Text className="text-gray-400 text-sm">
                                                        {format(entry.date, 'h:mm a')} · {entry.metadata}
                                                    </Text>
                                                </View>

                                                {entry.imageUri && (
                                                    <Image
                                                        source={{ uri: entry.imageUri }}
                                                        className="w-16 h-16 rounded-xl ml-4"
                                                    />
                                                )}
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))
                )}
            </ScrollView>

            <TouchableOpacity className="absolute bottom-8 right-8 bg-neutral-600 w-16 h-16 rounded-full items-center justify-center shadow-lg">
                <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
}

export default ListView;