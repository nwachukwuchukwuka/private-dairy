// import KeyboardTemplateToolbar from '@/components/KeyboardTemplateToolbar';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import { InputAccessoryView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { MenuProvider } from 'react-native-popup-menu';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const NewTemplateScreen = () => {
//     const router = useRouter();
//     const inputAccessoryViewID = 'editEntryInputAccessory';
//     const [value, setValue] = useState('');

//     // const [addSection, setAddSection] = useState(false);
//     const [textStyle, setTextStyle] = useState('body');


//     // const handleAddSection = () => {
//     //     setAddSection(!addSection);
//     // };

//     const handleAddSection = () => {
//         // This now toggles between 'section' and 'body'
//         setTextStyle(prevStyle => prevStyle === 'section' ? 'body' : 'section');
//     };

//     // const handleSelectBodyStyle = () => {
//     //     setAddSection(false);
//     // };

//     const handleSelectBodyStyle = () => {
//         setTextStyle('body');
//     };

//     const handleSelectTitleStyle = () => {
//         setTextStyle('title');
//     };

//     const handleSelectSubtitleStyle = () => {
//         setTextStyle('subtitle');
//     };
//     const handleSelectListStyle = () => {
//         setTextStyle('list');
//     };
//     const handleSelectIndentStyle = () => {
//         setTextStyle('indent');
//     };


//     const getTextInputStyle = () => {
//         const baseStyle = 'text-white h-12 px-4';

//         switch (textStyle) {
//             case 'section':
//                 return `${baseStyle} bg-[#3A3A3C] rounded-2xl`;
//             case 'title':
//                 return `${baseStyle} font-bold text-2xl`;
//             case 'subtitle':
//                 return `${baseStyle} font-bold text-xl`;
//             case 'list':
//                 return `${baseStyle} list-disc`;
//             case 'indent':
//                 return `${baseStyle} ml-4`;
//             default: // 'body'
//                 return baseStyle;
//         }
//     };

//     return (
//         <MenuProvider>
//             <SafeAreaView className="flex-1 bg-black">
//                 <View className="flex-row justify-between items-center p-3">
//                     <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 text-lg">Cancel</Text></TouchableOpacity>
//                     <Text className="text-white font-bold text-lg">Template Editor</Text>
//                     <TouchableOpacity><Text className="text-blue-500 font-bold text-lg">Save</Text></TouchableOpacity>
//                 </View>

//                 <ScrollView contentContainerStyle={{
//                     padding: 16,
//                     paddingBottom: 380,
//                 }}
//                     keyboardShouldPersistTaps="always"
//                 >
//                     <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">NAME</Text>
//                     <TextInput placeholder="Template Name" placeholderTextColor="gray" className="bg-[#1C1C1E] text-white p-3 rounded-lg text-lg mb-8" />

//                     <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">SETTINGS</Text>
//                     <View className="bg-[#1C1C1E] rounded-lg mb-8">
//                         <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
//                             <Text className="text-white text-lg">Show System Reminder</Text>
//                             <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
//                         </View>
//                         <TouchableOpacity className="flex-row justify-between items-center p-3 border-b border-gray-700">
//                             <Text className="text-white text-lg">Journal</Text>
//                             <View className="flex-row items-center">
//                                 <Text className="text-gray-400 text-lg mr-2">(Optional)</Text>
//                                 <Ionicons name="chevron-forward" size={20} color="gray" />
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity className="flex-row justify-between items-center p-3">
//                             <Text className="text-white text-lg">Advanced</Text>
//                             <Ionicons name="chevron-forward" size={20} color="gray" />
//                         </TouchableOpacity>
//                     </View>

//                     <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">TEMPLATE TEXT</Text>

//                     <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 h-[500px]">
//                         <TextInput
//                             value={value}
//                             onChangeText={setValue}
//                             // className={`${addSection ? 'bg-[#3A3A3C] rounded-2xl' : ''} text-white h-12 px-4 `}
//                             className={getTextInputStyle()}
//                             inputAccessoryViewID={inputAccessoryViewID}

//                         />
//                     </View>
//                 </ScrollView>

//                 {Platform.OS === 'ios' && (
//                     <InputAccessoryView nativeID={inputAccessoryViewID}>
//                         <KeyboardTemplateToolbar
//                             onAddSection={handleAddSection}
//                             onSelectBodyStyle={handleSelectBodyStyle}
//                             onSelectTitleStyle={handleSelectTitleStyle}
//                             onSelectSubtitleStyle={handleSelectSubtitleStyle}
//                             onSelectListStyle={handleSelectListStyle}
//                             onSelectIndentStyle={handleSelectIndentStyle}
//                         />
//                     </InputAccessoryView>
//                 )}
//             </SafeAreaView>
//         </MenuProvider>
//     );
// };

// export default NewTemplateScreen;




