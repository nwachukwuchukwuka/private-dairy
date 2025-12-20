import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FONTS = ['Anonymous Pro', 'Avenir', 'Baskerville', 'Courier New', 'Futura', 'Helvetica Neue', 'Helvetica Neue Light', 'Ideal Sans', 'Lato', 'Lato Light', 'New York', 'Open Sans', 'OpenDyslexic', 'Roboto', 'SF Mono', 'San Francisco', 'Sanchez', 'Sentinel', 'Spell Roundhand'];

const FontScreen = () => {
    const router = useRouter();
    const [selected, setSelected] = useState('Lato');
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Font</Text>
                </View>
            </View>
            <ScrollView className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    {FONTS.map(font => (
                        <TouchableOpacity key={font} onPress={() => setSelected(font)} className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
                            <Text className={`text-white text-lg ${font === 'OpenDyslexic' ? 'font-bold' : ''}`}>{font}</Text>
                            {selected === font && <Ionicons name="checkmark" size={20} color="blue" />}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default FontScreen;