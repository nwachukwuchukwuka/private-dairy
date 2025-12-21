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

//     const [textStyle, setTextStyle] = useState('body');
//     const [isChecked, setIsChecked] = useState(false);

//     const handleAddSection = () => {
//         setTextStyle(prevStyle => prevStyle === 'section' ? 'body' : 'section');
//     };

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
//     const handleSelectNumberedListStyle = () => setTextStyle('numbered-list');
//     const handleSelectChecklistStyle = () => setTextStyle('checklist');


//     const getContainerStyle = () => {
//         const baseStyle = 'flex-row items-center h-12 px-4';
//         if (textStyle === 'section') {
//             return `${baseStyle} bg-[#3A3A3C] rounded-2xl`;
//         }
//         if (textStyle === 'indent') {
//             return `${baseStyle}  ml-4`;
//         }
//         return baseStyle;
//     };

//     const getTextInputStyle = () => {
//         const baseStyle = 'text-white flex-1 h-full';
//         switch (textStyle) {
//             case 'title':
//                 return `${baseStyle} font-bold text-2xl`;
//             case 'subtitle':
//                 return `${baseStyle} font-bold text-xl`;
//             default:
//                 return `${baseStyle} text-lg`;
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

//                     {/* <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 h-[500px]">
//                         <TextInput
//                             value={value}
//                             onChangeText={setValue}
//                             // className={`${addSection ? 'bg-[#3A3A3C] rounded-2xl' : ''} text-white h-12 px-4 `}
//                             className={getTextInputStyle()}
//                             inputAccessoryViewID={inputAccessoryViewID}

//                         />
//                     </View> */}

//                     <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 h-[500px]">
//                         <View className={getContainerStyle()}>
//                             {textStyle === 'list' && (
//                                 <Text className="text-white text-lg mr-2">{"\u2022"}</Text>
//                             )}
//                             {textStyle === 'numbered-list' && (
//                                 <Text className="text-white text-lg mr-2">1.</Text>
//                             )}
//                             {textStyle === 'checklist' && (
//                                 <TouchableOpacity onPress={() => setIsChecked(!isChecked)} className="mr-3">
//                                     <Ionicons name={isChecked ? "checkbox" : "square-outline"} size={24} color={isChecked ? "#34C759" : "white"} />
//                                 </TouchableOpacity>
//                             )}

//                             <TextInput
//                                 value={value}
//                                 onChangeText={setValue}
//                                 className={getTextInputStyle()}
//                                 inputAccessoryViewID={inputAccessoryViewID}

//                             />

//                         </View>
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
//                             onSelectNumberedListStyle={handleSelectNumberedListStyle}
//                             onSelectChecklistStyle={handleSelectChecklistStyle}
//                         />
//                     </InputAccessoryView>
//                 )}
//             </SafeAreaView>
//         </MenuProvider>
//     );
// };

// export default NewTemplateScreen;

// import KeyboardTemplateToolbar from '@/components/KeyboardTemplateToolbar';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React, { useEffect, useRef, useState } from 'react';
// import { InputAccessoryView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { MenuProvider } from 'react-native-popup-menu';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const TemplateLine = ({ item, onChangeText, onEnterPress, onFocus, inputRef, getContainerStyle, getTextInputStyle, onToggleCheck, getInputAccessoryID }) => {
//     return (
//         <View className={getContainerStyle(item.style)}>
//             {item.style === 'list' && (
//                 <Text className="text-white text-lg mr-2">{"\u2022"}</Text>
//             )}
//             {item.style === 'numbered-list' && (
//                 <Text className="text-white text-lg mr-2">1.</Text>
//             )}
//             {item.style === 'checklist' && (
//                 <TouchableOpacity onPress={() => onToggleCheck(item.key)} className="mr-3">
//                     <Ionicons name={item.isChecked ? "checkbox" : "square-outline"} size={24} color={item.isChecked ? "#34C759" : "white"} />
//                 </TouchableOpacity>
//             )}
//             <TextInput
//                 ref={inputRef}
//                 value={item.value}
//                 onChangeText={(text) => onChangeText(item.key, text)}
//                 className={getTextInputStyle(item.style)}
//                 // inputAccessoryViewID={'editEntryInputAccessory'}
//                 inputAccessoryViewID={getInputAccessoryID(item.key)}
//                 onSubmitEditing={() => onEnterPress(item)}
//                 onFocus={() => onFocus(item.key)}
//             />
//         </View>
//     );
// };


