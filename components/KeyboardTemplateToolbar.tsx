import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
interface KeyboardTemplateToolbarProps {
    onAddSection: () => void;
    onSelectBodyStyle: () => void;
    onSelectTitleStyle: () => void;
    onSelectSubtitleStyle: () => void;
    onSelectListStyle: () => void;
    onSelectIndentStyle: () => void;
    onSelectNumberedListStyle: () => void;
    onSelectChecklistStyle: () => void;
    onAddDivider: () => void;
    onSelectQuoteStyle: () => void;
    onSelectCodeBlockStyle: () => void;
}

const MenuRow = ({ text, iconName, isDestructive = false, onPress }: { text: string; iconName: any; isDestructive?: boolean, onPress?: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row items-center gap-4">
        <Ionicons name={iconName} size={22} color={isDestructive ? '#EF4444' : 'white'} />
        <Text className={`${isDestructive ? 'text-red-500' : 'text-white'} text-base`}>{text}</Text>
    </TouchableOpacity>
);

const KeyboardTemplateToolbar = ({ onAddSection, onSelectBodyStyle, onSelectTitleStyle, onSelectSubtitleStyle, onSelectListStyle, onSelectIndentStyle, onSelectNumberedListStyle,
    onSelectChecklistStyle, onAddDivider, onSelectQuoteStyle, onSelectCodeBlockStyle }: KeyboardTemplateToolbarProps) => {
    const router = useRouter();
    const [menuView, setMenuView] = useState('main');


    const MainMenu = (
        <>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Body" iconName="pricetag-outline" onPress={onSelectBodyStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Title" iconName="folder-outline" onPress={onSelectTitleStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Subtitle" iconName="copy-outline" onPress={onSelectSubtitleStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="List" iconName="list-outline" onPress={onSelectListStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Indent" iconName="reorder-four-outline" onPress={onSelectIndentStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Heading 6" iconName="text-outline" />
            </MenuOption>
            {/* This option now switches the view state to 'more' */}
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="More..." iconName="ellipsis-horizontal" onPress={() => setMenuView('more')} />
            </MenuOption>
        </>
    );


    const MoreMenu = (
        <>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="More..." iconName="chevron-back-outline" onPress={() => setMenuView('main')} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Numbered List" iconName="list-circle-outline" onPress={onSelectNumberedListStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="CheckList" iconName="list-circle-outline" onPress={onSelectChecklistStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { borderBottomWidth: 1, borderBottomColor: "#454a52", paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Quote" iconName="chatbubble-ellipses-outline" onPress={onSelectQuoteStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Line" iconName="remove-outline" onPress={onAddDivider} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Code Block" iconName="remove-outline" onPress={onSelectCodeBlockStyle} />
            </MenuOption>
            <MenuOption customStyles={{ optionWrapper: { paddingVertical: 10, paddingHorizontal: 15 } }}>
                <MenuRow text="Outdent" iconName="remove-outline" onPress={onSelectCodeBlockStyle} />
            </MenuOption>
        </>
    );

    return (
        <View className=" bg-black p-2">
            <View className="flex-row justify-between items-center mb-2 px-4">
                <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                    <Ionicons name="chevron-down" size={24} color="white" />
                </TouchableOpacity>
                <View className="flex-row items-center gap-6">
                    <TouchableOpacity className='bg-[#3A3A3C] p-2 px-3 rounded-full' onPress={onAddSection}>
                        <Text className="text-white text-sm">ADD SECTION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='h-full w-1.5 bg-gray-700 rounded-full' />
                    </TouchableOpacity>
                    <Menu onClose={() => setMenuView('main')}>
                        <MenuTrigger>
                            <Ionicons name="text" size={24} color="white" />
                        </MenuTrigger>
                        <MenuOptions
                            customStyles={{
                                optionsContainer: {
                                    backgroundColor: "#2C2C2E",
                                    borderRadius: 12,
                                    marginTop: 60,
                                    width: 220,
                                    maxHeight: 320,
                                },
                                optionsWrapper: {
                                    paddingVertical: 5,
                                }
                            }}
                        >
                            <ScrollView keyboardShouldPersistTaps="always">
                                {menuView === 'main' ? MainMenu : MoreMenu}
                            </ScrollView>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>

        </View>

    );
};

export default KeyboardTemplateToolbar;