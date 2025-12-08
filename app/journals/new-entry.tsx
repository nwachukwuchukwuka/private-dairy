import TemplateBottomSheet from '@/components/TemplateBottomSheet';
import { useAppContext } from '@/context/context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';
import { SafeAreaView } from 'react-native-safe-area-context';

const ToolbarButton = ({ icon, name, onPress }: { icon: React.ReactNode; name: string; onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="items-center gap-1">
        {icon}
        <Text className="text-white text-xs">{name}</Text>
    </TouchableOpacity>
);


const MenuRow = ({ text, iconName, isDestructive = false, onPress }: { text: string; iconName: any; isDestructive?: boolean, onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between">
        <Text className={`${isDestructive ? 'text-red-500' : 'text-white'} text-base`}>{text}</Text>
        <Ionicons name={iconName} size={22} color={isDestructive ? '#EF4444' : 'white'} />
    </TouchableOpacity>
);

const MenuDivider = () => <View className="h-px bg-gray-600 my-1" />;

const NewEntryScreen = () => {
    const router = useRouter();
    const { addEntry, activeJournal } = useAppContext();

    const [entryText, setEntryText] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Permission needed",
                "Sorry, we need camera roll permissions to make this work!"
            );
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [9, 16],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handleProgressBarPress = () => {
        bottomSheetModalRef.current?.present();
    };

    const handleDonePress = () => {
        if (!activeJournal) {
            Alert.alert("No Active Journal", "Please select a journal before saving an entry.");
            return;
        }

        if (entryText.trim().length === 0 && !imageUri) {
            router.back();
            return;
        }

        const newEntry = {
            journalId: activeJournal.id,
            title: entryText,
            metadata: "Just now · Abakaliki, Abakaliki · 89°F",
            date: new Date(),
            imageUri: imageUri || undefined,
        };

        addEntry(newEntry);
        router.back();
    };

    // const handleDonePress = () => {
    //     if (entryText.trim().length === 0) {
    //         router.back();
    //         return;
    //     }

    //     const newEntry = {
    //         title: entryText,
    //         metadata: "Just now · Abakaliki, Abakaliki · 89°F",
    //         date: new Date(),
    //         imageUri: imageUri || undefined,
    //     };

    //     addEntry(newEntry);
    //     router.back();
    // };


    return (
        // <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-[#D1B49A]" edges={['top']}>
            <BottomSheetModalProvider>
                <MenuProvider>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        className="flex-1"
                    >
                        <View className="bg-[#D1B49A] p-3 flex-row justify-between items-center">
                            <TouchableOpacity onPress={() => router.push('/new-entry-editor/edit-date')}>
                                <Text className="text-black font-semibold">Mon, Dec 1, 2025  11:10 AM</Text>
                            </TouchableOpacity>
                            <View className="flex-row items-center gap-4">
                                <Menu>
                                    <MenuTrigger>
                                        <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="black" />
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
                                        <ScrollView>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Tag" iconName="pricetag-outline" />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Move to..." iconName="folder-outline" onPress={() => router.push('/new-entry-editor/move-journal')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Copy to..." iconName="copy-outline" onPress={() => router.push('/new-entry-editor/move-journal')} />
                                            </MenuOption>

                                            {/* <MenuDivider /> */}

                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Move to Trash" iconName="trash-outline" isDestructive={true} />
                                            </MenuOption>


                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Entry Info" iconName="information-circle-outline" onPress={() => router.push('/new-entry-editor/entry-info')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Version History" iconName="time-outline" onPress={() => router.push('/new-entry-editor/version-history')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Export" iconName="share-outline" />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="View PDF" iconName="document-text-outline" onPress={() => router.push('/new-entry-editor/pdf-preview')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{ optionWrapper: { paddingHorizontal: 15, paddingVertical: 10 } }}>
                                                <MenuRow text="View: Dec 2, 2025" iconName="calendar-outline" onPress={() => router.push('/new-entry-editor/this-day-view')} />
                                            </MenuOption>
                                        </ScrollView>

                                    </MenuOptions>
                                </Menu>
                                {/* <TouchableOpacity onPress={() => router.back()}> */}
                                <TouchableOpacity onPress={handleDonePress}>
                                    <Text className="text-black font-semibold text-lg">Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className='bg-black flex-1'>
                            <View className="flex-1 px-4 pt-2">
                                <View className="flex-row items-center gap-2 mb-4">
                                    <TouchableOpacity onPress={() => router.push('/new-entry-editor/move-journal')}>
                                        {/* <Text className="text-gray-400">Journal</Text> */}
                                        {activeJournal?.name || 'No Journal'}
                                    </TouchableOpacity>
                                    <Text className="text-gray-600">•</Text>
                                    <TouchableOpacity onPress={() => router.push('/new-entry-editor/location')}>
                                        <Text className="text-gray-400">Abakaliki</Text>
                                    </TouchableOpacity>
                                    <Ionicons name="sunny" size={14} color="gray" />
                                    <Text className="text-gray-400">89°F</Text>
                                </View>

                                {imageUri && (
                                    <View className="my-4 relative">
                                        <Image source={{ uri: imageUri }} className="w-full h-48 rounded-lg" />
                                        <TouchableOpacity
                                            onPress={() => setImageUri(null)}
                                            className="absolute top-2 right-2 bg-black/50 p-1 rounded-full"
                                        >
                                            <Ionicons name="close" size={20} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                )}

                                <TextInput
                                    className="text-white text-lg flex-1"
                                    multiline
                                    autoFocus
                                    placeholder="What's on your mind?"
                                    placeholderTextColor="gray"
                                    style={{ textAlignVertical: 'top' }}
                                    value={entryText}
                                    onChangeText={setEntryText}
                                />
                            </View>

                            <View className="px-4 py-2 mb-20 border-t border-gray-800">
                                <View className="flex-row justify-around items-center bg-gray-800 p-2 rounded-xl">
                                    <ToolbarButton icon={<Ionicons name="images-outline" size={24} color="white" />} name="Photos" onPress={pickImage} />
                                    <ToolbarButton icon={<Feather name="edit" size={24} color="white" />} name="Templates" onPress={handleProgressBarPress} />
                                    <ToolbarButton icon={<Ionicons name="bulb-outline" size={24} color="white" />} name="Suggestions" onPress={() => router.push('/more/suggestions')} />
                                    <ToolbarButton icon={<Ionicons name="mic-outline" size={24} color="white" />} name="Audio" onPress={() => router.push('/more/premium')} />
                                </View>

                                <Menu>
                                    <MenuTrigger>
                                        <View className="flex-row items-center justify-center pt-3 pb-1">
                                            <Ionicons name="chevron-down" size={16} color="gray" />
                                            <Text className="text-gray-400 ml-1">More</Text>
                                        </View>
                                    </MenuTrigger>
                                    <MenuOptions
                                        customStyles={{
                                            optionsContainer: {
                                                backgroundColor: "#2C2C2E",
                                                borderRadius: 12,
                                                marginTop: -100,
                                                width: 220,
                                                maxHeight: 320,
                                            },
                                            optionsWrapper: {
                                                paddingVertical: 5,
                                            }
                                        }}
                                    >
                                        <ScrollView>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Tag" iconName="pricetag-outline" />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Move to..." iconName="folder-outline" onPress={() => router.push('/new-entry-editor/move-journal')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Copy to..." iconName="copy-outline" onPress={() => router.push('/new-entry-editor/move-journal')} />
                                            </MenuOption>

                                            {/* <MenuDivider /> */}

                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Move to Trash" iconName="trash-outline" isDestructive={true} />
                                            </MenuOption>


                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Entry Info" iconName="information-circle-outline" onPress={() => router.push('/new-entry-editor/entry-info')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Version History" iconName="time-outline" onPress={() => router.push('/new-entry-editor/version-history')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="Export" iconName="share-outline" />
                                            </MenuOption>
                                            <MenuOption customStyles={{
                                                optionWrapper: {
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: "#454a52",
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 15,
                                                },
                                            }}>
                                                <MenuRow text="View PDF" iconName="document-text-outline" onPress={() => router.push('/new-entry-editor/pdf-preview')} />
                                            </MenuOption>
                                            <MenuOption customStyles={{ optionWrapper: { paddingHorizontal: 15, paddingVertical: 10 } }}>
                                                <MenuRow text="View: Dec 2, 2025" iconName="calendar-outline" onPress={() => router.push('/new-entry-editor/this-day-view')} />
                                            </MenuOption>
                                        </ScrollView>

                                    </MenuOptions>
                                </Menu>
                            </View>
                        </View>

                    </KeyboardAvoidingView>
                </MenuProvider>

                <TemplateBottomSheet ref={bottomSheetModalRef} />
            </BottomSheetModalProvider>
        </SafeAreaView >
        // </SafeAreaProvider >
    );
};

export default NewEntryScreen;