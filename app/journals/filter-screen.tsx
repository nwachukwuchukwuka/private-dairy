

// // FilterScreen.tsx
// import TagsScreen from '@/components/TagsScreen';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import React, { useRef } from 'react';
// import {
//     Animated,
//     Dimensions,
//     FlatList,
//     Modal,
//     SafeAreaView,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View
// } from 'react-native';

// // Get the full width of the screen
// const { width } = Dimensions.get('window');

// // --- Filter Data and Types ---
// type FilterItem = { name: string; icon: React.ReactNode; count: number; action?: () => void };
// interface FilterScreenProps { visible: boolean; onClose: () => void; }

// // --- Main Component ---
// const FilterScreen: React.FC<FilterScreenProps> = ({ visible, onClose }) => {
//     const slideAnimation = useRef(new Animated.Value(0)).current;

//     // Function to animate to the Tags screen
//     const showTagsScreen = () => {
//         Animated.timing(slideAnimation, {
//             toValue: 1,
//             duration: 300,
//             useNativeDriver: true,
//         }).start();
//     };

//     // Function to animate back to the Filter list
//     const showFilterList = () => {
//         Animated.timing(slideAnimation, {
//             toValue: 0,
//             duration: 300,
//             useNativeDriver: true,
//         }).start();
//     };

//     const filterData: FilterItem[] = [
//         { name: 'Favorite', icon: <Ionicons name="heart" size={24} color="#FF3B30" />, count: 0 },
//         { name: 'Checklist', icon: <MaterialCommunityIcons name="checkbox-marked" size={24} color="#FFCC00" />, count: 0 },
//         // Add the action to the 'Tag' item
//         { name: 'Tag', icon: <Ionicons name="pricetag" size={24} color="#00C7BE" />, count: 0, action: showTagsScreen },
//         { name: 'Place', icon: <Ionicons name="location-sharp" size={24} color="#007AFF" />, count: 0 },
//         { name: 'Date', icon: <MaterialCommunityIcons name="calendar-month" size={24} color="#AF52DE" />, count: 0 },
//         { name: 'Year', icon: <MaterialCommunityIcons name="calendar-month" size={24} color="#AF52DE" />, count: 0 },
//         { name: 'Weather', icon: <Ionicons name="partly-sunny" size={24} color="#D953E8" />, count: 0 },
//         { name: 'Creation Device', icon: <Ionicons name="phone-portrait-outline" size={24} color="#E9418B" />, count: 0 },
//         { name: 'Activity', icon: <Ionicons name="walk" size={24} color="#E9418B" />, count: 0 },
//         { name: 'Music', icon: <Ionicons name="musical-notes" size={24} color="#FF2D55" />, count: 0 },
//     ];

//     // --- Render Functions ---
//     const renderItem = ({ item }: { item: FilterItem }) => (
//         <TouchableOpacity className="flex-row items-center justify-between px-4 py-3" onPress={item.action}>
//             <View className="flex-row items-center">
//                 <View className="w-8 items-center">{item.icon}</View>
//                 <Text className="text-white text-lg ml-4">{item.name}</Text>
//             </View>
//             <Text className="text-gray-500 text-lg">{item.count}</Text>
//         </TouchableOpacity>
//     );

//     // Define animated styles
//     const filterListStyle = {
//         transform: [{
//             translateX: slideAnimation.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, -width], // Slide out to the left
//             }),
//         }],
//     };
//     const tagsScreenStyle = {
//         transform: [{
//             translateX: slideAnimation.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [width, 0], // Slide in from the right
//             }),
//         }],
//     };

//     return (
//         <Modal animationType="fade" transparent={false} visible={visible} onRequestClose={onClose}>
//             <SafeAreaView className="flex-1 bg-black">
//                 {/* Persistent Header */}
//                 <View className="p-4">
//                     <View className="flex-row items-center">
//                         <View className="flex-1 flex-row items-center bg-gray-800 rounded-lg px-3 py-2">
//                             <Ionicons name="search" size={20} color="gray" />
//                             <TextInput
//                                 className="text-white text-lg ml-2 flex-1"
//                                 placeholder="Search"
//                                 placeholderTextColor="#8E8E93"
//                             />
//                         </View>
//                         <TouchableOpacity className="ml-4" onPress={onClose}>
//                             <Text className="text-blue-500 text-lg">Cancel</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 {/* Animated Container */}
//                 <View className="flex-1">
//                     {/* Main Filter List */}
//                     <Animated.View style={[{ flex: 1, width: '100%' }, filterListStyle]}>
//                         <Text className="text-white text-3xl font-bold px-4 mt-4 mb-2">Filters</Text>
//                         <FlatList
//                             data={filterData}
//                             renderItem={renderItem}
//                             keyExtractor={(item) => item.name}
//                             ItemSeparatorComponent={() => <View className="h-px bg-gray-800 ml-16" />}
//                         />
//                     </Animated.View>

