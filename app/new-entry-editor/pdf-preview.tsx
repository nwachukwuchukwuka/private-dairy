import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PdfPreviewScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-800" edges={['top']}>
            <View className="flex-row justify-between items-center p-3 bg-gray-700">
                <TouchableOpacity>
                    <Ionicons name="share-outline" size={24} color="#007AFF" />
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">PDF Preview</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-1 p-4">
                <View className="flex-1 bg-white rounded-lg items-center pt-4">
                    <Text className="text-black text-xs">TUESDAY, DEC 2, 2025 • 1:28 PM GMT+1 • ABAKALIKI</Text>
                    <View className="border-b border-gray-300 w-full my-2" />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PdfPreviewScreen;