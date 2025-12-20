import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewEntryButtonScreen = () => {
    const router = useRouter();
    const [selected, setSelected] = useState('Right');
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">New Entry Button</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg mb-2">
                    <TouchableOpacity onPress={() => setSelected('Right')} className="flex-row justify-between items-center p-3 border-b border-[#3A3A3C]">
                        <Text className="text-white text-lg">Right</Text>
                        {selected === 'Right' && <Ionicons name="checkmark" size={20} color="blue" />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected('Left')} className="flex-row justify-between items-center p-3">
                        <Text className="text-white text-lg">Left</Text>
                        {selected === 'Left' && <Ionicons name="checkmark" size={20} color="blue" />}
                    </TouchableOpacity>
                </View>
                <Text className="text-gray-500 text-sm px-4">Adjust the placement of "New Entry" button for improved accessibility.</Text>
            </View>
        </SafeAreaView>
    );
};
export default NewEntryButtonScreen;