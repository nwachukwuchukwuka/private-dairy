import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const Prompt = ({ text }: { text: string }) => (
    <View className="bg-[#3A3A3C] self-start px-3 py-3 my-4 rounded-full mb-3">
        <Text className="text-white  text-md uppercase">{text}</Text>
    </View>
);
const Bullets = () => (
    <View className="my-2 ml-4 gap-6">
        <View className="w-2 h-2 bg-blue-400 rounded-full" />
        <View className="w-2 h-2 bg-blue-400 rounded-full" />
        <View className="w-2 h-2 bg-blue-400 rounded-full" />
    </View>
);
const NumberedList = ({ items }: { items: string[] }) => (
    <View className="my-2 ml-4 gap-1">
        {items.map(item => <Text key={item} className="text-gray-400 text-lg">{item}</Text>)}
    </View>
);
const CheckboxList = ({ count }: { count: number }) => (
    <View className="my-2 ml-4 gap-2">
        {Array.from({ length: count }).map((_, i) => (
            <View key={i} className="flex-row items-center">
                <View className="w-6 h-6 border-2 border-white rounded-sm mr-2" />
            </View>
        ))}
    </View>
);

const TEMPLATES = [
    {
        id: 'daily-gratitude', name: 'Daily Gratitude', content: () => (
            <>
                <Prompt text="TODAY I AM GRATEFUL FOR:" />
                <Bullets />
                <Prompt text="SIMPLE DELIGHTS I HAVE ENJOYED LATELY" />
                <Bullets />
                <Prompt text="3 GOOD THINGS THAT HAPPENED TODAY" />
                <NumberedList items={['1.', '2.', '3.']} />
            </>
        )
    },
    {
        id: '5-min-am', name: '5 Minute AM', content: () => (
            <>
                <Prompt text="I AM GRATEFUL FOR..." />
                <Bullets />
                <Prompt text="HOW CAN I MAKE TODAY AMAZING?" />
                <Prompt text="DAILY AFFIRMATION" />
            </>
        )
    },
    {
        id: 'one-photo', name: 'One Photo', content: () => (
            <>
                <Prompt text="TODAY'S PHOTO" />
                <Prompt text="THE STORY BEHIND THIS PHOTO ..." />
            </>
        )
    },
    {
        id: 'to-do', name: 'To-Do', content: () => (
            <>
                <CheckboxList count={6} />
                <Prompt text="NOTES" />
            </>
        )
    },
    {
        id: 'daily-goal-plan', name: 'Daily Goal Plan', content: () => (
            <>
                <Prompt text="TODAY'S GOAL" />

                <Prompt text="HOW CAN I BREAK THIS GOAL DOWN INTO SMALLER STEPS TODAY?" />
                <Prompt text="TODAY'S PLAN FOR MEETING MY GOAL" />
                <Prompt text="TODAY'S OBSTACLES FOR MEETING MY" />
            </>
        )
    },
    {
        id: 'bullet-journal', name: 'Bullet Journal', content: () => (
            <>
                <Prompt text="MY TOP 3 PRIORITIES FOR TODAY" />
                <View className="flex-row items-center">
                    <NumberedList items={['1.', '2.', '3.']} />
                    <CheckboxList count={3} />
                </View>
                <View className="h-px bg-gray-600 my-4" />
                <Prompt text="TO-DO LIST" />
                <CheckboxList count={5} />
            </>
        )
    },

    {
        id: 'morning', name: 'Morning', content: () => (
            <>
                <Prompt text="I AM GRATEFUL FOR..." />
                <Bullets />
                <Prompt text="WHAT WOULD MAKE TODAY GREAT?" />
                <Prompt text="DAILY AFFIRMATION" />
            </>
        )
    },
    {
        id: 'evening', name: 'Evening', content: () => (
            <>
                <Prompt text="3 AMAZING THINGS THAT HAPPENED TODAY" />
                <NumberedList items={['1.', '2.', '3.']} />
                <Prompt text="HOW COULD I HAVE MADE TODAY EVEN BETTER?" />
            </>
        )
    },
    {
        id: 'weekly', name: 'Weekly', content: () => (
            <>
                <Prompt text="WINS FROM THE PAST WEEK" />
                <Prompt text="CHALLENGES FROM THE PAST WEEK" />
                <Prompt text="MY FOCUS FOR THE COMING WEEK" />
            </>
        )
    },
    {
        id: 'monthly', name: 'Monthly', content: () => (
            <>
                <Prompt text="BIGGEST ACCOMPLISHMENT THIS MONTH" />
                <Prompt text="KEY LESSON LEARNED THIS MONTH" />
                <Prompt text="MY GOAL FOR NEXT MONTH" />
            </>
        )
    },
];

