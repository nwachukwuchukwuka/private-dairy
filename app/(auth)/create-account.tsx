import { useRouter } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateAccount = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-4 bg-[#1C1C1E]">
                <Pressable onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </Pressable>
                <Text className="text-white font-bold text-lg">Create Account</Text>
                <Pressable onPress={() => router.push('/check-email')}>
                    <Text className="text-blue-500 font-bold text-lg">Next</Text>
                </Pressable>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <View className="flex-1 p-6 justify-start">
                    <Text className="text-gray-400 text-sm font-bold mb-2">
                        ENTER EMAIL ADDRESS
                    </Text>
                    <TextInput
                        className="bg-[#1C1C1E] text-white rounded-xl h-14 px-4 text-lg"
                        placeholder="name@example.com"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoFocus={true}
                    />
                    <Text className="text-gray-500 mt-2">
                        Enter your email and we'll send you a link to create your account.
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CreateAccount;