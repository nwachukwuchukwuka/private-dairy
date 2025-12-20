import { useAppContext } from '@/context/context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const OnboardingScreen = () => {
    const { isAuthenticated, setIsAuthenticated } = useAppContext();

    const router = useRouter();

    const handleSkip = () => {
        setIsAuthenticated(true);
        router.replace('/(tabs)');
    };

    const handleHaveAccount = () => {
        router.push('/(auth)/sign-in');
    };

    const handleAppleSignIn = () => {
        console.log("Continue with Apple pressed");
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1516627142642-2b4d8807d904?q=80&w=1887' }}
            className="flex-1"
        >
            <View className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" />
            <SafeAreaView className="flex-1 justify-between p-6">
                <StatusBar barStyle="light-content" />
                <View />
                <View className="items-center">
                    <View className="w-16 h-16 border-2 border-white rounded-xl items-center justify-center mb-4">
                        <Feather name="bookmark" size={40} color="white" />
                    </View>
                    <Text className="text-white text-4xl font-light tracking-[10px]">DAY ONE</Text>
                    <Text className="text-gray-300 text-sm tracking-[4px] mt-1">JOURNAL</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={handleAppleSignIn}
                        className="bg-white w-full py-4 rounded-full flex-row items-center justify-center mb-3"
                    >
                        <Ionicons name="logo-apple" size={20} color="black" style={{ marginRight: 8 }} />
                        <Text className="text-black text-lg font-semibold">Continue with Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleHaveAccount}
                        className="bg-white w-full py-4 rounded-full items-center justify-center mb-6"
                    >
                        <Text className="text-black text-lg font-semibold">I have an account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSkip}>
                        <Text className="text-white text-base text-center underline">Skip for now</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OnboardingScreen;