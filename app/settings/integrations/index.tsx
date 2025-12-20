import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppRow = ({ name, icon, onPress }: { name: string, icon: React.ReactNode, onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center p-4 border-b border-gray-700 last:border-b-0">
        {icon}
        <Text className="text-white text-lg flex-1 ml-4">{name}</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
);

const IntegrationsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Integrations</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-16 h-16 bg-gray-700 rounded-2xl items-center justify-center mb-4">
                        <Ionicons name="flash-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Integrations allow you to connect to Day One with other apps or services. This means your journal can automatically pull in data, helping you streamline your workflow, capture more insights, or build better habits.
                    </Text>
                </View>
                <Text className="text-gray-400 text-lg mb-2 ml-4">APPS</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    <AppRow
                        name="IFTTT"
                        icon={
                            <View className="w-8 h-8 rounded-md bg-black items-center justify-center">
                                <Ionicons name="flash-outline" size={20} color="white" />
                            </View>
                        }
                        onPress={() => router.push('/settings/integrations/ifttt')}
                    />
                    <AppRow
                        name="Strava"
                        icon={
                            <View className="w-8 h-8 rounded-md bg-orange-500 items-center justify-center">
                                <Ionicons name="flash-outline" size={20} color="white" />
                            </View>
                        }
                        onPress={() => router.push('/settings/integrations/strava')}
                    />
                    <AppRow
                        name="Zapier"
                        icon={
                            <View className="w-8 h-8 rounded-md bg-orange-500 items-center justify-center">
                                <Ionicons name="flash-outline" size={20} color="white" />
                            </View>
                        }
                        onPress={() => router.push('/settings/integrations/zapier')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default IntegrationsScreen;