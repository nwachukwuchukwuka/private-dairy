import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CheckEmailScreen = () => {
    const router = useRouter();
    const { email, reset } = useLocalSearchParams();

    const handleClose = () => {
        router.dismissAll();
    };

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center justify-center p-4 border-b border-gray-800">
                <View className=" items-center">
                    <Text className="text-white text-lg font-bold">{reset === "reset" ? "Reset Password" : "Create Account"}</Text>
                </View>
            </View>

            <View className="flex-1 justify-center items-center px-8 pb-16">
                <Ionicons name="mail-outline" size={80} color="#34B4E8" />
                <Text className="text-white text-3xl font-bold mt-6">Check your email</Text>
                <Text className="text-gray-400 text-lg mt-2">{email}</Text>
                <Text className="text-blue-400 text-lg text-center mt-6">
                    To {reset === "reset" ? "reset your password" : "create your account"}, follow the instructions in the email.
                </Text>

                <TouchableOpacity className="bg-blue-500 w-full py-4 rounded-lg items-center mt-12">
                    <Text className="text-white text-lg font-bold">Open the Mail app</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClose} className="w-full py-3 rounded-lg items-center mt-2">
                    <Text className="text-blue-500 text-lg">OK, thanks!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CheckEmailScreen;