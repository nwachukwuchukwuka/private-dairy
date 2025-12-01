// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React from 'react';
// import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// const calendarDays = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// const EditDateScreen = () => {
//     const router = useRouter();

//     return (
//         <SafeAreaView className="flex-1 bg-[#1C1C1E]" edges={['top']}>
//             {/* Header */}
//             <View className="flex-row justify-between items-center p-3">
//                 <TouchableOpacity onPress={() => router.back()}>
//                     <Text className="text-blue-500 text-lg">Cancel</Text>
//                 </TouchableOpacity>
//                 <Text className="text-white font-bold text-lg">Edit Date</Text>
//                 <TouchableOpacity onPress={() => router.back()}>
//                     <Text className="text-blue-500 text-lg font-bold">Done</Text>
//                 </TouchableOpacity>
//             </View>

//             <ScrollView contentContainerClassName="p-4">
//                 <Text className="text-white text-lg mb-4">Monday, December 1, 2025 at 11:32 AM</Text>

//                 {/* Calendar */}
//                 <View className="mb-6">
//                     <View className="flex-row justify-between items-center mb-3">
//                         <Text className="text-white text-lg font-bold">December 2025 ›</Text>
//                         <View className="flex-row gap-4">
//                             <Ionicons name="chevron-back" size={24} color="white" />
//                             <Ionicons name="chevron-forward" size={24} color="white" />
//                         </View>
//                     </View>
//                     <View className="flex-row justify-around mb-2">
//                         {daysOfWeek.map(day => <Text key={day} className="text-gray-400 w-10 text-center">{day}</Text>)}
//                     </View>
//                     <View className="flex-row flex-wrap justify-around">
//                         {calendarDays.map((day, index) => (
//                             <View key={index} className="w-10 h-10 items-center justify-center m-1">
//                                 {day && (
//                                     <TouchableOpacity className={`w-10 h-10 rounded-full items-center justify-center ${day === 1 ? 'bg-blue-500' : ''}`}>
//                                         <Text className="text-white text-lg">{day}</Text>
//                                     </TouchableOpacity>
//                                 )}
//                             </View>
//                         ))}
//                     </View>
//                 </View>

//                 {/* Time and Options */}
//                 <View className="bg-gray-800 rounded-lg">
//                     <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
//                         <Text className="text-white text-lg">Time</Text>
//                         <Text className="text-blue-500 text-lg bg-gray-700 px-2 py-1 rounded-md">11:32 AM</Text>
//                     </View>
//                     <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
//                         <Text className="text-white text-lg">All-day</Text>
//                         <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
//                     </View>
//                     <TouchableOpacity className="p-3 border-b border-gray-700">
//                         <Text className="text-blue-500 text-lg text-center">Set to current date/time</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity className="p-3">
//                         <Text className="text-blue-500 text-lg text-center">Set to yesterday</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default EditDateScreen;



