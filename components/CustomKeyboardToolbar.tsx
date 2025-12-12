import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';

interface CustomKeyboardToolbarProps {
    onPickImage: () => void;
}

const CustomKeyboardToolbar: React.FC<CustomKeyboardToolbarProps> = ({ onPickImage }) => {
    return (
        <View className=" p-2">
            <View className="flex-row justify-between items-center mb-2 px-2">
                <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                    <Ionicons name="chevron-down" size={24} color="white" />
                </TouchableOpacity>
                <View className="flex-row items-center gap-6">
                    <TouchableOpacity onPress={onPickImage}>
                        <Ionicons name="image-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="link-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="text" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default CustomKeyboardToolbar;