// const NewTemplateScreen = () => {
//     const router = useRouter();
//     // const inputAccessoryViewID = 'editEntryInputAccessory';
//     const getInputAccessoryID = (key: number) => `editEntryInputAccessory_${key}`;

//     const [inputs, setInputs] = useState([
//         { key: Date.now(), value: '', style: 'body', isChecked: false }
//     ]);

//     const [focusedInputKey, setFocusedInputKey] = useState(null);
//     const inputRefs = useRef([]);

// useEffect(() => {
//     if (inputs.length > 1) {
//         const lastInputRef = inputRefs.current[inputs.length - 1];
//         if (lastInputRef) {
//             lastInputRef.focus();
//         }
//     }
// }, [inputs.length]);


//     const setStyleForFocusedInput = (newStyle) => {
//         if (focusedInputKey === null) return;
//         setInputs(inputs.map(input =>
//             input.key === focusedInputKey ? { ...input, style: newStyle } : input
//         ));
//     };

//     const handleAddSection = () => {
//         if (focusedInputKey === null) return;
//         setInputs(inputs.map(input =>
//             input.key === focusedInputKey ? { ...input, style: input.style === 'section' ? 'body' : 'section' } : input
//         ));
//     };
//     const handleSelectBodyStyle = () => setStyleForFocusedInput('body');
//     const handleSelectTitleStyle = () => setStyleForFocusedInput('title');
//     const handleSelectSubtitleStyle = () => setStyleForFocusedInput('subtitle');
//     const handleSelectListStyle = () => setStyleForFocusedInput('list');
//     const handleSelectNumberedListStyle = () => setStyleForFocusedInput('numbered-list');
//     const handleSelectChecklistStyle = () => setStyleForFocusedInput('checklist');

//     const handleToggleCheck = (key) => {
//         setInputs(inputs.map(input =>
//             input.key === key ? { ...input, isChecked: !input.isChecked } : input
//         ));
//     };

//     const handleEnterPress = (currentItem) => {
//         const newInputs = [...inputs];
//         const newKey = Date.now();
//         newInputs.push({ key: newKey, value: '', style: currentItem.style, isChecked: false });
//         setInputs(newInputs);
//     };

//     const handleInputChange = (key, text) => {
//         setInputs(inputs.map(input =>
//             input.key === key ? { ...input, value: text } : input
//         ));
//     };

//     const getContainerStyle = (style) => {
//         const baseStyle = 'flex-row items-center min-h-[48px] px-4';
//         if (style === 'section') {
//             return `${baseStyle} bg-[#3A3A3C] rounded-2xl`;
//         }
//         return baseStyle;
//     };

//     const getTextInputStyle = (style) => {
//         const baseStyle = 'text-white flex-1 h-full py-2';
//         switch (style) {
//             case 'title':
//                 return `${baseStyle} font-bold text-2xl`;
//             case 'subtitle':
//                 return `${baseStyle} font-bold text-xl`;
//             default:
//                 return `${baseStyle} text-lg`;
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

//                 <ScrollView
//                     contentContainerStyle={{ padding: 16, paddingBottom: 380, }}
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

//                     <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 min-h-[500px]">
//                         {inputs.map((item, index) => (
//                             <TemplateLine
//                                 key={item.key}
//                                 item={item}
//                                 onChangeText={handleInputChange}
//                                 onEnterPress={handleEnterPress}
//                                 onFocus={setFocusedInputKey}
//                                 onToggleCheck={handleToggleCheck}
//                                 inputRef={el => inputRefs.current[index] = el}
//                                 getContainerStyle={getContainerStyle}
//                                 getTextInputStyle={getTextInputStyle}
//                                 getInputAccessoryID={getInputAccessoryID}
//                             />
//                         ))}
//                     </View>
//                 </ScrollView>

