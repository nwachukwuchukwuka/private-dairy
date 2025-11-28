import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-1 justify-center p-6">
                <Text className="text-white text-3xl font-bold text-center mb-10">
                    Sign In
                </Text>
                <TextInput
                    className="bg-gray-800 text-white rounded-md h-12 px-4 mb-4"
                    placeholder="Email address"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    className="bg-gray-800 text-white rounded-md h-12 px-4 mb-6"
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                />

                <TouchableOpacity className="bg-gray-700 rounded-md h-12 justify-center items-center mb-4">
                    <Text className="text-white font-bold text-lg">Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-blue-500 text-center mb-8">
                        Forgot your password?
                    </Text>
                </TouchableOpacity>

                <View className="flex-row items-center mb-8">
                    <View className="flex-1 h-px bg-gray-700" />
                    <Text className="text-gray-500 mx-4">OR</Text>
                    <View className="flex-1 h-px bg-gray-700" />
                </View>

                <TouchableOpacity className="bg-white rounded-md h-12 flex-row justify-center items-center mb-8">
                    <Ionicons name="logo-apple" size={20} color="black" className="mr-2" />
                    <Text className="text-black font-semibold text-lg">
                        Sign in with Apple
                    </Text>
                </TouchableOpacity>

                <Text className="text-gray-500 text-center text-xs mb-6">
                    Your use of Day One is subject to our{' '}
                    <Text className="text-blue-500 underline">Terms</Text> and{' '}
                    <Text className="text-blue-500 underline">Privacy Policy</Text>.
                </Text>

                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                    <Text className="text-white text-center">
                        Need an account?{' '}
                        <Text className="text-blue-500 font-bold">Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;