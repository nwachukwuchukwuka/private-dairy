import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <View className="mb-8">
        <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">{title}</Text>
        <View className="bg-[#1C1C1E] rounded-lg">{children}</View>
    </View>
);

const AdvancedSettingsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Advanced</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <Section title="In-app Camera"><SwitchRow label="Save a copy to Photo Library" enabled={false} /></Section>
                <Section title="Video"><SwitchRow label="Auto-play Video" enabled={true} /></Section>
                <Section title="Audio">
                    <SwitchRow label="Auto transcribe to text" enabled={true} />
                    <SwitchRow label="Auto Insert Text to Entry" enabled={true} />
                </Section>
                <Section title="Weather"><SwitchRow label="Fahrenheit" enabled={true} /></Section>
                <Section title="Appearance">
                    <SwitchRow label="Show web previews for code blocks" enabled={false} />
                    <SwitchRow label="Show pinned entries in All Entries" enabled={false} />
                    <NavRow label="New Entry Button" value="Right" onPress={() => router.push('/settings/advanced/new-entry-button')} />
                </Section>
                <Section title="Search">
                    <ActionRow label="Rebuild Index" />
                    <SwitchRow label="Spotlight Search Entries" enabled={false} />
                    <SwitchRow label="Spotlight Search Tags & Places" enabled={true} />
                </Section>
                <Section title="">
                    <SwitchRow label="Usage Statistics" enabled={true} />
                    <SwitchRow label="Create Tags from Hashtags" enabled={true} />
                    <ActionRow label="Restore Purchases" />
                </Section>
            </ScrollView>
        </SafeAreaView>
    );
};
const SwitchRow = ({ label, enabled }: { label: string, enabled: boolean }) => (
    <View className="flex-row justify-between items-center p-3 border-b border-gray-700 last:border-b-0"><Text className="text-white text-lg">{label}</Text><Switch value={enabled} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" /></View>
);
const NavRow = ({ label, value, onPress }: { label: string, value: string, onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center p-3"><Text className="text-white text-lg">{label}</Text><View className="flex-row items-center"><Text className="text-gray-400 text-lg mr-2">{value}</Text><Ionicons name="chevron-forward" size={20} color="gray" /></View></TouchableOpacity>
);
const ActionRow = ({ label }: { label: string }) => (
    <TouchableOpacity className="p-3 border-b border-gray-700 last:border-b-0"><Text className="text-blue-500 text-lg">{label}</Text></TouchableOpacity>
);
export default AdvancedSettingsScreen;