//                 {/* {Platform.OS === 'ios' && (
//                     <InputAccessoryView nativeID={inputAccessoryViewID}>
//                         <View>
//                             <KeyboardTemplateToolbar
//                                 onAddSection={handleAddSection}
//                                 onSelectBodyStyle={handleSelectBodyStyle}
//                                 onSelectTitleStyle={handleSelectTitleStyle}
//                                 onSelectSubtitleStyle={handleSelectSubtitleStyle}
//                                 onSelectListStyle={handleSelectListStyle}
//                                 onSelectIndentStyle={() => { }} // Indent is not yet implemented in this multi-line structure
//                                 onSelectNumberedListStyle={handleSelectNumberedListStyle}
//                                 onSelectChecklistStyle={handleSelectChecklistStyle}
//                             />
//                         </View>
//                     </InputAccessoryView>
//                 )} */}
//                 {Platform.OS === 'ios' && inputs.map((item) => (
//                     <InputAccessoryView key={item.key} nativeID={getInputAccessoryID(item.key)}>
//                         <KeyboardTemplateToolbar
//                             onAddSection={handleAddSection}
//                             onSelectBodyStyle={handleSelectBodyStyle}
//                             onSelectTitleStyle={handleSelectTitleStyle}
//                             onSelectSubtitleStyle={handleSelectSubtitleStyle}
//                             onSelectListStyle={handleSelectListStyle}
//                             onSelectIndentStyle={() => { }} // Indent is not yet implemented
//                             onSelectNumberedListStyle={handleSelectNumberedListStyle}
//                             onSelectChecklistStyle={handleSelectChecklistStyle}
//                         />
//                     </InputAccessoryView>
//                 ))}
//             </SafeAreaView>
//         </MenuProvider>
//     );
// };

// export default NewTemplateScreen;


import KeyboardTemplateToolbar from '@/components/KeyboardTemplateToolbar';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { InputAccessoryView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaView } from 'react-native-safe-area-context';
// this is mark
const TemplateLine = ({ item, index, onChangeText, onEnterPress, onBackspaceDelete, onFocus, inputRef, getContainerStyle, getTextInputStyle, onToggleCheck, getInputAccessoryID, getNumber, isFocused }) => {
    return (
        <View className={getContainerStyle(item.style)} style={{
            marginBottom: 10
        }}>
            {item.style === 'list' && (
                <Text className=" -ml-4"><Entypo name="dot-single" size={28} color="blue" /></Text>
            )}
            {item.style === 'numbered-list' && (
                <Text className="text-white text-lg mr-2">{getNumber(index)}.</Text>
            )}
            {item.style === 'checklist' && (
                <TouchableOpacity onPress={() => onToggleCheck(item.key)} className="mr-3">
                    <Ionicons name={item.isChecked ? "checkbox" : "square-outline"} size={24} color={item.isChecked ? "#34C759" : "white"} />
                </TouchableOpacity>
            )}



            <TextInput
                ref={inputRef}
                value={item.value}
                onChangeText={(text) => onChangeText(item.key, text)}
                className={getTextInputStyle(item.style)}
                inputAccessoryViewID={getInputAccessoryID(item.key)}
                // onSubmitEditing={() => onEnterPress(item, index)}
                onFocus={() => onFocus(item.key)}
                // returnKeyType="next"
                returnKeyType="default"
                onKeyPress={(e) => onBackspaceDelete(e, item, index)}
                multiline
            />

            {isFocused && (
                <View className="h-0.5 bg-gray-600 mt-2" /> // Adjust color, thickness, margin as needed
            )}
        </View>
    );
};

const NewTemplateScreen = () => {
    const router = useRouter();
    const getInputAccessoryID = (key: number) => `editEntryInputAccessory_${key}`;

    const [inputs, setInputs] = useState([
        { key: Date.now(), value: '', style: 'body', isChecked: false }
    ]);

    const [focusedInputKey, setFocusedInputKey] = useState<number | null>(null);
    const [justInserted, setJustInserted] = useState(false);
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        if (justInserted && focusedInputKey !== null) {
            const focusedIndex = inputs.findIndex(i => i.key === focusedInputKey);
            if (focusedIndex !== -1 && focusedIndex + 1 < inputs.length) {
                const nextRef = inputRefs.current[focusedIndex + 1];
                if (nextRef) {
                    nextRef.focus();
                    setJustInserted(false);
                }
            }
        }
    }, [inputs, focusedInputKey, justInserted]);

    const setStyleForFocusedInput = (newStyle: string) => {
        if (focusedInputKey === null) return;
        setInputs(inputs.map(input =>
            input.key === focusedInputKey ? { ...input, style: newStyle } : input
        ));
    };

    const handleAddSection = () => {
        if (focusedInputKey === null) return;
        setInputs(inputs.map(input =>
            input.key === focusedInputKey ? { ...input, style: input.style === 'section' ? 'body' : 'section' } : input
        ));
    };

    const handleSelectBodyStyle = () => setStyleForFocusedInput('body');
    const handleSelectTitleStyle = () => setStyleForFocusedInput('title');
    const handleSelectSubtitleStyle = () => setStyleForFocusedInput('subtitle');
    const handleSelectListStyle = () => setStyleForFocusedInput('list');
    const handleSelectNumberedListStyle = () => setStyleForFocusedInput('numbered-list');
    const handleSelectChecklistStyle = () => setStyleForFocusedInput('checklist');

    const handleSelectQuoteStyle = () => setStyleForFocusedInput('quote');
    const handleSelectCodeBlockStyle = () => setStyleForFocusedInput('code-block');

    const handleToggleCheck = (key: number) => {
        setInputs(inputs.map(input =>
            input.key === key ? { ...input, isChecked: !input.isChecked } : input
        ));
    };

    const handleEnterPress = (currentItem: any, currentIndex: number) => {
        const newKey = Date.now();
        const newInput = { key: newKey, value: '', style: 'body', isChecked: false };

        setInputs(prevInputs => {
            const newInputs = [...prevInputs];
            newInputs.splice(currentIndex + 1, 0, newInput);
            return newInputs;
        });

        setJustInserted(true);
    };


    const handleBackspaceDelete = (e: KeyboardEvent, item: any, currentIndex: number) => {
        const { key } = e.nativeEvent;
        // Handle Enter key to create new input
        if (key === 'Enter') {
            // Prevent adding newline in the current input
            e.preventDefault();
            handleEnterPress(item, currentIndex);
        }

        // Handle Backspace key to delete input if empty
        if (key === 'Backspace') {
            if (item.value === '' && inputs.length > 1) {
                e.preventDefault();
                setInputs(prevInputs => {
                    const newInputs = [...prevInputs];
                    newInputs.splice(currentIndex, 1);
                    return newInputs;
                });
                if (currentIndex > 0) {
                    const prevRef = inputRefs.current[currentIndex - 1];
                    if (prevRef) {
                        prevRef.focus();
                    }
                }
            }
        }
    };

    const getNumber = (index: number) => {
        let count = 0;
        for (let i = 0; i <= index; i++) {
            const current = inputs[i];
            if (current.style === 'numbered-list') {
                count++;
            }
            if (current.style === 'section') {
                count = 0; // Reset count after a section
            }
        }
        return count;
    };

    const handleInputChange = (key: number, text: string) => {
        const trimmedText = text.replace(/\n+$/, '');
        setInputs(inputs.map(input =>
            input.key === key ? { ...input, value: trimmedText } : input
        ));
    };

    const handleAddDivider = () => {
        if (focusedInputKey === null) return;

        const focusedIndex = inputs.findIndex(i => i.key === focusedInputKey);
        if (focusedIndex === -1) return;

        const newKey = Date.now();
        const newDivider = { key: newKey, value: '', style: 'divider', isChecked: false };

        setInputs(prevInputs => {
            const newInputs = [...prevInputs];
            newInputs.splice(focusedIndex + 1, 0, newDivider);
            return newInputs;
        });

        // Optionally focus the next non-divider line or do nothing
        setJustInserted(true); // Will focus next if needed
    };

    // const handleSelectQuoteStyle = () => {
    //     if (focusedInputKey === null) return;
    //     setInputs(inputs.map(input =>
    //         input.key === focusedInputKey ? { ...input, style: 'quote' } : input
    //     ));
    // };


    // const getContainerStyle = (style: string) => {
    //     const baseStyle = 'flex-row items-center min-h-[48px] px-4';
    //     if (style === 'section') {
    //         return `${baseStyle} bg-[#3A3A3C] rounded-2xl `;
    //     }
    //     return baseStyle;
    // };

    const getContainerStyle = (style: string) => {
        const baseStyle = 'flex-row items-center min-h-[48px] px-4';
        if (style === 'section') {
            return `${baseStyle} bg-[#3A3A3C] rounded-2xl `;
        }
        if (style === 'divider') {
            return 'flex-row items-center px-4 border-b border-gray-600';
        }
        if (style === 'quote') {
            return `${baseStyle} border-l-4 border-blue-500 pl-4`;
        }
        if (style === 'code-block') {
            return `${baseStyle} bg-gray-800 border border-gray-600 rounded-lg p-3`; // Gray background + border
        }
        return baseStyle;
    };

    const getTextInputStyle = (style: string) => {
        const baseStyle = 'text-white uppercase flex-1 h-full py-2';
        switch (style) {
            case 'title':
                return `${baseStyle} font-bold text-2xl capitalize`;
            case 'subtitle':
                return `${baseStyle} font-bold text-xl capitalize`;
            case 'code-block':
                return 'text-gray-300 font-mono text-base bg-transparent p-2';
            default:
                return `${baseStyle} text-lg`;
        }
    };

    return (
        <MenuProvider>
            <SafeAreaView className="flex-1 bg-black">
                <View className="flex-row justify-between items-center p-3">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className="text-blue-500 text-lg">Cancel</Text>
                    </TouchableOpacity>
                    <Text className="text-white font-bold text-lg">Template Editor</Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500 font-bold text-lg">Save</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    contentContainerStyle={{ padding: 16, paddingBottom: 380 }}
                    keyboardShouldPersistTaps="always"
                >
                    <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">NAME</Text>
                    <TextInput
                        placeholder="Template Name"
                        placeholderTextColor="gray"
                        className="bg-[#1C1C1E] text-white p-3 rounded-lg text-lg mb-8"
                    />

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

                    <View className="bg-[#1C1C1E] rounded-lg mb-8 p-3 min-h-[500px]">
                        {inputs.map((item, index) => (
                            <TemplateLine
                                key={item.key}
                                item={item}
                                index={index}
                                onChangeText={handleInputChange}
                                onEnterPress={handleEnterPress}
                                onBackspaceDelete={handleBackspaceDelete}
                                onFocus={setFocusedInputKey}
                                onToggleCheck={handleToggleCheck}
                                inputRef={el => { inputRefs.current[index] = el; }}
                                getContainerStyle={getContainerStyle}
                                getTextInputStyle={getTextInputStyle}
                                getInputAccessoryID={getInputAccessoryID}
                                getNumber={getNumber}
                                isFocused={item.key === focusedInputKey}
                            />
                        ))}
                    </View>
                </ScrollView>

                {Platform.OS === 'ios' && inputs.map((item) => (
                    <InputAccessoryView key={item.key} nativeID={getInputAccessoryID(item.key)}>
                        <KeyboardTemplateToolbar
                            onAddSection={handleAddSection}
                            onSelectBodyStyle={handleSelectBodyStyle}
                            onSelectTitleStyle={handleSelectTitleStyle}
                            onSelectSubtitleStyle={handleSelectSubtitleStyle}
                            onSelectListStyle={handleSelectListStyle}
                            onSelectIndentStyle={() => { }}
                            onSelectNumberedListStyle={handleSelectNumberedListStyle}
                            onSelectChecklistStyle={handleSelectChecklistStyle}
                            onAddDivider={handleAddDivider}
                            onSelectQuoteStyle={handleSelectQuoteStyle}
                            onSelectCodeBlockStyle={handleSelectCodeBlockStyle}
                        />
                    </InputAccessoryView>
                ))}
            </SafeAreaView>
        </MenuProvider>
    );
};

export default NewTemplateScreen;