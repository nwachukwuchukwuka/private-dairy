import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PromptPack, promptPacksData } from '@/constants/constants';
const getPromptPackById = (id: string | undefined): PromptPack | undefined => {
    if (!id) return undefined;
    return promptPacksData.find(pack => pack.id === id);
};

const IconRenderer = ({ family, name, size, color }: { family: string, name: string, size: number, color: string }) => {
    switch (family) {
        case 'Ionicons':
            return <Ionicons name={name as any} size={size} color={color} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name as any} size={size} color={color} />;
        default:
            return null;
    }
};

const PromptPackDetailModal = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    console.log(id);

    const pack = getPromptPackById(Array.isArray(id) ? id[0] : id);

    if (!pack) {
        return (
            <SafeAreaView className="flex-1 bg-black items-center justify-center">
                <Text className="text-white text-lg">Prompt Pack not found.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-black">
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'black' },
                    headerTitle: '',
                    headerLeft: () => null,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text className="text-blue-500 font-semibold text-lg mr-2">Done</Text>
                        </TouchableOpacity>
                    ),
                }}
            />

            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
                <View className="w-20 h-20 bg-white rounded-2xl items-center justify-center mb-4">
                    <IconRenderer
                        family={pack.iconFamily}
                        name={pack.iconName}
                        size={40}
                        color="black"
                    />
                </View>

                <Text className="text-white text-4xl font-semibold">{pack.name}</Text>
                <Text className="text-gray-400 text-lg mt-1">
                    {pack.promptCount} prompts  •  {pack.author}
                </Text>

                <View className="flex-row items-center gap-3 my-4">
                    <TouchableOpacity className="bg-blue-500 flex-1 flex-row items-center justify-center py-3 rounded-full gap-2">
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                        <Text className="text-white font-semibold text-lg">My Prompts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-800 w-12 h-12 items-center justify-center rounded-full">
                        <Feather name="more-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <Text className="text-gray-300 text-lg leading-7 mb-6">{pack.description}</Text>

                <View className="h-1.5 w-full bg-gray-800 rounded-full mb-3">
                    <View className="h-1.5 w-1/4 bg-blue-500 rounded-full" />
                </View>
                <View className="flex-row justify-between mb-4">
                    <Text className="text-gray-400 text-sm">1 of {pack.promptCount}</Text>
                </View>
                <View className="flex-row bg-gray-900 rounded-full p-1 mb-6">
                    <TouchableOpacity className="flex-1 bg-gray-700 rounded-full py-2">
                        <Text className="text-white text-center font-semibold">Open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 rounded-full py-2">
                        <Text className="text-gray-400 text-center font-semibold">Answered</Text>
                    </TouchableOpacity>
                </View>

                <View className="gap-4">
                    {pack.prompts.map((prompt, index) => (
                        <View key={index} className="border-b border-gray-800 pb-4">
                            <Text className="text-white text-xl text-center font-semibold leading-8">{prompt}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PromptPackDetailModal;