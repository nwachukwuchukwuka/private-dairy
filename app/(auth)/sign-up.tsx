import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-1 justify-center p-6">
                <Text className="text-white text-3xl font-bold text-center mb-2">
                    Sign Up
                </Text>
                <Text className="text-gray-400 text-lg text-center mb-12">
                    Create an account to keep your memories safe.
                </Text>

                <TouchableOpacity className="bg-white rounded-md h-12 flex-row justify-center items-center mb-4">
                    <Ionicons name="logo-apple" size={22} color="black" className="mr-2" />
                    <Text className="text-black font-semibold text-lg">
                        Continue with Apple
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/create-account')}
                    className="bg-gray-700 rounded-md h-12 flex-row justify-center items-center mb-12"
                >
                    <MaterialCommunityIcons name="email" size={22} color="white" className="mr-2" />
                    <Text className="text-white font-semibold text-lg">
                        Continue with Email
                    </Text>
                </TouchableOpacity>

                <Text className="text-gray-500 text-center text-xs">
                    Your use of Day One is subject to our{' '}
                    <Text className="text-blue-500 underline">Terms</Text> and{' '}
                    <Text className="text-blue-500 underline">Privacy Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;