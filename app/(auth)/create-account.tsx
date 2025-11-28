import { useRouter } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CreateAccount = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-4 border-b border-gray-800">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg">Create Account</Text>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-bold text-lg">Next</Text>
                </TouchableOpacity>
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
                        className="bg-gray-800 text-white rounded-md h-12 px-4 text-lg"
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