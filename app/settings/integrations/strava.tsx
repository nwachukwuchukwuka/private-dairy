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

const StravaScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black justify-between">
            <View>
                <View className="flex-row items-center p-3 relative">
                    <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                        <Ionicons name="chevron-back" size={28} color="white" />
                    </TouchableOpacity>
                    <View className="absolute left-0 right-0 items-center">
                        <Text className="text-white text-lg font-bold">Strava</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.back()} className="ml-auto"><Text className="text-blue-500 font-bold text-lg">Done</Text></TouchableOpacity>
                </View>
                <ScrollView contentContainerClassName="p-4 items-center">
                    <View className="py-4">
                        <Ionicons name="flash-outline" size={30} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base text-center px-2 mb-8">
                        Upgrade to Day One Premium to connect your Strava account to Day One and never miss capturing your fitness achievements and milestones.
                    </Text>
                    <View className="bg-[#1C1C1E] rounded-2xl w-full">
                        <FeatureRow icon="sync-outline" title="Smart Sync" subtitle="Automatically syncs your entire Strava activity history into Day One." />
                        <FeatureRow icon="document-text-outline" title="Activity Details" subtitle="Each entry includes the activity's title, description, and private notes." />
                        <FeatureRow icon="partly-sunny-outline" title="Metadata Capture" subtitle="Captures location and weather details for each workout." />
                        <FeatureRow icon="map-outline" title="Activity Map" subtitle="Displays a rich map of your route or activity." />
                        <FeatureRow icon="bar-chart-outline" title="Media and Stats" subtitle="Includes all media and activity stats." />
                    </View>
                </ScrollView>
            </View>
            <View className="p-4">
                <TouchableOpacity className="bg-white w-full py-3 rounded-full items-center" onPress={() => router.push('/more/premium')}>
                    <Text className="text-black font-bold text-lg">Upgrade to Premium</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default StravaScreen;