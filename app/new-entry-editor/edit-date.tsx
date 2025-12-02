import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    startOfMonth,
    subDays,
    subMonths
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

        <View style={{ width: width }} className="px-4 ">
            <View className="flex-row flex-wrap justify-between gap-2">
                {calendarDays.map((day, index) => (
                    <View key={index} className="w-10 h-10 items-center justify-center m-1">
                        {day && (
                            <TouchableOpacity
                                onPress={() => onSelectDate(day)}
                                className={`w-10 h-10 rounded-full items-center justify-center ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'bg-blue-500' : ''
                                    }`}
                            >
                                <Text className="text-white text-xl">{format(day, 'd')}</Text>
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
    const [showTimePicker, setShowTimePicker] = useState(false);

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

    const scrollToDate = (date: Date) => {
        const monthIndex = months.findIndex(m => format(m, 'yyyy-MM') === format(date, 'yyyy-MM'));
        if (monthIndex !== -1) {
            flatListRef.current?.scrollToIndex({ index: monthIndex, animated: true });
        }
    };

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


    const onTimeChange = (event: any, newSelectedTime?: Date) => {
        setShowTimePicker(false);
        if (newSelectedTime) {
            const updatedDate = new Date(selectedDate);
            updatedDate.setHours(newSelectedTime.getHours());
            updatedDate.setMinutes(newSelectedTime.getMinutes());
            setSelectedDate(updatedDate);
        }
    };


    const handleSetToCurrent = () => {
        const now = new Date();
        setSelectedDate(now);
        scrollToDate(now);
    };

    const handleSetToYesterday = () => {
        const yesterday = subDays(new Date(), 1);
        setSelectedDate(yesterday);
        scrollToDate(yesterday);
        setIsAllDay(true);
    };

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]" edges={['top']}>
            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">Edit Date</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>


            <ScrollView>
                <Text className="text-white text-lg mb-4 px-4">
                    {format(selectedDate, isAllDay ? 'eeee, MMMM d, yyyy' : 'eeee, MMMM d, yyyy \'at\' h:mm a')}
                </Text>

                <View className="mb-6">
                    <View className="flex-row justify-between items-center mb-3 px-4">
                        <View className="flex-row items-center ">
                            <Text className="text-white text-lg font-bold">{format(displayMonth, 'MMMM yyyy')}  </Text>
                            <Ionicons name="chevron-forward" size={18} color="white" />
                        </View>

                        <View className="flex-row gap-4">
                            <TouchableOpacity onPress={goToPreviousMonth}>
                                <Ionicons name="chevron-back" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToNextMonth}>
                                <Ionicons name="chevron-forward" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-row justify-around mb-2 px-4">
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
                            length: width,
                            offset: width * index,
                            index,
                        })}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50,
                        }}
                    />
                </View>

                <View className=" mx-4">
                    {!isAllDay && (
                        <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                            <Text className="text-white text-xl">Time</Text>
                            <DateTimePicker
                                value={selectedDate}
                                mode="time"
                                display="default"
                                onChange={onTimeChange}
                            />
                        </View>
                    )}
                    <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-xl">All-day</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#34C759' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsAllDay}
                            value={isAllDay}
                        />
                    </View>
                    <TouchableOpacity onPress={handleSetToCurrent} className="p-3 border-b border-gray-700">
                        <Text className="text-white text-xl">Set to current date/time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSetToYesterday} className="p-3">
                        <Text className="text-white text-xl">Set to yesterday</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default EditDateScreen;