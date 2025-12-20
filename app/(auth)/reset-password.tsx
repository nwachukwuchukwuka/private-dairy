import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const isNextDisabled = email.length < 5 || !email.includes('@');

    const handleNext = () => {
        if (isNextDisabled) return;
        router.push({
            pathname: './check-email',
            params: { email: email, reset: "reset" }
        });
    };

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative border-b border-gray-800">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Reset Password</Text>
                </View>
                <TouchableOpacity onPress={handleNext} className="ml-auto">
                    <Text className={`text-lg font-bold ${isNextDisabled ? 'text-gray-600' : 'text-blue-500'}`}>Next</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView contentContainerClassName="p-4 pt-8">
                    <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">ENTER EMAIL ADDRESS</Text>
                    <TextInput
                        placeholder="email@example.com"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoFocus={true}
                        value={email}
                        onChangeText={setEmail}
                        className="bg-[#1C1C1E] text-white p-4 rounded-lg text-lg"
                    />
                    <Text className="text-gray-500 text-sm px-4 mt-2">
                        Enter your email and we'll send you a link to reset your password
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ResetPasswordScreen;