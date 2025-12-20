import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OPTIONS = ['System', 'Light', 'Dark', 'Scheduled'];

const ThemeScreen = () => {
    const router = useRouter();
    const [selected, setSelected] = useState('System');
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Theme</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    {OPTIONS.map(option => (
                        <TouchableOpacity key={option} onPress={() => setSelected(option)} className="flex-row justify-between items-center p-4 border-b border-[#3A3A3C] last:border-b-0">
                            <Text className="text-white text-lg">{option}</Text>
                            {selected === option && <Ionicons name="checkmark" size={20} color="blue" />}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ThemeScreen;