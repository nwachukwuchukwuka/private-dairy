import { settingsData, SettingsItem } from '@/constants/constants';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IconRenderer = ({ family, name, size, color }: { family: string, name: string, size: number, color: string }) => {
    switch (family) {
        case 'Ionicons': return <Ionicons name={name as any} size={size} color={color} />;
        case 'Feather': return <Feather name={name as any} size={size} color={color} />;
        case 'MaterialCommunityIcons': return <MaterialCommunityIcons name={name as any} size={size} color={color} />;
        default: return null;
    }
};

const SettingsScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['top']}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#1C1C1E' },
                    headerTitle: () => (
                        <Text className="text-white font-semibold text-lg">Settings</Text>
                    ),
                    headerLeft: () => null,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text className="text-blue-500 font-semibold text-lg">Done</Text>
                        </TouchableOpacity>
                    ),
                }}
            />

            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} className="bg-[#1C1C1E]">
                <View className="p-4">
                    <TouchableOpacity className="flex-row items-center mb-4">
                        <View className="w-16 h-16 bg-gray-700 rounded-full items-center justify-center mr-4">
                            <Ionicons name="person-outline" size={32} color="white" />
                        </View>
                        <Text className="text-white text-xl font-semibold">Sign In</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-between items-center py-2 border-b border-t border-gray-700">
                        <Text className="text-white text-lg">Account Status</Text>
                        <Text className="text-gray-400 text-lg">Basic</Text>
                    </View>

                    <TouchableOpacity className="bg-indigo-500 p-4 rounded-xl flex-row items-center gap-4 mt-4">
                        <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                            <Ionicons name="star" size={24} color="indigo" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white font-semibold text-lg">Get Day One Premium</Text>
                            <Text className="text-indigo-200 mt-1">Encrypted Sync, backup, unlimited photos, Mac App, and much more...</Text>
                        </View>
                    </TouchableOpacity>
                    <Text className="text-gray-500 text-sm text-center mt-4 px-4">
                        Privacy, security, reliability — Day One was built from the ground up to safeguard your memories.
                    </Text>
                </View>

                {settingsData.map((section, sectionIndex) => (
                    <View key={sectionIndex} className="mx-4 mb-8">
                        <View className="bg-gray-800 rounded-xl">
                            {section.map((item: SettingsItem, itemIndex) => (
                                <TouchableOpacity key={item.title} className="flex-row items-center p-3">
                                    <View className="w-8 items-center">
                                        <IconRenderer family={item.iconFamily} name={item.iconName} size={24} color="white" />
                                    </View>
                                    <Text className="text-white text-lg ml-3 flex-1">{item.title}</Text>
                                    {item.value && (
                                        <Text className="text-gray-400 text-lg mr-2">{item.value}</Text>
                                    )}
                                    <Ionicons name="chevron-forward" size={20} color="gray" />
                                </TouchableOpacity>
                            ))}
                        </View>
                        {section[0].title === 'Sync' && (
                            <Text className="text-gray-500 text-sm mt-2 px-2">
                                Not signed in. Your data will begin syncing once you sign in.
                                <Text className="text-blue-500"> Sign In</Text>
                            </Text>
                        )}
                    </View>
                ))}

                <View className="items-center justify-center mt-8">
                    <View className="w-16 h-16 bg-gray-800 items-center justify-center rounded-2xl mb-4">
                        <Feather name="bookmark" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-2xl font-light tracking-[8px]">DAY ONE</Text>
                    <Text className="text-gray-600 text-sm tracking-[4px]">JOURNAL</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingsScreen;