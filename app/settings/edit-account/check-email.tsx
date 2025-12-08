import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CheckEmailScreen = () => {
    const router = useRouter();

    const handleClose = () => {
        router.dismissAll();
    };

    return (
        <View className="flex-1 justify-center items-center bg-black/80">
            <View className="bg-[#1C1C1E] rounded-xl p-8 items-center w-80">
                <Ionicons name="mail-outline" size={64} color="#34C759" />
                <Text className="text-white text-2xl font-bold mt-4">Check your email</Text>
                <Text className="text-gray-400 text-base mt-2">nwachukwuadinoyi@gmail.com</Text>
                <Text className="text-blue-400 text-base text-center mt-4">To reset your password, follow the instructions in the email.</Text>

                <TouchableOpacity className="bg-blue-500 w-full py-3 rounded-lg items-center mt-8">
                    <Text className="text-white text-base font-bold">Open the Mail app</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClose} className="w-full py-3 rounded-lg items-center mt-2">
                    <Text className="text-blue-500 text-base">OK, thanks!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CheckEmailScreen;