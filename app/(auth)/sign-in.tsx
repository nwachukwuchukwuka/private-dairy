import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const handleLogIn = () => {
        setIsAuthenticated(true);
        router.replace('/(tabs)');
    }
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="py-4 bg-[#1C1C1E]">
                <Text className="text-white text-xl font-bold text-center">
                    Sign In
                </Text>
            </View>
            <View className="flex-1 justify-center p-6">
                <TextInput
                    className="border border-[#1C1C1E] text-white rounded-md h-14 px-4 mb-4"
                    placeholder="Email address"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    className="border border-[#1C1C1E] text-white rounded-md h-14 px-4 mb-6"
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                />

                <TouchableOpacity className="bg-[#1C1C1E] rounded-md h-14 justify-center items-center mb-4" onPress={handleLogIn}>
                    <Text className="text-white font-bold text-lg">Log In</Text>
                </TouchableOpacity>

                <Pressable onPress={() => router.push('/reset-password')}>
                    <Text className="text-gray-200 text-center mb-8 underline">
                        Forgot your password?
                    </Text>
                </Pressable>

                <View className="flex-row items-center mb-8">
                    <View className="flex-1 h-px bg-gray-200" />
                    <Text className="text-gray-200 mx-4">OR</Text>
                    <View className="flex-1 h-px bg-gray-200" />
                </View>

                <TouchableOpacity className="bg-white rounded-md h-14 flex-row justify-center items-center mb-8">
                    <Ionicons name="logo-apple" size={20} color="black" className="mr-2" />
                    <Text className="text-black font-semibold text-lg">
                        Sign in with Apple
                    </Text>
                </TouchableOpacity>

                <Text className="text-gray-200 text-center text-md mb-6">
                    Your use of Day One is subject to our{' '}
                    <Text className=" underline">Terms</Text> and{' '}
                    <Text className=" underline">Privacy Policy</Text>.
                </Text>

                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                    <Text className="text-white text-center">
                        Need an account?{' '}
                        <Text className="underline">Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;