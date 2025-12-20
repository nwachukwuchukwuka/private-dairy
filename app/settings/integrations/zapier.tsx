import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FeatureRow = ({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
    <View className="flex-row items-start p-3 border-b border-gray-700 last:border-b-0">
        <Ionicons name={icon} size={24} color="gray" className="mr-4 mt-1" />
        <View className="flex-1">
            <Text className="text-white text-lg">{title}</Text>
            <Text className="text-gray-400">{subtitle}</Text>
        </View>
    </View>
);

const ZapierScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black justify-between">
            <View>
                <View className="flex-row items-center p-3 relative">
                    <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                        <Ionicons name="chevron-back" size={28} color="white" />
                    </TouchableOpacity>
                    <View className="absolute left-0 right-0 items-center">
                        <Text className="text-white text-lg font-bold">Zapier</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.back()} className="ml-auto"><Text className="text-blue-500 font-bold text-lg">Done</Text></TouchableOpacity>
                </View>
                <ScrollView contentContainerClassName="p-4 items-center">
                    <View className="p-4 bg-orange-500 rounded-2xl my-4 ">
                        <Ionicons name="flash-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base text-center px-6 mb-8">
                        Connect Zapier to automate your journaling with 6,000+ apps and never miss capturing important moments.
                    </Text>
                    <View className="bg-[#1C1C1E] rounded-lg w-full">
                        <FeatureRow icon="flash-outline" title="Smart Automation" subtitle="Automatically create entries from emails, tasks, fitness goals, and more." />
                        <FeatureRow icon="git-network-outline" title="Multi-App Workflows" subtitle="Connect multiple apps together to build powerful journaling automations." />
                        <FeatureRow icon="sparkles-outline" title="Trigger Options" subtitle="Create entries based on schedules, events, or custom conditions." />
                        <FeatureRow icon="color-filter-outline" title="Data Enrichment" subtitle="Automatically add weather, location, and metadata to your entries." />
                        <FeatureRow icon="git-compare-outline" title="6,000+ Integrations" subtitle="Connect with Gmail, Slack, Todoist, Instagram, and thousands more." />
                    </View>
                </ScrollView>
            </View>
            <View className="p-4">
                <TouchableOpacity className="bg-orange-500 w-full py-3 rounded-full items-center" onPress={() => router.push('/more/premium')}>
                    <Text className="text-white font-bold text-lg">UPGRADE TO PREMIUM</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default ZapierScreen;