import KeyboardTemplateToolbar from '@/components/KeyboardTemplateToolbar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { InputAccessoryView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewTemplateScreen = () => {
    const router = useRouter();
    const inputAccessoryViewID = 'editEntryInputAccessory';
    const [value, setValue] = useState('');

    // const [addSection, setAddSection] = useState(false);
    const [textStyle, setTextStyle] = useState('body');
    const [isChecked, setIsChecked] = useState(false);



    // const handleAddSection = () => {
    //     setAddSection(!addSection);
    // };

    const handleAddSection = () => {
        // This now toggles between 'section' and 'body'
        setTextStyle(prevStyle => prevStyle === 'section' ? 'body' : 'section');
    };

    // const handleSelectBodyStyle = () => {
    //     setAddSection(false);
    // };

    const handleSelectBodyStyle = () => {
        setTextStyle('body');
    };

    const handleSelectTitleStyle = () => {
        setTextStyle('title');
    };

    const handleSelectSubtitleStyle = () => {
        setTextStyle('subtitle');
    };
    const handleSelectListStyle = () => {
        setTextStyle('list');
    };
    const handleSelectIndentStyle = () => {
        setTextStyle('indent');
    };
    const handleSelectNumberedListStyle = () => setTextStyle('numbered-list');
    const handleSelectChecklistStyle = () => setTextStyle('checklist');


    const getContainerStyle = () => {
        const baseStyle = 'flex-row items-center h-12 px-4';
        if (textStyle === 'section') {
            return `${baseStyle} bg-[#3A3A3C] rounded-2xl`;
        }
        // When a style is 'indent', we apply padding to the container.
        if (textStyle === 'indent') {
            return `${baseStyle} pl-8`; // Increased padding for indent
        }
        return baseStyle;
    };

    const getTextInputStyle = () => {
        const baseStyle = 'text-white flex-1 h-full'; // Use flex-1 to fill available space
        switch (textStyle) {
            case 'title':
                return `${baseStyle} font-bold text-2xl`;
            case 'subtitle':
                return `${baseStyle} font-bold text-xl`;
            default: // 'body', 'list', etc.
                return `${baseStyle} text-lg`; // Default text size
        }
    };


    // const getTextInputStyle = () => {
    //     const baseStyle = 'text-white h-12 px-4';

    //     switch (textStyle) {
    //         case 'section':
    //             return `${baseStyle} bg-[#3A3A3C] rounded-2xl`;
    //         case 'title':
    //             return `${baseStyle} font-bold text-2xl`;
    //         case 'subtitle':
    //             return `${baseStyle} font-bold text-xl`;
    //         case 'list':
    //             return `${baseStyle} list-disc`;
    //         case 'indent':
    //             return `${baseStyle} ml-4`;
    //         default: // 'body'
    //             return baseStyle;
    //     }
    // };

    return (
        <MenuProvider>
            <SafeAreaView className="flex-1 bg-black">
                <View className="flex-row justify-between items-center p-3">
                    <TouchableOpacity onPress={() => router.back()}><Text className="text-blue-500 text-lg">Cancel</Text></TouchableOpacity>
                    <Text className="text-white font-bold text-lg">Template Editor</Text>
                    <TouchableOpacity><Text className="text-blue-500 font-bold text-lg">Save</Text></TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={{
                    padding: 16,
                    paddingBottom: 380,
                }}
                    keyboardShouldPersistTaps="always"
                >
                    <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">NAME</Text>
                    <TextInput placeholder="Template Name" placeholderTextColor="gray" className="bg-[#1C1C1E] text-white p-3 rounded-lg text-lg mb-8" />

                    <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">SETTINGS</Text>
                    <View className="bg-[#1C1C1E] rounded-lg mb-8">
                        <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                            <Text className="text-white text-lg">Show System Reminder</Text>
                            <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                        </View>
                        <TouchableOpacity className="flex-row justify-between items-center p-3 border-b border-gray-700">
                            <Text className="text-white text-lg">Journal</Text>
                            <View className="flex-row items-center">
                                <Text className="text-gray-400 text-lg mr-2">(Optional)</Text>
                                <Ionicons name="chevron-forward" size={20} color="gray" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row justify-between items-center p-3">
                            <Text className="text-white text-lg">Advanced</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">TEMPLATE TEXT</Text>

                    {/* <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 h-[500px]">
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            // className={`${addSection ? 'bg-[#3A3A3C] rounded-2xl' : ''} text-white h-12 px-4 `}
                            className={getTextInputStyle()}
                            inputAccessoryViewID={inputAccessoryViewID}

                        />
                    </View> */}

                    <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 h-[500px]">
                        <View className={getContainerStyle()}>
                            {textStyle === 'list' && (
                                <Text className="text-white text-lg mr-2">{"\u2022"}</Text>
                            )}
                            {textStyle === 'numbered-list' && (
                                <Text className="text-white text-lg mr-2">1.</Text>
                            )}
                            {textStyle === 'checklist' && (
                                <TouchableOpacity onPress={() => setIsChecked(!isChecked)} className="mr-3">
                                    <Ionicons name={isChecked ? "checkbox" : "square-outline"} size={24} color={isChecked ? "#34C759" : "white"} />
                                </TouchableOpacity>
                            )}

                            <TextInput
                                value={value}
                                onChangeText={setValue}
                                className={getTextInputStyle()}
                                inputAccessoryViewID={inputAccessoryViewID}

                            />

                        </View>
                    </View>
                </ScrollView>

                {Platform.OS === 'ios' && (
                    <InputAccessoryView nativeID={inputAccessoryViewID}>
                        <KeyboardTemplateToolbar
                            onAddSection={handleAddSection}
                            onSelectBodyStyle={handleSelectBodyStyle}
                            onSelectTitleStyle={handleSelectTitleStyle}
                            onSelectSubtitleStyle={handleSelectSubtitleStyle}
                            onSelectListStyle={handleSelectListStyle}
                            onSelectIndentStyle={handleSelectIndentStyle}
                            onSelectNumberedListStyle={handleSelectNumberedListStyle}
                            onSelectChecklistStyle={handleSelectChecklistStyle}
                        />
                    </InputAccessoryView>
                )}
            </SafeAreaView>
        </MenuProvider>
    );
};

export default NewTemplateScreen;