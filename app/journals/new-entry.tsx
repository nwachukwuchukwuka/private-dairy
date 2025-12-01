import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ToolbarButton = ({ icon, name, onPress }: { icon: React.ReactNode; name: string; onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="items-center gap-1">
        {icon}
        <Text className="text-white text-xs">{name}</Text>
    </TouchableOpacity>
);

const NewEntryScreen = () => {
    const router = useRouter();

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
            console.log("file selected")
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-[#D1B49A]" >
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
                                            backgroundColor: '#3C3C3C',
                                            borderRadius: 12,
                                            marginTop: 30,
                                            padding: 4,
                                        },
                                    }}
                                >
                                    <MenuOption onSelect={() => router.push('/import-export/import-export-screen')}>
                                        <View className="flex-row items-center justify-between px-2">
                                            <Text className="text-white text-lg">Export</Text>
                                            <Feather name="share" size={20} color="white" />
                                        </View>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                            <TouchableOpacity onPress={() => router.back()}>
                                <Text className="text-black font-semibold text-lg">Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='bg-black flex-1'>
                        <View className="flex-1 px-4 pt-2">
                            <View className="flex-row items-center gap-2 mb-4">
                                <TouchableOpacity onPress={() => router.push('/new-entry-editor/move-journal')}>
                                    <Text className="text-gray-400">Journal</Text>
                                </TouchableOpacity>
                                <Text className="text-gray-600">•</Text>
                                <TouchableOpacity onPress={() => router.push('/new-entry-editor/location')}>
                                    <Text className="text-gray-400">Abakaliki</Text>
                                </TouchableOpacity>
                                <Ionicons name="sunny" size={14} color="gray" />
                                <Text className="text-gray-400">89°F</Text>
                            </View>

                            <TextInput
                                className="text-white text-lg flex-1"
                                multiline
                                autoFocus
                                placeholder="What's on your mind?"
                                placeholderTextColor="gray"
                                style={{ textAlignVertical: 'top' }}
                            />
                        </View>

                        <View className="px-4 py-2 border-t border-gray-800">
                            <View className="flex-row justify-around items-center bg-gray-800 p-2 rounded-xl">
                                <ToolbarButton icon={<Ionicons name="images-outline" size={24} color="white" />} name="Photos" onPress={pickImage} />
                                <ToolbarButton icon={<Feather name="edit" size={24} color="white" />} name="Templates" />
                                <ToolbarButton icon={<Ionicons name="bulb-outline" size={24} color="white" />} name="Suggestions" onPress={() => router.push('/more/suggestions')} />
                                <ToolbarButton icon={<Ionicons name="mic-outline" size={24} color="white" />} name="Audio" onPress={() => router.push('/more/premium')} />
                            </View>
                            <TouchableOpacity className="flex-row items-center justify-center pt-3 pb-1">
                                <Ionicons name="chevron-down" size={16} color="gray" />
                                <Text className="text-gray-400 ml-1">More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </SafeAreaView >
        </SafeAreaProvider >
    );
};

export default NewEntryScreen;