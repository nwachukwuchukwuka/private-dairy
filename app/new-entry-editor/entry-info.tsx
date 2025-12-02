import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InfoRow = ({
    icon,
    title,
    subtitle,
    hasChevron = false,
    isDestructive = false
}: {
    icon: any;
    title: string;
    subtitle: string;
    hasChevron?: boolean;
    isDestructive?: boolean;
}) => (
    <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-800">
        <View className="w-8 items-center">
            <Ionicons name={icon} size={24} color={isDestructive ? '#EF4444' : 'gray'} />
        </View>
        <View className="flex-1 ml-4">
            <Text className={`text-lg ${isDestructive ? 'text-red-500' : 'text-white'}`}>{title}</Text>
            {subtitle && <Text className="text-gray-400">{subtitle}</Text>}
        </View>
        {hasChevron && <Ionicons name="chevron-forward" size={20} color="gray" />}
    </TouchableOpacity>
);

const EntryInfoScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['top']}>
            <View className="flex-row justify-end items-center p-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="pb-10">
                <View className="px-4 py-2 border-y border-gray-800">
                    <Text className="text-gray-400">1:28 PM • Abakaliki • 93°F ☀️ • Journal</Text>
                </View>

                <View className="h-40 bg-gray-700 items-center justify-center">
                    <Text className="text-white">(Map Placeholder)</Text>
                    <View className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-md">
                        <Text className="text-white font-bold"> Maps</Text>
                    </View>
                </View>

                <View className="px-4 mt-2">
                    <InfoRow icon="location-outline" title="Abakaliki, Ebonyi, Nigeria" subtitle="Abakaliki" hasChevron />
                    <InfoRow icon="pricetag-outline" title="Tags" subtitle="Add..." hasChevron />
                    <InfoRow icon="book-outline" title="Journal" subtitle="Journal" hasChevron />
                    <InfoRow icon="calendar-outline" title="Date" subtitle="1:28 PM GMT+1, Tue, Dec 2, 2025" hasChevron />
                    <InfoRow icon="time-outline" title="Last Edited" subtitle="1:28 PM GMT+1, Tue, Dec 2, 2025" />
                    <InfoRow icon="sunny-outline" title="Weather" subtitle="93°F Mostly Clear" hasChevron />
                    <InfoRow icon="moon-outline" title="Moon Phase" subtitle=".37, Waxing Gibbous Moon" />
                    <InfoRow icon="analytics-outline" title="Altitude" subtitle="163 ft" />
                    <InfoRow icon="phone-portrait-outline" title="Entry Creation Device" subtitle="Chuks, iPhone, iOS 18.6.2" />
                    <InfoRow icon="heart-outline" title="Favorite" subtitle="Mark as Favorite" />
                    <InfoRow icon="link-outline" title="Entry ID" subtitle="E4F1E8D1BFE24A34B677874FC0CA..." hasChevron />
                    <InfoRow icon="body-outline" title="Activity" subtitle="Stationary" hasChevron />
                    <InfoRow icon="footsteps-outline" title="Step Count" subtitle="408" hasChevron />
                    <InfoRow icon="musical-notes-outline" title="Music" subtitle="Set..." hasChevron />
                </View>

                <View className="px-4 mt-6">
                    <InfoRow icon="calendar-outline" title="On This Day: December 2" subtitle="0 Entries, 0 Photos, 0 Years" hasChevron />
                    <InfoRow icon="calendar-outline" title="This Day: Tuesday, December 2, 2025" subtitle="5 Entries, 0 Photos" hasChevron />
                </View>

                <View className="px-4 mt-6">
                    <InfoRow icon="share-outline" title="Share / Export" subtitle="" hasChevron />
                    <InfoRow icon="document-text-outline" title="View PDF" subtitle="" hasChevron />
                    <InfoRow icon="text-outline" title="View Plain Text" subtitle="" hasChevron />
                </View>

                <View className="px-4 mt-6">
                    <InfoRow icon="trash-outline" title="Move to Trash" subtitle="" isDestructive />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EntryInfoScreen;