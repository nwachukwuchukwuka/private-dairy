import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MyTemplatesTab = () => {
    const router = useRouter();
    const { userTemplates } = useAppContext();


    return (
        <View className="flex-1 items-center px-8">
            {userTemplates.length > 0 ? (
                // If templates exist, show the list
                // <View className="w-full mt-4 mb-8">
                //     <View className="bg-[#3A3A3C] rounded-lg">
                //         {userTemplates.map(template => (
                //             <TouchableOpacity key={template.id} className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
                //                 <Text className="text-white text-lg">{template.name}</Text>
                //                 <Ionicons name="chevron-forward" size={20} color="gray" />
                //             </TouchableOpacity>
                //         ))}
                //     </View>
                // </View>
                <View className="w-full mt-4">
                    <View className="bg-[#1C1C1E] rounded-lg mb-8">
                        {userTemplates.map(template => (
                            // --- THIS IS THE CHANGE ---
                            <TouchableOpacity
                                key={template.id}
                                className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0"
                                // Navigate to the editor, passing the template's ID as a parameter
                                onPress={() => router.push({
                                    pathname: '/more/new-template',
                                    params: { templateId: template.id }
                                })}
                            >
                                <Text className="text-white text-lg">{template.name}</Text>
                                <Ionicons name="chevron-forward" size={20} color="gray" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ) : (
                // If no templates exist, show the original placeholder text
                <Text className="text-gray-400 text-base text-center my-14">
                    Save existing templates from the gallery or create a blank new one to see them here.
                </Text>
            )}
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