import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MediaTab = 'All' | 'Photo' | 'Video' | 'Audio' | 'PDF';
const TABS: MediaTab[] = ['All', 'Photo', 'Video', 'Audio', 'PDF'];

const MediaView = () => {
    const [activeTab, setActiveTab] = useState<MediaTab>('All');

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['bottom']}>
            <View className="flex-row items-center justify-between p-1.5 border-b border-gray-800">
                {TABS.map((tab, index) => {
                    const isActive = activeTab === tab;

                    return (
                        <React.Fragment key={tab}>
                            <TouchableOpacity
                                onPress={() => setActiveTab(tab)}
                                className={`py-1 px-4 rounded-lg ${isActive ? 'bg-gray-700' : ''}`}
                            >
                                <Text
                                    className={`text-base ${isActive ? 'text-white' : 'text-gray-400'}`}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>

                            {index < TABS.length - 1 && (
                                <View className="w-px h-5 bg-gray-700" />
                            )}
                        </React.Fragment>
                    );
                })}
            </View>

            <View className="flex-1 justify-center items-center px-8">
                <Text className="text-white font-semibold text-xl mb-2">
                    Media Timeline
                </Text>
                <Text className="text-gray-400 text-lg text-center leading-7">
                    Photo, video, audio, and PDF files will appear here when added to your journal
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default MediaView;