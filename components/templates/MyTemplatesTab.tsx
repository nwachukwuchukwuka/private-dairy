import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MyTemplatesTab = () => {
    const router = useRouter();

    return (
        <View className="flex-1 items-center px-8">
            <Text className="text-gray-400 text-base mb-6 mt-14">
                Save existing templates from the gallery or create a blank new one to see them here.
            </Text>
            <TouchableOpacity
                onPress={() => router.push('/more/new-template')}
                className="bg-[#3A3A3C] w-full py-3 rounded-full "
            >
                <Text className="text-lg font-semibold text-center text-blue-500">New Template</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyTemplatesTab;