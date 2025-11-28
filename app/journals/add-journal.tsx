// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// const suggestedNames = [
//     'Journal', 'Daily', '2025', 'Dreams', 'Food',
//     'Gratitude', 'Intentions', 'Vacation', 'Pregnancy', 'Meeting Notes'
// ];

// const JournalPickerScreen = () => {
//     return (
//         <View className="flex-1 bg-black">
//             <StatusBar style="light" />

//             {/* Header */}
//             <View className="flex-row items-center justify-between px-6 pt-12 pb-4">
//                 <TouchableOpacity>
//                     {/* <X size={28} color="#9ca3af" /> */}
//                 </TouchableOpacity>

//                 <View className="flex-row bg-zinc-900 rounded-full px-1 py-1">
//                     <TouchableOpacity className="bg-zinc-800 px-5 py-2 rounded-full">
//                         <Text className="text-white font-medium">Personal</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity className="px-5 py-2">
//                         <Text className="text-gray-500 font-medium">Shared</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <TouchableOpacity>
//                     <Text className="text-blue-400 font-semibold text-lg">Done</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Main Journal Book */}
//             <View className="items-center mt-16 mb-20">
//                 {/* Book Cover */}
//                 <View className="relative">
//                     <View className="w-48 h-64 bg-gradient-to-b from-red-500 to-pink-600 rounded-2xl shadow-2xl">
//                         {/* Book spine highlight */}
//                         <View className="absolute left-0 top-0 bottom-0 w-8 bg-red-400 opacity-40 rounded-l-2xl" />
//                     </View>

//                     {/* Color Palette Button */}
//                     <TouchableOpacity className="absolute -top-3 -right-3 bg-zinc-800 w-12 h-12 rounded-full items-center justify-center shadow-lg border border-zinc-700">
//                         {/* <Palette size={22} color="#e4e4e7" /> */}
//                     </TouchableOpacity>
//                 </View>

//                 {/* Journal Title */}
//                 <Text className="text-white text-2xl font-bold mt-8">Journal</Text>
//             </View>

//             {/* Suggested Names */}
//             <View className="px-6">
//                 <Text className="text-gray-500 text-sm mb-4 ml-2">Suggested</Text>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     <View className="flex-row space-x-3 pb-4">
//                         {suggestedNames.map((name, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 className={`px-5 py-3 rounded-full border ${name === 'Journal'
//                                     ? 'bg-zinc-800 border-zinc-600'
//                                     : 'bg-zinc-900 border-zinc-800'
//                                     }`}
//                             >
//                                 <Text
//                                     className={`font-medium ${name === 'Journal' ? 'text-white' : 'text-gray-400'
//                                         }`}
//                                 >
//                                     {name}
//                                 </Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>
//                 </ScrollView>
//             </View>
//         </View>
//     );
// }

// export default JournalPickerScreen;


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const personalSuggestions = [
    'Journal', 'Daily', '2025', 'Dreams', 'Food', 'Intentions', 'Vacation', 'Pregnancy', 'Meeting Notes'
];

const sharedSuggestions = [
    '2025', 'Travel', 'Life Stories', 'Goals', 'Meetings', 'Vacation', 'Pregnancy', 'Our Wedding', 'Our Story'
];

const colors = ['bg-orange-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500'];

const AddJournal = () => {
    const router = useRouter();
    const [tab, setTab] = useState<'Personal' | 'Shared'>('Personal');
    const [journalName, setJournalName] = useState('Journal');
    const [journalColor, setJournalColor] = useState('bg-orange-500');

    const suggestions = tab === 'Personal' ? personalSuggestions : sharedSuggestions;

    const handleSuggestionPress = (name: string) => {
        setJournalName(name);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setJournalColor(randomColor);
    };

    return (
        <View className="flex-1 bg-black p-4 items-center">
            <View className="w-full flex-row justify-between items-center mb-8">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-white text-lg">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">New Journal</Text>
                <TouchableOpacity onPress={() => { /* Logic to save the journal */ router.back(); }}>
                    <Text className="text-white text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <View className="items-center mb-8">
                <View className={`w-32 h-40 ${journalColor} rounded-lg items-center justify-center`}>
                    {tab === 'Shared' && <MaterialCommunityIcons name="account-group-outline" size={48} color="white" />}
                </View>
                <Text className="text-white text-2xl mt-4">{journalName}</Text>
            </View>

            <View className="flex-row bg-gray-800 rounded-full p-1 mb-8">
                <TouchableOpacity
                    onPress={() => setTab('Personal')}
                    className={`px-8 py-2 rounded-full ${tab === 'Personal' ? 'bg-gray-600' : ''}`}
                >
                    <Text className="text-white">Personal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTab('Shared')}
                    className={`px-8 py-2 rounded-full ${tab === 'Shared' ? 'bg-gray-600' : ''}`}
                >
                    <Text className="text-white">Shared</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={suggestions}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleSuggestionPress(item)}
                        className="bg-gray-800 rounded-full px-4 py-2 m-1"
                    >
                        <Text className="text-white">{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerClassName="items-center"
            />
        </View>
    );
};

export default AddJournal;