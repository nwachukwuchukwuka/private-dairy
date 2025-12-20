// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React from 'react';
// import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Row = ({ label, value }: { label: string, value: string }) => {
//     const router = useRouter();
//     const path = label.toLowerCase().replace(' ', '-');
//     return (
//         <TouchableOpacity
//             onPress={() => router.push(`/settings/appearance/${path}`)}
//             className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
//             <Text className="text-white text-lg">{label}</Text>
//             <View className="flex-row items-center">
//                 <Text className="text-gray-400 text-lg mr-2">{value}</Text>
//                 <Ionicons name="chevron-forward" size={20} color="gray" />
//             </View>
//         </TouchableOpacity>
//     );
// };

// const SwitchRow = ({ label }: { label: string }) => (
//     <View className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
//         <Text className="text-white text-lg">{label}</Text>
//         <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
//     </View>
// );

// const AppearanceScreen = () => {
//     const router = useRouter();
//     return (
//         <SafeAreaView className="flex-1 bg-black">
//             <View className="flex-row items-center p-3 relative">
//                 <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
//                     <Ionicons name="chevron-back" size={28} color="white" />
//                 </TouchableOpacity>
//                 <View className="absolute left-0 right-0 items-center">
//                     <Text className="text-white text-lg font-bold">Appearance</Text>
//                 </View>
//             </View>
//             <ScrollView contentContainerClassName="p-4">
//                 <View className="bg-[#1C1C1E] rounded-lg mb-8">
//                     <Row label="Theme" value="System" />
//                 </View>
//                 <View className="bg-[#1C1C1E] rounded-lg mb-8">
//                     <Row label="Font" value="Lato" />
//                     <View className="h-[0.4px] bg-[#3A3A3C]" />
//                     <Row label="Font Size" value="System Font Size" />
//                 </View>
//                 <View className="bg-[#1C1C1E] rounded-lg mb-2">
//                     <SwitchRow label="Auto Expand URLs" />
//                     <View className="h-[0.4px] bg-[#3A3A3C]" />
//                     <SwitchRow label="Auto Title First Line" />
//                 </View>
//                 <Text className="text-gray-500 text-sm px-4 mb-8">The first line starts out as a title and remains until greater than 100 characters.</Text>
//                 <View className="bg-[#1C1C1E] rounded-lg">
//                     <SwitchRow label="Show Photos in Calendar" />
//                     <View className="h-[0.4px] bg-[#3A3A3C]" />
//                     <SwitchRow label="Show Timeline Scrubber" />
//                     <View className="h-[0.4px] bg-[#3A3A3C]" />
//                     <SwitchRow label="Show Maps in Read View" />
//                     <View className="h-[0.4px] bg-[#3A3A3C]" />
//                     <SwitchRow label="Show Step Count" />
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };
// export default AppearanceScreen;



import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type RowProps = {
    label: string;
    value: string;
    onPress: () => void;
};

const Row = ({ label, value, onPress }: RowProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0"
        >
            <Text className="text-white text-lg">{label}</Text>

            <View className="flex-row items-center">
                <Text className="text-gray-400 text-lg mr-2">{value}</Text>
                <Ionicons name="chevron-forward" size={20} color="gray" />
            </View>
        </TouchableOpacity>
    );
};
const SwitchRow = ({ label }: { label: string }) => (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-700 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
    </View>
);

const AppearanceScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Appearance</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <Row label="Theme" value="System" onPress={() => router.push('/settings/appearance/theme')} />
                </View>
                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <Row label="Font" value="Lato" onPress={() => router.push('/settings/appearance/font')} />
                    <View className="h-[0.4px] bg-[#3A3A3C]" />
                    <Row label="Font Size" value="System Font Size" onPress={() => router.push('/settings/appearance/font-size')} />
                </View>
                <View className="bg-[#1C1C1E] rounded-lg mb-2">
                    <SwitchRow label="Auto Expand URLs" />
                    <View className="h-[0.4px] bg-[#3A3A3C]" />
                    <SwitchRow label="Auto Title First Line" />
                </View>
                <Text className="text-gray-500 text-sm px-4 mb-8">The first line starts out as a title and remains until greater than 100 characters.</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    <SwitchRow label="Show Photos in Calendar" />
                    <View className="h-[0.4px] bg-[#3A3A3C]" />
                    <SwitchRow label="Show Timeline Scrubber" />
                    <View className="h-[0.4px] bg-[#3A3A3C]" />
                    <SwitchRow label="Show Maps in Read View" />
                    <View className="h-[0.4px] bg-[#3A3A3C]" />
                    <SwitchRow label="Show Step Count" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AppearanceScreen;