import { Ionicons } from '@expo/vector-icons';
import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    startOfMonth,
    subMonths,
} from 'date-fns';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// --- CHANGE 1: The MonthView component is now simplified ---
// It is only responsible for rendering the grid of dates, not the day-of-week header.
const MonthView = ({
    monthDate,
    selectedDate,
    onSelectDate,
}: {
    monthDate: Date;
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
}) => {
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(monthDate),
        end: endOfMonth(monthDate),
    });

    const startingDayIndex = getDay(startOfMonth(monthDate));

    const calendarDays: (Date | null)[] = [
        ...Array(startingDayIndex).fill(null),
        ...daysInMonth,
    ];

    return (
        // The main container still takes up the full width for the FlatList item
        <View style={{ width: width - 32 }} className="px-2">
            {/* The day-of-week header has been REMOVED from here */}
            <View className="flex-row flex-wrap justify-around">
                {calendarDays.map((day, index) => (
                    <View key={index} className="w-10 h-10 items-center justify-center m-1">
                        {day && (
                            <TouchableOpacity
                                onPress={() => onSelectDate(day)}
                                className={`w-10 h-10 rounded-full items-center justify-center ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-blue-500' : ''
                                    }`}
                            >
                                <Text className="text-white text-lg">{format(day, 'd')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

const EditDateScreen = () => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(new Date('2025-12-01T11:32:00'));
    const [displayMonth, setDisplayMonth] = useState(startOfMonth(new Date('2025-12-01')));
    const [isAllDay, setIsAllDay] = useState(false);
    const flatListRef = useRef<FlatList>(null);

    const months = useMemo(() => {
        const start = subMonths(new Date(), 120);
        const end = addMonths(new Date(), 120);
        let current = start;
        const monthArray = [];
        while (current <= end) {
            monthArray.push(current);
            current = addMonths(current, 1);
        }
        return monthArray;
    }, []);

    const [currentMonthIndex, setCurrentMonthIndex] = useState(() =>
        months.findIndex(m => format(m, 'yyyy-MM') === format(displayMonth, 'yyyy-MM'))
    );

    const goToNextMonth = () => {
        if (currentMonthIndex < months.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentMonthIndex + 1 });
        }
    };

    const goToPreviousMonth = () => {
        if (currentMonthIndex > 0) {
            flatListRef.current?.scrollToIndex({ index: currentMonthIndex - 1 });
        }
    };

    const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0];
            if (firstVisibleItem.item) {
                setDisplayMonth(firstVisibleItem.item);
                setCurrentMonthIndex(firstVisibleItem.index);
            }
        }
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]" edges={['top']}>
            {/* Header */}
            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">Edit Date</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="p-4">
                <Text className="text-white text-lg mb-4">
                    {format(selectedDate, isAllDay ? 'eeee, MMMM d, yyyy' : 'eeee, MMMM d, yyyy \'at\' h:mm a')}
                </Text>

                <View className="mb-6">
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-white text-lg font-bold">{format(displayMonth, 'MMMM yyyy')} ›</Text>
                        <View className="flex-row gap-4">
                            <TouchableOpacity onPress={goToPreviousMonth}>
                                <Ionicons name="chevron-back" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToNextMonth}>
                                <Ionicons name="chevron-forward" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* --- CHANGE 2: The day-of-week header is now here, outside the FlatList --- */}
                    {/* This makes it static while the dates below scroll horizontally. */}
                    <View className="flex-row justify-around mb-2 px-2">
                        {daysOfWeek.map((day) => (
                            <Text key={day} className="text-gray-400 w-10 text-center">
                                {day}
                            </Text>
                        ))}
                    </View>

                    <FlatList
                        ref={flatListRef}
                        data={months}
                        renderItem={({ item }) => (
                            <MonthView
                                monthDate={item}
                                selectedDate={selectedDate}
                                onSelectDate={setSelectedDate}
                            />
                        )}
                        keyExtractor={(item) => item.toISOString()}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={currentMonthIndex}
                        getItemLayout={(_, index) => ({
                            length: width - 32,
                            offset: (width - 32) * index,
                            index,
                        })}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50,
                        }}
                    />
                </View>

                <View className="bg-gray-800 rounded-lg">
                    {!isAllDay && (
                        <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                            <Text className="text-white text-lg">Time</Text>
                            <Text className="text-blue-500 text-lg bg-gray-700 px-2 py-1 rounded-md">
                                {format(selectedDate, 'h:mm a')}
                            </Text>
                        </View>
                    )}
                    <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-lg">All-day</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#34C759' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsAllDay}
                            value={isAllDay}
                        />
                    </View>
                    <TouchableOpacity className="p-3 border-b border-gray-700">
                        <Text className="text-blue-500 text-lg text-center">Set to current date/time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-3">
                        <Text className="text-blue-500 text-lg text-center">Set to yesterday</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditDateScreen;