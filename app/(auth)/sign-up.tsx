import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="py-4 bg-[#1C1C1E]">
                <Text className="text-white text-xl font-bold text-center">
                    Sign Up
                </Text>
            </View>
            <View className="flex-1 p-6">

                <Text className="text-gray-300 text-lg text-center mb-12">
                    Create an account to keep your memories safe.
                </Text>

                <TouchableOpacity className="bg-white rounded-md h-14 flex-row justify-center items-center mb-4">
                    <Ionicons name="logo-apple" size={22} color="black" className="mr-2" />
                    <Text className="text-black font-semibold text-lg">
                        Continue with Apple
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/create-account')}
                    className="bg-white rounded-md h-14 flex-row justify-center items-center mb-12"
                >
                    <MaterialCommunityIcons name="email" size={22} color="black" className="mr-2" />
                    <Text className="text-black font-semibold text-lg">
                        Continue with Email
                    </Text>
                </TouchableOpacity>

                <Text className="text-gray-500 text-center text-sm">
                    Your use of Day One is subject to our{' '}
                    <Text className=" underline">Terms</Text> and{' '}
                    <Text className=" underline">Privacy Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;