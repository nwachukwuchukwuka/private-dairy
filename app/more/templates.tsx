import GalleryTab from '@/components/templates/GalleryTab';
import MyTemplatesTab from '@/components/templates/MyTemplatesTab';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type TemplateTab = 'Gallery' | 'My Templates';

const TemplatesScreen = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TemplateTab>('Gallery');

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center px-4 pt-2">
                <Text className="text-white text-2xl font-bold">Templates</Text>
                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
                    <Ionicons name="checkmark" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View className="px-4 my-6">
                <View className="flex-row bg-[#1C1C1E] rounded-lg p-1">
                    <TouchableOpacity
                        onPress={() => setActiveTab('Gallery')}
                        className={`flex-1 rounded-md py-2 items-center justify-center ${activeTab === 'Gallery' ? 'bg-[#3A3A3C]' : ''}`}
                    >
                        <Text className="text-white font-semibold">Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('My Templates')}
                        className={`flex-1 rounded-md py-2 items-center justify-center ${activeTab === 'My Templates' ? 'bg-[#3A3A3C]' : ''}`}
                    >
                        <Text className="text-white font-semibold">My Templates</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {activeTab === 'Gallery' ? <GalleryTab /> : <MyTemplatesTab />}
        </SafeAreaView>
    );
};

export default TemplatesScreen;