const TemplateDetailScreen = () => {
    const router = useRouter();
    const { initialTemplateId } = useLocalSearchParams();
    const flatListRef = useRef<FlatList>(null);

    const initialIndex = TEMPLATES.findIndex(t => t.id === initialTemplateId);

    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E] justify-between">
            <TouchableOpacity onPress={() => router.back()} className="mt-4 ml-8 mb-6 bg-[#1C1C1E] border border-[#3A3A3C] w-12 h-12 rounded-full items-center justify-center">
                <Ionicons name="chevron-back" size={26} color="white" />
            </TouchableOpacity>

            <FlatList
                ref={flatListRef}
                data={TEMPLATES}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                initialScrollIndex={initialIndex >= 0 ? initialIndex : 0}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                renderItem={({ item }) => (
                    <View style={{ width: width }} className="items-center justify-center p-8">
                        <View className="bg-[#2C2C2E] w-full h-[62vh] rounded-2xl p-4">
                            <View className="flex-row justify-between items-center mb-6">
                                <Text className="text-white text-2xl font-bold">{item.name}</Text>
                                <TouchableOpacity className="bg-[#3A3A3C] px-4 py-1 rounded-full">
                                    <Text className="text-white font-semibold">Edit</Text>
                                </TouchableOpacity>
                            </View>
                            {item.content()}
                        </View>
                    </View>
                )}
            />

            <View className="px-6">
                <TouchableOpacity className="bg-white w-full py-4 rounded-md items-center justify-center mb-3">
                    <Text className="text-black text-lg font-bold">Save to my templates</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-500 w-full py-4 rounded-md items-center justify-center">
                    <Text className="text-white text-lg font-bold">Use now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default TemplateDetailScreen;



//  import { Ionicons } from '@expo/vector-icons';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import React, { useRef } from 'react';
// import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width } = Dimensions.get('window');

// // --- CHANGE 1: Adjusted styling for the Prompt component ---
// const Prompt = ({ text }: { text: string }) => (
//     // The prompt is now a bubble with more padding
//     <View className="bg-gray-700 self-start px-4 py-3 my-2 rounded-2xl">
//         <Text className="text-white text-base">{text}</Text>
//     </View>
// );

// const Bullets = () => (
//     <View className="my-2 ml-4 gap-6">
//         <View className="w-2 h-2 bg-blue-400 rounded-full" />
//         <View className="w-2 h-2 bg-blue-400 rounded-full" />
//         <View className="w-2 h-2 bg-blue-400 rounded-full" />
//     </View>
// );
// const NumberedList = ({ items }: { items: string[] }) => (
//     <View className="my-2 ml-4 gap-1">
//         {items.map(item => <Text key={item} className="text-gray-400 text-base">{item}</Text>)}
//     </View>
// );

// const CheckboxList = ({ count }: { count: number }) => (
//     <View className="my-2 ml-4 gap-2">
//         {Array.from({ length: count }).map((_, i) => (
//             <View key={i} className="flex-row items-center">
//                 {/* --- Adjusted checkbox style --- */}
//                 <View className="w-6 h-6 border-2 border-gray-400 rounded-md mr-2" />
//             </View>
//         ))}
//     </View>
// );

// // --- CHANGE 2: Added a new component for the Bullet Journal's list style ---
// const NumberedCheckboxList = ({ items }: { items: string[] }) => (
//     <View className="my-2 space-y-2">
//         {items.map(item => (
//             <View key={item} className="flex-row items-center">
//                 <View className="w-6 h-6 border-2 border-gray-400 rounded-md mr-3" />
//                 <Text className="text-gray-400 text-lg">{item}</Text>
//             </View>
//         ))}
//     </View>
// );


