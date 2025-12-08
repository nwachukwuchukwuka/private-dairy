import { useAppContext } from '@/context/context';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MediaTab = 'All' | 'Photo' | 'Video' | 'Audio' | 'PDF';
const TABS: MediaTab[] = ['All', 'Photo', 'Video', 'Audio', 'PDF'];

const MediaView = () => {
    const [activeTab, setActiveTab] = useState<MediaTab>('All');
    const { entries, activeJournal } = useAppContext();

    // const filteredMedia = useMemo(() => {
    //     if (activeTab === 'All' || activeTab === 'Photo') {
    //         return entries.filter(entry => !!entry.imageUri);
    //     }
    //     return [];
    // }, [entries, activeTab]);

    const filteredMedia = useMemo(() => {
        // Guard clause: If there's no active journal, there's no media to show.
        if (!activeJournal) {
            return [];
        }

        if (activeTab === 'All' || activeTab === 'Photo') {
            // --- CHANGE 2: Add a filter to only include entries from the active journal ---
            return entries.filter(entry =>
                entry.journalId === activeJournal.id && !!entry.imageUri
            );
        }

        // For other tabs, return an empty array to show the placeholder
        return [];
        // --- CHANGE 3: Add 'activeJournal' to the dependency array ---
        // This ensures the list is re-calculated when the user switches journals.
    }, [entries, activeTab, activeJournal]);


    const Placeholder = () => (
        <View className="flex-1 justify-center items-center px-8">
            <Text className="text-white font-semibold text-xl mb-2">
                {activeJournal ? `"${activeJournal.name}"` : 'Media Timeline'}
            </Text>
            <Text className="text-gray-400 text-lg text-center leading-7">
                {activeTab === 'Photo' || activeTab === 'All'
                    ? `Photos added to this journal will appear here.`
                    : `Video, audio, and PDF files will appear here when added.`
                }
            </Text>
        </View>
    );


    // const Placeholder = () => (
    //     <View className="flex-1 justify-center items-center px-8">
    //         <Text className="text-white font-semibold text-xl mb-2">
    //             Media Timeline
    //         </Text>
    //         <Text className="text-gray-400 text-lg text-center leading-7">
    //             Photo, video, audio, and PDF files will appear here when added to your journal
    //         </Text>
    //     </View>
    // );

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

            {filteredMedia.length === 0 ? (
                <Placeholder />
            ) : (
                <FlatList
                    data={filteredMedia}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="w-1/2 p-0.5">
                            <Image
                                source={{ uri: item.imageUri }}
                                className="w-full aspect-square"
                            />
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default MediaView;