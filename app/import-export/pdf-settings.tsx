import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';

const NavSettingRow = ({ label, value }: { label: string; value: string }) => (
    <TouchableOpacity className="flex-row justify-between items-center py-3 px-4 border-b border-gray-800 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <View className="flex-row items-center">
            <Text className="text-gray-400 text-lg mr-2">{value}</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
        </View>
    </TouchableOpacity>
);

const SwitchSettingRow = ({ label, enabled }: { label: string; enabled: boolean }) => (
    <View className="flex-row justify-between items-center py-3 px-4 border-b border-gray-800 last:border-b-0">
        <Text className="text-white text-lg">{label}</Text>
        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" value={enabled} />
    </View>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View className="mb-8">
        <Text className="text-gray-400 uppercase font-bold mb-2 ml-4">{title}</Text>
        <View className="bg-[#1C1C1E] rounded-lg">{children}</View>
    </View>
);


const PdfSettingsScreen = () => {
    const router = useRouter()

    return (
        <ScrollView className="flex-1 bg-black px-4 pt-4">
            <View className="flex-row items-center gap-4 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10 ">
                    <Ionicons name="chevron-back" size={28} color="#007AFF" />
                    <Text className="text-blue-500 text-xl">Import/Export</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-xl font-bold">Journal</Text>
                </View>
            </View>
            <View className="bg-[#1C1C1E] rounded-lg mb-8 mt-14">
                <NavSettingRow label="Page Size" value="8.5 x 11" />
            </View>

            <Section title="Font">
                <NavSettingRow label="Font" value="Lato-Regular" />
                <NavSettingRow label="Font Size" value="10" />
            </Section>

            <Section title="Embeds">
                <SwitchSettingRow label="Text" enabled={true} />
                <SwitchSettingRow label="Photos" enabled={true} />
                <SwitchSettingRow label="Videos" enabled={false} />
                <SwitchSettingRow label="Audio" enabled={false} />
                <SwitchSettingRow label="PDF" enabled={true} />
            </Section>

            <Section title="Metadata">
                <SwitchSettingRow label="Date" enabled={true} />
                <SwitchSettingRow label="Time" enabled={true} />
                <SwitchSettingRow label="Location" enabled={true} />
                <SwitchSettingRow label="Weather" enabled={false} />
                <SwitchSettingRow label="Tags" enabled={false} />
                <SwitchSettingRow label="Journal" enabled={false} />
            </Section>

            <Section title="Other">
                <SwitchSettingRow label="Page Numbers" enabled={true} />
                <SwitchSettingRow label="Inner Margins" enabled={false} />
                <SwitchSettingRow label="Cover Page" enabled={false} />
                <SwitchSettingRow label="Monthly Stats Page" enabled={false} />
                <SwitchSettingRow label="Maps" enabled={false} />
            </Section>
        </ScrollView>
    );
};

export default PdfSettingsScreen;