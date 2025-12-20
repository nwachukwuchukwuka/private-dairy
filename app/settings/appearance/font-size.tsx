import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FontSizeScreen = () => {
    const router = useRouter();
    const [selected, setSelected] = useState('System');
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Font Size</Text>
                </View>
                <TouchableOpacity className="ml-auto"><Text className="text-blue-500 font-bold text-lg">Save</Text></TouchableOpacity>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <TouchableOpacity onPress={() => setSelected('System')} className="flex-row justify-between items-center p-4 border-b border-gray-700">
                        <Text className="text-white text-lg">System Font Size</Text>
                        {selected === 'System' && <Ionicons name="checkmark" size={20} color="blue" />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected('Custom')} className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">Custom</Text>
                        <Text className="text-gray-400 text-lg">5 - 99</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default FontSizeScreen;