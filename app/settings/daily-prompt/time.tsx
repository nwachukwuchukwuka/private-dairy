import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OptionRow = ({ label, value, isSelected, onPress }: { label: string, value: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <View className="flex-row items-center">
            <Text className="text-gray-400 text-lg mr-2">{value}</Text>
            {isSelected && <Ionicons name="checkmark" size={20} color="blue" />}
        </View>
    </TouchableOpacity>
);

const TimeScreen = () => {
    const router = useRouter();
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [selection, setSelection] = useState('Exact Time');

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Daily Reminder</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <OptionRow label="Exact Time" value="11:01 AM" isSelected={selection === 'Exact Time'} onPress={() => setSelection('Exact Time')} />
                    {/* {selection === 'Exact Time' && ( */}
                    <View className="p-4 bg-black">
                        <DateTimePicker value={selectedTime} mode="time" display="spinner" onChange={(_, date) => date && setSelectedTime(date)} textColor="white" />
                    </View>
                    {/* )} */}
                    <OptionRow label="Morning" value="8-11 AM" isSelected={selection === 'Morning'} onPress={() => setSelection('Morning')} />
                    <OptionRow label="Midday" value="11-4 PM" isSelected={selection === 'Midday'} onPress={() => setSelection('Midday')} />
                    <OptionRow label="Evening" value="4-8 PM" isSelected={selection === 'Evening'} onPress={() => setSelection('Evening')} />
                    <OptionRow label="Random" value="8 AM - 8 PM" isSelected={selection === 'Random'} onPress={() => setSelection('Random')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default TimeScreen;