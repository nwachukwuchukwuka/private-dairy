// // screens/JournalsScreen.tsx or App.tsx
// import React from 'react';
// import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
// // import { Plus, Pencil, X } from 'lucide-react-native'; // or use @expo/vector-icons
// import { useRouter } from 'expo-router';

// const JournalsMenu = () => {
//     const router = useRouter();
//     return (
//         <View className="flex-1 bg-black">

//             {/* Header */}
//             <View className="flex-row items-center justify-between px-6 pt-12 pb-6">
//                 <Text className="text-white text-2xl font-bold">Journals</Text>

//                 <View className="flex-row items-center space-x-4">
//                     <TouchableOpacity className="flex-row items-center space-x-2 bg-zinc-900 px-4 py-2 rounded-full"
//                         onPress={() => router.push('/journals/add-journal')}>
//                         {/* <Plus size={20} color="#60a5fa" /> */}
//                         <Text className="text-blue-400 font-medium">Add</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                         {/* <Pencil size={22} color="#9ca3af" /> */}
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                         {/* <X size={26} color="#9ca3af" /> */}
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Info Banner */}
//             <View className="mx-6 mb-8 bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
//                 <View className="flex-row justify-between items-start">
//                     <View className="flex-1 pr-8">
//                         <Text className="text-white text-lg font-semibold mb-1">
//                             Add a new journal!
//                         </Text>
//                         <Text className="text-gray-400 text-sm">
//                             See our new journal creation flow with suggested journal names.
//                         </Text>
//                     </View>
//                     <TouchableOpacity>
//                         {/* <X size={20} color="#6b7280" /> */}
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Journals List */}
//             <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
//                 {/* Single Journal Item */}
//                 <TouchableOpacity className="flex-row items-center mb-6 bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
//                     <View className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mr-4" />

//                     <View className="flex-1">
//                         <Text className="text-white text-lg font-semibold">Journal</Text>
//                         <Text className="text-gray-400 text-sm">4 entries</Text>
//                     </View>
//                 </TouchableOpacity>

//                 {/* Empty space filler (you can map more journals here) */}
//                 {Array.from({ length: 10 }).map((_, i) => (
//                     <View key={i} className="h-24" />
//                 ))}
//             </ScrollView>
//         </View>
//     );
// }

// export default JournalsMenu;

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

interface Journal {
    id: string;
    name: string;
    color: string;
    entries: number;
}

const initialJournals: Journal[] = [
    { id: '1', name: 'All Entries', color: 'bg-gray-700', entries: 4 },
    { id: '2', name: 'Journal', color: 'bg-blue-500', entries: 4 },
    { id: '3', name: 'Journal', color: 'bg-orange-300', entries: 0 },
];

const JournalMenu = () => {
    const router = useRouter();
    const [journals, setJournals] = useState<Journal[]>(initialJournals);
    const [editMode, setEditMode] = useState(false);

    const handleDeleteJournal = (id: string) => {
        setJournals((prevJournals) =>
            prevJournals.filter((journal) => journal.id !== id)
        );
    };

    const renderJournal = ({ item }: { item: Journal }) => (
        <View className="flex-row items-center justify-between p-4 border-b border-gray-800">
            <View className="flex-row items-center">
                <View className={`w-10 h-12 ${item.color} rounded-md mr-4`} />
                <View>
                    <Text className="text-white text-lg">{item.name}</Text>
                    <Text className="text-gray-400">{item.entries} entries</Text>
                </View>
            </View>
            {editMode && (
                <TouchableOpacity onPress={() => router.push({ pathname: '/journals/journal-editor', params: { ...item } })}>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <View className="flex-1 bg-black p-4">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-3xl font-bold">Journals</Text>
                <View className="flex-row">
                    <TouchableOpacity onPress={() => router.push('/journals/add-journal')} className="bg-gray-800 p-2 rounded-lg mr-2">
                        <Text className="text-white">Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEditMode(!editMode)} className="bg-gray-800 p-2 rounded-lg">
                        <Text className="text-white">{editMode ? 'Done' : 'Edit'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-gray-800 p-4 rounded-lg mb-4">
                <Text className="text-white text-lg font-bold">Add a new journal!</Text>
                <Text className="text-gray-400">See our new journal creation flow with suggested journal names.</Text>
            </View>

            <FlatList
                data={journals}
                renderItem={renderJournal}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default JournalMenu;