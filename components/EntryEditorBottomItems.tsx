// import { Feather, Ionicons } from '@expo/vector-icons';
// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';

// const ToolbarButton = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
//     <TouchableOpacity className="items-center gap-1">
//         {icon}
//         <Text className="text-white text-xs">{name}</Text>
//     </TouchableOpacity>
// );

// const EntryEditorBottomItems = () => {
//     return (
//         <View className="px-4 py-2 border-t border-gray-800">
//             <View className="flex-row justify-around items-center bg-gray-800 p-2 rounded-xl">
//                 <ToolbarButton icon={<Ionicons name="images-outline" size={24} color="white" />} name="Photos" />
//                 <ToolbarButton icon={<Feather name="edit" size={24} color="white" />} name="Templates" />
//                 <ToolbarButton icon={<Ionicons name="bulb-outline" size={24} color="white" />} name="Suggestions" />
//                 <ToolbarButton icon={<Ionicons name="mic-outline" size={24} color="white" />} name="Audio" />
//             </View>
//             <TouchableOpacity className="flex-row items-center justify-center pt-3 pb-1">
//                 <Ionicons name="chevron-down" size={16} color="gray" />
//                 <Text className="text-gray-400 ml-1">More</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default EntryEditorBottomItems


import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Add an optional onPress prop
const ToolbarButton = ({ icon, name, onPress }: { icon: React.ReactNode; name: string; onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="items-center gap-1">
        {icon}
        <Text className="text-white text-xs">{name}</Text>
    </TouchableOpacity>
);

// --- CHANGE 3: Define props for the main component ---
interface EntryEditorBottomItemsProps {
    onPhotosPress: () => void;
    onTemplatesPress: () => void;
    onSuggestionsPress: () => void;
    onAudioPress: () => void;
}

const EntryEditorBottomItems: React.FC<EntryEditorBottomItemsProps> = ({
    onPhotosPress,
    onTemplatesPress,
    onSuggestionsPress,
    onAudioPress,
}) => {
    return (
        <View className="px-4 py-2 border-t border-gray-800">
            <View className="flex-row justify-around items-center bg-gray-800 p-2 rounded-xl">
                {/* --- CHANGE 4: Use the passed-in functions --- */}
                <ToolbarButton icon={<Ionicons name="images-outline" size={24} color="white" />} name="Photos" onPress={onPhotosPress} />
                <ToolbarButton icon={<Feather name="edit" size={24} color="white" />} name="Templates" onPress={onTemplatesPress} />
                <ToolbarButton icon={<Ionicons name="bulb-outline" size={24} color="white" />} name="Suggestions" onPress={onSuggestionsPress} />
                <ToolbarButton icon={<Ionicons name="mic-outline" size={24} color="white" />} name="Audio" onPress={onAudioPress} />
            </View>
            <TouchableOpacity className="flex-row items-center justify-center pt-3 pb-1">
                <Ionicons name="chevron-down" size={16} color="gray" />
                <Text className="text-gray-400 ml-1">More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EntryEditorBottomItems;


