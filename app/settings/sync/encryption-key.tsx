import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const EncryptionKeyScreen = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-[#1C1C1E] p-4">
            <View className="flex-row justify-end items-center mb-8 pt-4">
                <Text className="text-white font-bold text-lg absolute w-full text-center">Encryption Key</Text>
                <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 font-bold text-lg">Done</Text></TouchableOpacity>
            </View>

            <View className="items-center">
                <View className="bg-white p-4 rounded-xl">
                    <Image source={{ uri: 'https://placehold.co/200x200?text=QR+Code' }} className="w-48 h-48" />
                </View>
                <Text className="text-gray-400 text-center mt-4">Your encryption key is safely backed up. Use your key to unlock your encrypted journal on other devices.</Text>
            </View>

            <View className="bg-gray-800 rounded-lg mt-8">
                <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                    <View className="flex-row items-center">
                        <Ionicons name="logo-apple" size={24} color="white" />
                        <Text className="text-white text-lg ml-3">Backed up to iCloud</Text>
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color="green" />
                </View>
                <TouchableOpacity className="flex-row items-center p-3">
                    <Ionicons name="logo-google" size={24} color="white" />
                    <Text className="text-blue-500 text-lg ml-3">Backup to Google Drive</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-gray-800 rounded-lg p-3 mt-4 items-center">
                <Text className="text-blue-500 text-lg">Backup Manually</Text>
            </TouchableOpacity>
        </View>
    );
};
export default EncryptionKeyScreen;