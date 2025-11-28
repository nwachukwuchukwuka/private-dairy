import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
interface MonthData {
    year: number;
    month: number;
}

const MonthCalendar = React.memo(({ year, month }: MonthData) => {
    const calendarGrid = useMemo(() => {
        const today = new Date();
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const grid: (number | null)[] = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            grid.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            grid.push(i);
        }

        return {
            monthName,
            grid,
            today,
        };
    }, [year, month]);

    return (
        <View className="mb-8">
            <Text className="text-white font-semibold text-lg mb-3 px-2">
                {calendarGrid.monthName} {year}
            </Text>
            <View className="flex-row flex-wrap">
                {calendarGrid.grid.map((day, index) => {
                    const isSelected =
                        day === 18 &&
                        month === 10 &&
                        year === 2025;

                    return (
                        <View key={index} className="w-[14.28%] aspect-square items-center justify-center p-1">
                            {day && (
                                <View
                                    className={`w-full h-full rounded-md items-center justify-center ${isSelected ? 'bg-white' : ''
                                        }`}
                                >
                                    <Text
                                        className={`font-semibold text-lg ${isSelected ? 'text-blue-500' : 'text-gray-300'
                                            }`}
                                    >
                                        {day}
                                    </Text>
                                </View>
                            )}
                        </View>
                    );
                })}
            </View>
        </View>
    );
});


const CalendarView = () => {
    const [months, setMonths] = useState<MonthData[]>([]);
    const [initialScrollIndex, setInitialScrollIndex] = useState(0);

    useEffect(() => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const generatedMonths: MonthData[] = [];
        const monthsToGoBack = 24;
        const monthsToGoForward = 24;

        for (let i = -monthsToGoBack; i <= monthsToGoForward; i++) {
            const date = new Date(currentYear, currentMonth + i, 1);
            generatedMonths.push({
                year: date.getFullYear(),
                month: date.getMonth(),
            });
        }

        setMonths(generatedMonths);
        setInitialScrollIndex(monthsToGoBack);
    }, []);

    const renderMonth = useCallback(({ item }: { item: MonthData }) => (
        <MonthCalendar year={item.year} month={item.month} />
    ), []);

    const getItemLayout = useCallback((data: any, index: number) => ({
        length: 350,
        offset: 350 * index,
        index,
    }), []);

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['bottom']}>
            <View className="flex-row justify-between p-2 border-b border-gray-800 bg-black">
                {DAYS_OF_WEEK.map(day => (
                    <Text key={day} className="w-[14.28%] text-center text-gray-500 font-semibold text-xs">
                        {day}
                    </Text>
                ))}
            </View>

            {months.length > 0 && (
                <FlatList
                    data={months}
                    renderItem={renderMonth}
                    keyExtractor={(item) => `${item.year}-${item.month}`}
                    initialScrollIndex={initialScrollIndex}
                    getItemLayout={getItemLayout}
                    windowSize={5}
                    contentContainerStyle={{ paddingHorizontal: 2, paddingTop: 16 }}
                />
            )}
        </SafeAreaView>
    );
};

export default CalendarView;