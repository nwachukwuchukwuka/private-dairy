import CustomKeyboardToolbar from '@/components/CustomKeyboardToolbar';
import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
    Alert,
    Image,
    InputAccessoryView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { SafeAreaView } from 'react-native-safe-area-context';


const MenuRow = ({ text, iconName, isDestructive = false, onPress }: { text: string; iconName: any; isDestructive?: boolean, onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between">
        <Text className={`${isDestructive ? 'text-red-500' : 'text-white'} text-base`}>{text}</Text>
        <Ionicons name={iconName} size={22} color={isDestructive ? '#EF4444' : 'white'} />
    </TouchableOpacity>
);

const EditEntryScreen = () => {
    const router = useRouter();
    const { entryId } = useLocalSearchParams();
    const { entries, activeJournal, updateEntry, deleteEntry } = useAppContext();

    const entryToEdit = useMemo(() => entries.find(e => e.id === entryId), [entries, entryId]);

    const [entryText, setEntryText] = useState(entryToEdit?.title || '');
    const [imageUri, setImageUri] = useState<string | null>(entryToEdit?.imageUri || null);

    const inputAccessoryViewID = 'editEntryInputAccessory';

    const handleSavePress = () => {
        if (!entryToEdit) return;

        const updatedData = {
            title: entryText.trim(),
            imageUri: imageUri || undefined,
        };

        updateEntry(entryToEdit.id, updatedData);
        router.back();
    };

    // const handleDeletePress = () => {
    //     Alert.alert("Delete Entry", "Are you sure you want to delete this entry?", [
    //         { text: "Cancel", style: "cancel" },
    //         {
    //             text: "Delete", style: "destructive", onPress: () => {
    //                 if (entryToEdit) {
    //                     deleteEntry(entryToEdit.id);
    //                 }
    //                 router.back();
    //             }
    //         },
    //     ]);
    // };

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


    if (!entryToEdit) {
        return <View className="flex-1 bg-black justify-center items-center">
            <Text className="text-white">Entry not found.</Text>
        </View>;
    }

    return (
        <SafeAreaView className="flex-1 bg-black" edges={['top']}>
            <View className="flex-1">
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
                        <TouchableOpacity onPress={handleSavePress}>
                            <Text className="text-black font-semibold text-lg">Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView className="flex-1 px-4 pt-2">
                    {entryToEdit.promptText && (
                        <View className='p-2 rounded-lg bg-gray-800 mt-4 mb-2 self-start'>
                            <Text className='text-white text-sm'>{entryToEdit.promptText.toUpperCase()}</Text>
                        </View>
                    )}
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
                        className="text-white text-lg"
                        multiline autoFocus placeholder="" placeholderTextColor="gray"
                        style={{ textAlignVertical: 'top', minHeight: 200 }}
                        value={entryText} onChangeText={setEntryText}
                        inputAccessoryViewID={inputAccessoryViewID}
                    />
                </ScrollView>
            </View>

            {Platform.OS === 'ios' && (
                <InputAccessoryView nativeID={inputAccessoryViewID}>
                    <CustomKeyboardToolbar onPickImage={pickImage} />
                </InputAccessoryView>
            )}
        </SafeAreaView>
    );
};
export default EditEntryScreen;