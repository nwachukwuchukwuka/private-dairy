import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Row = ({ label, onPress }: { label: string, onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
);

const SupportScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Support</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <Row label="Day One User Help Guides" onPress={() => { }} />
                    <Row label="Contact Support" onPress={() => { }} />
                    <Row label="Add Essentials Guide to Journal" onPress={() => { }} />
                    <Row label="Diagnostics" onPress={() => router.push('/settings/support/diagnostics')} />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default SupportScreen;