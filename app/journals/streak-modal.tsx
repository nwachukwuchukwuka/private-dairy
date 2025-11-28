// App.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import { Flame } from '@expo/vector-icons';

export default function App() {
    return (
        <View className="flex-1 bg-[#121212] px-6 pt-12">

            {/* Header Close & More */}
            <View className="flex-row justify-between items-center mb-8">
                <TouchableOpacity>
                    <Text className="text-white text-3xl">×</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-gray-500 text-xl">⎵</Text>
                </TouchableOpacity>
            </View>

            {/* Day One Title */}
            <View className="items-center mb-10">
                <View className="items-center">
                    <Text className="text-gray-500 text-sm tracking-widest uppercase">Day One</Text>
                    <Text className="text-white text-6xl font-bold mt-2">0 Days</Text>
                    <View className="flex-row items-center mt-2">
                        {/* <Flame name="flame" size={28} color="#f97316" /> */}
                        <Text className="text-gray-400 text-lg ml-2">Journal Streak</Text>
                    </View>
                </View>

                {/* Laurel Wreath Decoration */}
                <View className="absolute -top-8 opacity-30">
                    <Text className="text-gray-600 text-6xl">❧</Text>
                </View>
            </View>

            {/* Calendar Grid */}
            <View className="mb-12">
                {/* Day Labels */}
                <View className="flex-row justify-between mb-3 px-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <Text key={index} className="text-gray-500 text-xs font-medium w-9 text-center">
                            {day}
                        </Text>
                    ))}
                </View>

                {/* Grid */}
                <View className="flex-row flex-wrap">
                    {Array.from({ length: 35 }, (_, i) => (
                        <View
                            key={i}
                            className={`w-9 h-9 m-0.5 rounded-lg ${i === 33 ? 'bg-cyan-500' : 'bg-gray-800'
                                }`}
                        />
                    ))}
                </View>
            </View>

            {/* Journal Button */}
            <View className="items-center mb-8">
                <TouchableOpacity className="bg-cyan-500 px-8 py-4 rounded-full flex-row items-center space-x-3">
                    <Text className="text-black font-semibold text-lg">Journal</Text>
                    <View className="bg-cyan-400 w-6 h-6 rounded-full" />
                </TouchableOpacity>
                <Text className="text-gray-600 text-xs mt-3">0</Text>
            </View>

            {/* Streak Info Card */}
            <View className="bg-gray-900 rounded-2xl px-6 py-5 items-center">
                <Text className="text-gray-400 text-sm">
                    Consecutive days with an entry created
                </Text>
                <View className="flex-row items-center mt-3">
                    {/* <Flame name="flame" size={32} color="#fb923c" /> */}
                    <Text className="text-orange-400 text-base ml-2 font-medium">
                        Entry created today
                    </Text>
                </View>
            </View>
        </View>
    );
}