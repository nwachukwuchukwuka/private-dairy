// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';

// const journals = [
//     { name: 'Journal', color: '#D1B49A' },
//     { name: 'Movie Log', color: '#F8D44C' },
//     { name: 'Journal', color: '#A9A9A9' },
//     { name: 'Journal', color: '#5AC8FA' },
// ];

// const SelectiveSyncScreen = () => {
//     const router = useRouter();
//     return (
//         <View className="flex-1 bg-[#1C1C1E] p-4">
//             <View className="flex-row justify-between items-center mb-8 pt-4">
//                 <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 text-lg">Cancel</Text></TouchableOpacity>
//                 <Text className="text-white font-bold text-lg">Selective Sync</Text>
//                 <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 font-bold text-lg">Done</Text></TouchableOpacity>
//             </View>

//             <View className="items-center">
//                 <Ionicons name="sync-circle-outline" size={64} color="white" />
//                 <TouchableOpacity className="border border-gray-500 rounded-full px-3 py-1 mt-4"><Text className="text-white">Learn More</Text></TouchableOpacity>
//                 <Text className="text-gray-400 mt-4">4 of 4 checked journals will be synced to this device.</Text>
//             </View>

//             <View className="flex-row justify-between items-center mt-8 mb-2">
//                 <Text className="text-gray-400 text-xs font-bold ml-4">JOURNALS</Text>
//                 <TouchableOpacity><Text className="text-blue-500 font-semibold">SYNC ONE</Text></TouchableOpacity>
//             </View>
//             <View className="bg-gray-800 rounded-lg">
//                 {journals.map((journal, index) => (
//                     <View key={index} className="flex-row items-center justify-between p-3 border-b border-gray-700 last:border-b-0">
//                         <View className="flex-row items-center">
//                             <View style={{ backgroundColor: journal.color }} className="w-6 h-8 rounded-md mr-4" />
//                             <Text className="text-white text-lg">{journal.name}</Text>
//                         </View>
//                         <Ionicons name="checkmark-circle" size={24} color="orange" />
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );
// };
// export default SelectiveSyncScreen;

import SelectiveSyncScreen from '@/components/SelectiveSyncScreen'
import React from 'react'

const SelectiveSync = () => {
    return <SelectiveSyncScreen />
}

export default SelectiveSync
