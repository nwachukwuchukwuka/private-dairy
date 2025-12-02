import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationRow = ({ title, subtitle, distance }: { title: string; subtitle: string; distance: string }) => (
    <View className="py-2 border-b border-gray-800">
        <View className="flex-row justify-between">
            <Text className="text-white font-semibold">{title}</Text>
            <Text className="text-gray-400">{distance}</Text>
        </View>
        <Text className="text-gray-400">{subtitle}</Text>
    </View>
);

const LocationScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['top']}>
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="z-10">
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Location</Text>
                </View>
            </View>

            <View className="h-48 bg-gray-700 items-center justify-center">
                <Text className="text-white">(Map Component)</Text>
            </View>
            <View className="p-4">
                <TextInput placeholder="Search places or addresses" placeholderTextColor="gray" className="bg-gray-800 text-white p-3 rounded-lg mb-4" />
                <TouchableOpacity>
                    <Text className="text-blue-500 text-lg">Add custom place name</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="px-4">
                <Text className="text-gray-400 uppercase font-bold mb-2">Nearby</Text>
                <LocationRow title="Olives Green Consult" subtitle="Olives Green Consult, Abakaliki, Ebonyi, Nigeria" distance="200 feet" />

                <Text className="text-gray-400 uppercase font-bold mt-6 mb-2">Nearby Locations in My Journal</Text>
                <LocationRow title="Abakaliki" subtitle="Abakaliki, Abakaliki, Ebonyi, Nigeria" distance="20 feet" />

                <Text className="text-gray-400 uppercase font-bold mt-6 mb-2">Current Location</Text>
                <LocationRow title="Abakaliki" subtitle="Abakaliki, Abakaliki, Ebonyi, Nigeria" distance="" />
            </ScrollView>

        </SafeAreaView>
    );
};

export default LocationScreen;