//                     {/* Tags Screen */}
//                     <Animated.View style={[{ flex: 1, width: '100%', position: 'absolute', top: 0, bottom: 0 }, tagsScreenStyle]}>
//                         <TagsScreen onBack={showFilterList} />
//                     </Animated.View>
//                 </View>
//             </SafeAreaView>
//         </Modal>
//     );
// };

// export default FilterScreen;



import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import ActivityScreen from '@/components/ActivityScreen';
import CreationDeviceScreen from '@/components/CreationDeviceScreen';
import PlaceScreen from '@/components/PlaceScreen';
import TagsScreen from '@/components/TagsScreen';
import WeatherScreen from '@/components/WeatherScreen';
import YearScreen from '@/components/YearScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface FilterScreenProps { visible: boolean; onClose: () => void; }

const FilterScreen: React.FC<FilterScreenProps> = ({ visible, onClose }) => {
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const slideAnimation = useRef(new Animated.Value(0)).current;

    const screens = [
        { name: 'Tag', component: TagsScreen },
        { name: 'Place', component: PlaceScreen },
        { name: 'Year', component: YearScreen },
        { name: 'Weather', component: WeatherScreen },
        { name: 'Creation Device', component: CreationDeviceScreen },
        { name: 'Activity', component: ActivityScreen },
    ];

    const navigateTo = (screenIndex: number) => {
        setActiveScreenIndex(screenIndex);
        Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const goBack = () => {
        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setActiveScreenIndex(0);
        });
    };

    const filterData = [
        { name: 'Favorite', icon: <Ionicons name="heart" size={24} color="#FF3B30" />, count: 0 },
        { name: 'Checklist', icon: <MaterialCommunityIcons name="checkbox-marked" size={24} color="#FFCC00" />, count: 0 },
        { name: 'Tag', icon: <Ionicons name="pricetag" size={24} color="#00C7BE" />, count: 0, action: () => navigateTo(1) },
        { name: 'Place', icon: <Ionicons name="location-sharp" size={24} color="#007AFF" />, count: 0, action: () => navigateTo(2) },
        { name: 'Date', icon: <MaterialCommunityIcons name="calendar-month" size={24} color="#AF52DE" />, count: 0 },
        { name: 'Year', icon: <MaterialCommunityIcons name="calendar-month" size={24} color="#AF52DE" />, count: 0, action: () => navigateTo(3) },
        { name: 'Weather', icon: <Ionicons name="partly-sunny" size={24} color="#D953E8" />, count: 0, action: () => navigateTo(4) },
        { name: 'Creation Device', icon: <Ionicons name="phone-portrait-outline" size={24} color="#E9418B" />, count: 0, action: () => navigateTo(5) },
        { name: 'Activity', icon: <Ionicons name="walk" size={24} color="#E9418B" />, count: 0, action: () => navigateTo(6) },
        { name: 'Music', icon: <Ionicons name="musical-notes" size={24} color="#FF2D55" />, count: 0 },
    ];

    const renderItem = ({ item }: { item: typeof filterData[0] }) => (
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3" onPress={item.action}>
            <View className="flex-row items-center">
                <View className="w-8 items-center">{item.icon}</View>
                <Text className="text-white text-lg ml-4">{item.name}</Text>
            </View>
            <Text className="text-gray-500 text-lg">{item.count}</Text>
        </TouchableOpacity>
    );

    const filterListStyle = {
        transform: [{
            translateX: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -width],
            }),
        }],
    };

    const detailScreenStyle = {
        transform: [{
            translateX: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0],
            }),
        }],
    };

    const ActiveScreenComponent = activeScreenIndex > 0 ? screens[activeScreenIndex - 1].component : null;

    return (
        <Modal animationType="fade" transparent={false} visible={visible} onRequestClose={onClose}>
            <SafeAreaProvider>
                <SafeAreaView className="flex-1 bg-black">
                    <View className="p-4">
                        <View className="flex-row items-center">
                            <View className="flex-1 flex-row items-center bg-gray-800 rounded-lg px-3 py-2">
                                <Ionicons name="search" size={20} color="gray" />
                                <TextInput
                                    className="text-white text-lg ml-2 flex-1"
                                    placeholder="Search"
                                    placeholderTextColor="#8E8E93"
                                />
                            </View>
                            <TouchableOpacity className="ml-4" onPress={onClose}>
                                <Text className="text-blue-500 text-lg">Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-1">
                        <Animated.View style={[{ flex: 1, width: '100%' }, filterListStyle]}>
                            <Text className="text-white text-3xl font-bold px-4 mt-4 mb-2">Filters</Text>
                            <FlatList
                                data={filterData}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.name}
                                ItemSeparatorComponent={() => <View className="h-px bg-gray-800 ml-16" />}
                            />
                        </Animated.View>

                        {ActiveScreenComponent && (
                            <Animated.View
                                style={[{ flex: 1, width: '100%', position: 'absolute', top: 0, bottom: 0 }, detailScreenStyle]}
                            >
                                <ActiveScreenComponent onBack={goBack} />
                            </Animated.View>
                        )}
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>

        </Modal>
    );
};

export default FilterScreen;