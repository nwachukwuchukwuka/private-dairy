import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import JournalMenuModal from '@/components/JournalMenuModal';
import { PromptPack, promptPacksData } from '@/constants/constants';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';



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


const MenuRow = ({ text, iconName, isDestructive = false, onPress }: { text: string; iconName: any; isDestructive?: boolean, onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between">
        <Text className={`${isDestructive ? 'text-red-500' : 'text-white'} text-lg`}>{text}</Text>
        <Ionicons name={iconName} size={22} color={isDestructive ? '#EF4444' : 'white'} />
    </TouchableOpacity>
);


const PromptPackDetailModal = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const pack = getPromptPackById(Array.isArray(id) ? id[0] : id);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handleMorePress = () => {
        bottomSheetModalRef.current?.present();
    };


    if (!pack) {
        return (
            <SafeAreaView className="flex-1 bg-black items-center justify-center">
                <Text className="text-white text-lg">Prompt Pack not found.</Text>
            </SafeAreaView>
        );
    }

    return (
        <BottomSheetModalProvider>
            <MenuProvider>

                <SafeAreaView className="flex-1 bg-black">
                    <View className='flex-row justify-end p-4 pb-1'>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text className="text-blue-500 font-semibold text-lg mr-2">Done</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
                        <View className="w-20 h-20 items-center justify-center mb-6">
                            <IconRenderer
                                family={pack.iconFamily}
                                name={pack.iconName}
                                size={54}
                                color="white"
                            />
                        </View>

                        <Text className="text-white text-4xl font-semibold">{pack.name}</Text>
                        <Text className="text-gray-400 text-lg mt-1">
                            {pack.promptCount} prompts  •  {pack.author}
                        </Text>

                        <View className="flex-row items-center gap-3 my-4">
                            <TouchableOpacity className="bg-blue-500 flex-1 flex-row items-center justify-center py-3 rounded-lg gap-2">
                                <Ionicons name="add-circle-outline" size={24} color="white" />
                                <Text className="text-white font-semibold text-lg">My Prompts</Text>
                            </TouchableOpacity>


                            <Menu>
                                <MenuTrigger>
                                    <View className="bg-[#1C1C1E] w-12 h-12 items-center justify-center rounded-lg" >
                                        <Feather name="more-horizontal" size={24} color="white" />
                                    </View>
                                </MenuTrigger>
                                <MenuOptions
                                    customStyles={{
                                        optionsContainer: {
                                            backgroundColor: "#2C2C2E",
                                            borderRadius: 12,
                                            marginTop: 15,
                                            width: 220,
                                            maxHeight: 320,
                                        },
                                        optionsWrapper: {
                                            paddingVertical: 5,
                                        }
                                    }}
                                >
                                    <MenuOption customStyles={{
                                        optionWrapper: {
                                            borderBottomWidth: 1,
                                            borderBottomColor: "#454a52",
                                            paddingVertical: 10,
                                            paddingHorizontal: 15,
                                        },
                                    }}>
                                        <MenuRow text="Select Journal" iconName="pricetag-outline" onPress={handleMorePress} />
                                    </MenuOption>
                                    <MenuOption customStyles={{
                                        optionWrapper: {

                                            paddingVertical: 10,
                                            paddingHorizontal: 15,
                                        },
                                    }}>
                                        <MenuRow text="Share Prompt Pack" iconName="folder-outline" />
                                    </MenuOption>


                                </MenuOptions>
                            </Menu>
                        </View>

                        <Text className="text-gray-300 text-lg leading-7 mb-6">{pack.description}</Text>
                        <View className='flex-row gap-6 items-center'>
                            <View className="h-1.5 w-[80%] bg-gray-800 rounded-full mb-3">
                                <View className="h-1.5 w-1/4 bg-blue-500 rounded-full" />
                            </View>
                            <View className="flex-row justify-between mb-4">
                                <Text className="text-gray-400 text-sm">1 of {pack.promptCount}</Text>
                            </View>
                        </View>

                        <View className="flex-row bg-[#1C1C1E] rounded-lg p-1 mb-6">
                            <TouchableOpacity className="flex-1 bg-[#3A3A3C] rounded-lg py-2">
                                <Text className="text-white text-center font-semibold">Open</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1  rounded-lg py-2">
                                <Text className="text-gray-400 text-center font-semibold">Answered</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="gap-8">
                            {pack.prompts.map((prompt, index) => (
                                <View key={index} className="border-b border-gray-800 pb-8">
                                    <Text className="text-white text-xl text-center font-semibold leading-8">{prompt}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <JournalMenuModal ref={bottomSheetModalRef} />
            </MenuProvider>
        </BottomSheetModalProvider>

    );
};

export default PromptPackDetailModal;