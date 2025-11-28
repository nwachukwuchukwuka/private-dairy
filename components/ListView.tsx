import { useRouter } from 'expo-router';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const ListView = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-black pt-4 px-4">
            <Text className="text-white font-bold text-lg mb-4">
                November 2025
            </Text>

            <TouchableOpacity
                className="flex-row gap-4"
                onPress={() => router.push('/journals/entry-detail')}
            >
                <View className="items-center">
                    <Text className="text-gray-400 text-sm font-semibold">TUE</Text>
                    <Text className="text-white text-3xl font-medium">18</Text>
                </View>
                <View className="flex-1 border-b border-gray-800 pb-4">
                    <Text className="text-white font-bold text-lg mb-1">
                        Welcome to Day One
                    </Text>
                    <Text className="text-gray-400 leading-5" numberOfLines={2}>
                        Start your journaling journey with Day One and invite clarity, gratitude, and reflection into you...
                    </Text>
                    <Text className="text-gray-500 text-sm mt-2">
                        10:02 AM
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default ListView;