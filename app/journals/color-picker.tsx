import { COLORS } from '@/constants/constants';
import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const ColorPickerScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { updateJournal, activeJournal, setActiveJournal } = useAppContext();

    console.log("id", id)
    const handleColorSelect = (newColor: string) => {
        if (id) {
            const updatedData = { color: newColor };
            updateJournal(id as string, updatedData);

            if (activeJournal?.id === id) {
                setActiveJournal({ ...activeJournal, ...updatedData });
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row justify-between items-center p-3">
                <View className="w-16" />
                <Text className="text-white font-bold text-lg">Color</Text>
                <TouchableOpacity onPress={() => router.back()} className="w-16 items-end">
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={COLORS}
                keyExtractor={(item) => item.hex}
                numColumns={6}
                contentContainerClassName="p-4 items-center"
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleColorSelect(item.hex)}
                        className="m-2"
                    >
                        <View style={{ backgroundColor: item.hex }} className="w-12 h-12 rounded-full" />
                        {item.isPremium && (
                            <View className="absolute top-1 right-1 bg-white p-0.5 rounded-full">
                                <Ionicons name="star" size={7} color="black" />
                            </View>
                        )}
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default ColorPickerScreen;