// // --- CHANGE 3: Added the new templates to the TEMPLATES array ---
// const TEMPLATES = [
//     {
//         id: 'daily-gratitude', name: 'Daily Gratitude', content: () => (
//             <>
//                 <Prompt text="TODAY I AM GRATEFUL FOR:" />
//                 <Bullets />
//                 <Prompt text="SIMPLE DELIGHTS I HAVE ENJOYED LATELY" />
//                 <Bullets />
//                 <Prompt text="3 GOOD THINGS THAT HAPPENED TODAY" />
//                 <NumberedList items={['1.', '2.', '3.']} />
//             </>
//         )
//     },
//     {
//         id: '5-min-am', name: '5 Minute AM', content: () => (
//             <>
//                 <Prompt text="I AM GRATEFUL FOR..." />
//                 <Bullets />
//                 <Prompt text="HOW CAN I MAKE TODAY AMAZING?" />
//                 <Prompt text="DAILY AFFIRMATION" />
//             </>
//         )
//     },
//     {
//         id: 'one-photo', name: 'One Photo', content: () => (
//             <>
//                 <Prompt text="TODAY'S PHOTO" />
//                 <Prompt text="THE STORY BEHIND THIS PHOTO ..." />
//             </>
//         )
//     },
//     // --- New Template: Daily Goal Plan ---
//     {
//         id: 'daily-goal-plan', name: 'Daily Goal Plan', content: () => (
//              <>
//                 <Prompt text="TODAY'S GOAL" />
//                 <Prompt text="HOW CAN I BREAK THIS GOAL DOWN INTO SMALLER STEPS TODAY?" />
//                 <Prompt text="TODAY'S PLAN FOR MEETING MY GOAL" />
//                 <Prompt text="TODAY'S OBSTACLES FOR MEETING MY" />
//             </>
//         )
//     },
//     // --- New Template: Bullet Journal ---
//     {
//         id: 'bullet-journal', name: 'Bullet Journal', content: () => (
//             <>
//                 <Prompt text="MY TOP 3 PRIORITIES FOR TODAY" />
//                 <NumberedCheckboxList items={['1.', '2.', '3.']} />
//                 <View className="h-px bg-gray-600 my-4" />
//                 <Prompt text="TO-DO LIST" />
//                 <CheckboxList count={5} />
//             </>
//         )
//     },
//     // Keep your other templates here if you have them
//     {
//         id: 'to-do', name: 'To-Do', content: () => (
//             <>
//                 <CheckboxList count={6} />
//                 <Prompt text="NOTES" />
//             </>
//         )
//     },
// ];

// const TemplateDetailScreen = () => {
//     const router = useRouter();
//     const { initialTemplateId } = useLocalSearchParams();
//     const flatListRef = useRef<FlatList>(null);

//     const initialIndex = TEMPLATES.findIndex(t => t.id === initialTemplateId);

//     return (
//         <SafeAreaView className="flex-1 bg-black justify-between">
//             {/* The Back button was changed to match the new design */}
//             <TouchableOpacity onPress={() => router.back()} className="absolute top-14 left-4 z-10 bg-gray-800 w-10 h-10 rounded-full items-center justify-center">
//                 <Ionicons name="chevron-back" size={24} color="white" />
//             </TouchableOpacity>

//             <FlatList
//                 ref={flatListRef}
//                 data={TEMPLATES}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 keyExtractor={(item) => item.id}
//                 initialScrollIndex={initialIndex >= 0 ? initialIndex : 0}
//                 getItemLayout={(_, index) => ({
//                     length: width,
//                     offset: width * index,
//                     index,
//                 })}
//                 renderItem={({ item }) => (
//                     // The main card container
//                     <View style={{ width: width }} className="items-center justify-center p-8">
//                         <View className="bg-[#2C2C2E] w-full h-[70vh] rounded-2xl p-4">
//                             <View className="flex-row justify-between items-center mb-6">
//                                 <Text className="text-white text-2xl font-bold">{item.name}</Text>
//                                 <TouchableOpacity className="bg-gray-600 px-4 py-1 rounded-full">
//                                     <Text className="text-white font-semibold">Edit</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             {/* ScrollView for long template content */}
//                             <ScrollView showsVerticalScrollIndicator={false}>
//                                 {item.content()}
//                             </ScrollView>
//                         </View>
//                     </View>
//                 )}
//             />

//             <View className="px-6 pb-6">
//                 <TouchableOpacity className="bg-white w-full py-3 rounded-full items-center justify-center mb-3">
//                     <Text className="text-black text-lg font-bold">Save to my templates</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity className="bg-blue-500 w-full py-3 rounded-full items-center justify-center">
//                     <Text className="text-white text-lg font-bold">Use now</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default TemplateDetailScreen;