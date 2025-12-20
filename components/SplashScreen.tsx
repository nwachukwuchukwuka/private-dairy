import { Feather } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useLayoutEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { useAppContext } from '../context/context';

const SplashScreen = () => {
    const router = useRouter();
    const { setIsShowingSplash } = useAppContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowingSplash(false);
            router.replace('/(tabs)');
        }, 3000);
        return () => clearTimeout(timer);
    }, [router]);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: "none" },
        });

        return () => {
            navigation.setOptions({
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "#70808d",
                tabBarStyle: {
                    backgroundColor: "#273238",
                    borderTopWidth: 1,
                    borderTopColor: "#3a4650",
                    position: "absolute",
                    elevation: 0,
                },
            });
        };
    }, [navigation]);

    return (
        <View className="flex-1 justify-center items-center bg-[#2C2C2E]">
            <StatusBar barStyle="light-content" />

            <View className="w-24 h-24 bg-blue-500 rounded-2xl items-center justify-center">
                <Feather name="bookmark" size={60} color="white" />
            </View>
        </View>
    );
};

export default SplashScreen;