import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const quickStartData = [
    { id: 'day-view', name: 'Day View', icon: 'sunny-outline', isPremium: false },
    { id: 'templates', name: 'Templates', icon: 'create-outline', isPremium: false },
    { id: 'audio', name: 'Audio', icon: 'mic-outline', isPremium: true },
    { id: 'prompts', name: 'Prompts', icon: 'chatbubble-ellipses-outline', isPremium: false },
    { id: 'photos', name: 'Photos', icon: 'images-outline', isPremium: false },
    { id: 'camera', name: 'Camera', icon: 'camera-outline', isPremium: false },
    { id: 'video', name: 'Video', icon: 'videocam-outline', isPremium: true },
    { id: 'draw', name: 'Draw', icon: 'pencil-outline', isPremium: true },
    { id: 'scan-pdf', name: 'Scan to PDF', icon: 'document-outline', isPremium: true },
    { id: 'scan-text', name: 'Scan Text', icon: 'scan-outline', isPremium: false },
    { id: 'file', name: 'File', icon: 'folder-outline', isPremium: false },
];

const QuickStartScreen = () => {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);

    const ListItem = ({ item }: { item: typeof quickStartData[0] }) => (
        <TouchableOpacity className="flex-row items-center py-3">
            <View className="w-10">
                <Ionicons name={item.icon as any} size={24} color="white" />
            </View>
            <Text className="text-white text-lg flex-1">
                {item.name}
                {item.isPremium && <Text className="text-white"> (Premium)</Text>}
            </Text>
            {editMode && (
                <Ionicons name="menu" size={24} color="gray" />
            )}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row items-center justify-between p-4">
                <Text className="text-white text-2xl font-bold">Quick Start</Text>
                <View className="flex-row items-center gap-4">
                    <TouchableOpacity
                        onPress={() => setEditMode(!editMode)}
                        className={`px-4 py-1 rounded-full ${editMode ? '' : 'bg-[#3A3A3C]'}`}
                    >
                        <Text className={` ${editMode ? 'text-blue-500 text-lg' : 'text-white'}`}>
                            {editMode ? 'Done' : 'Edit'}
                        </Text>
                    </TouchableOpacity>
                    {!editMode && (
                        <TouchableOpacity onPress={() => router.back()} className="bg-[#3A3A3C] w-8 h-8 rounded-full items-center justify-center">
                            <Ionicons name="close" size={20} color="white" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <FlatList
                data={quickStartData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListItem item={item} />}
                ItemSeparatorComponent={() => <View className="h-px bg-[#3A3A3C] ml-10" />}
                contentContainerClassName="px-4"
            />
        </SafeAreaView>
    );
};

export default QuickStartScreen;