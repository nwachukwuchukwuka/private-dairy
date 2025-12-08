import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Row = ({ label, value }: { label: string, value: string }) => (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <Text className="text-gray-400 text-lg">{value}</Text>
    </View>
);

const NewReminderScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 text-lg">Cancel</Text></TouchableOpacity>
                <Text className="text-white font-bold text-lg">Reminder</Text>
                <TouchableOpacity><Text className="text-blue-500 font-bold text-lg">Save</Text></TouchableOpacity>
            </View>
            <View className="p-4">
                <View className="bg-gray-800 rounded-lg">
                    <Row label="Repeat" value="Daily" />
                    <Row label="Time" value="11:35 AM" />
                    <Row label="Journal" value="(Optional)" />
                    <Row label="Tags" value="(Optional)" />
                    <Row label="Template" value="(Optional)" />
                </View>
                <TextInput placeholder="Notification Message (Optional)" placeholderTextColor="gray" className="bg-gray-800 rounded-lg p-4 mt-4 text-white text-lg" />

                <Text className="text-gray-400 text-xs font-bold my-4 ml-4">PREVIEW</Text>
                <View className="bg-gray-800 rounded-xl p-3 flex-row items-start">
                    <View className="w-10 h-10 bg-blue-300 rounded-lg mr-3 items-center justify-center"><Text>_</Text></View>
                    <View className="flex-1">
                        <View className="flex-row justify-between"><Text className="text-white font-semibold">Day One</Text><Text className="text-gray-400 text-sm">now</Text></View>
                        <Text className="text-white font-bold">Daily Reminder</Text>
                        <Text className="text-white">Time to write in your journal</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default NewReminderScreen;