import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

const DateRow = ({ label, value }: { label: string; value: string }) => (
    <View className="flex-row justify-between items-center py-4 px-4 border-b border-gray-800">
        <Text className="text-white text-lg">{label}</Text>
        <Text className="text-blue-500 text-lg">{value}</Text>
    </View>
);

const DateRangeScreen = () => {
    const router = useRouter()
    return (
        <View className="flex-1 bg-black justify-between">
            <View className="p-4">
                <View className="flex-row items-center gap-4 relative ">
                    <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10 ">
                        <Ionicons name="chevron-back" size={28} color="#007AFF" />
                        <Text className="text-blue-500 text-xl">Import/Export</Text>
                    </TouchableOpacity>

                    <View className="absolute left-0 right-0 items-center">
                        <Text className="text-white text-xl font-bold">Journal</Text>
                    </View>
                </View>


                <View className="bg-[#1C1C1E] rounded-lg mt-14">
                    <DateRow label="Start Date" value="Apr 25, 2025" />
                    <DateRow label="End Date" value="Today" />
                    <View className="flex-row justify-between items-center py-3 px-4">
                        <Text className="text-white text-lg">Set to All Entries</Text>
                        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                    </View>
                </View>

                <TouchableOpacity className="bg-blue-500 rounded-lg p-3 mt-8">
                    <Text className="text-white text-center text-lg font-semibold">Set to Today</Text>
                </TouchableOpacity>
            </View>

            <View className="p-4 bg-[#1C1C1E]">
                <Text className="text-white text-center text-xl">
                    (Date Picker Component Would Go Here)
                </Text>
            </View>
        </View>
    );
};

export default DateRangeScreen;