import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnThisDaySettingsScreen = () => {
    const router = useRouter();
    const { journals } = useAppContext();
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [time, setTime] = useState(new Date());

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">On This Day</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-16 h-16 items-center justify-center mb-4">
                        <Ionicons name="calendar-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Relive past memories with On This Day.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>

                <View className="bg-[#1C1C1E] rounded-lg mb-4">
                    <View className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">System Notification</Text>
                        <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                    </View>
                    <TouchableOpacity onPress={() => setPickerVisible(!isPickerVisible)} className="flex-row justify-between items-center p-4 border-t border-[#3A3A3C]">
                        <Text className="text-white text-lg">Notification Time</Text>
                        <Text className="text-gray-400 text-lg">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                    </TouchableOpacity>
                    {isPickerVisible && (
                        <View className="bg-black py-4">
                            <DateTimePicker value={time} mode="time" display="spinner" onChange={(_, date) => date && setTime(date)} textColor="white" />
                        </View>
                    )}
                </View>
                <Text className="text-gray-500 text-base px-4 mb-8">This notifies you of entries on this day in the past, helping you revisit and relive your memories.</Text>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">INCLUDED JOURNALS</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    {journals.map(journal => (
                        <View key={journal.id} className="flex-row items-center justify-between p-4 border-b border-gray-700 last:border-b-0">
                            <View className="flex-row items-center">
                                <View style={{ backgroundColor: journal.color }} className="w-6 h-6 rounded-md mr-3" />
                                <Text className="text-white text-lg">{journal.name}</Text>
                            </View>
                            <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default OnThisDaySettingsScreen;