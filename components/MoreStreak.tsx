import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MoreStreak = () => {
    const streakDays = [12, 13, 14, 15, 16, 17, 18];
    const currentDay = 18;

    return (
        <View className="mb-10">
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-white text-2xl font-bold">Streak</Text>
                <TouchableOpacity>
                    <Text className="text-blue-400 text-base">See more</Text>
                </TouchableOpacity>
            </View>
            <View className="bg-[#1C1C1E] rounded-2xl p-4 pt-5">
                <View className="flex-row mb-6">
                    <View className="flex-1 items-center border-r border-gray-600">
                        <Text className="text-gray-400 text-sm mb-1">
                            Current Streak
                        </Text>
                        <Text className="text-white text-3xl font-semibold">0</Text>
                    </View>
                    <View className="flex-1 items-center">
                        <Text className="text-gray-400 text-sm mb-1">
                            Longest Streak
                        </Text>
                        <Text className="text-white text-3xl font-semibold">0</Text>
                    </View>
                </View>
                <View className="flex-row justify-around items-end">
                    {streakDays.map((day) => (
                        <View key={day} className="items-center gap-2 relative">
                            <View className="w-8 h-8 rounded-full border-2 border-gray-600" />
                            <Text className="text-gray-400">{day}</Text>
                            {day === currentDay && (
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
