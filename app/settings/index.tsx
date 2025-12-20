import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ValueRow = ({ icon, title, value, onPress }: { icon: any, title: string, value: string, onPress?: () => void }) => (
    <TouchableOpacity className="flex-row items-center py-3 px-4 border-b border-gray-700 last:border-b-0" onPress={onPress}>
        <View className="w-8 items-center mr-3">
            <Ionicons name={icon} size={22} color="gray" />
        </View>
        <Text className="text-white text-lg flex-1">{title}</Text>
        <Text className="text-gray-400 text-lg mr-2">{value}</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
);

const InfoRow = ({ icon, title, value }: { icon: any, title: string, value: string }) => (
    <View className="flex-row items-center py-3 px-4 border-b border-gray-700 last:border-b-0">
        <View className="w-8 items-center mr-3">
            <Ionicons name={icon} size={22} color="gray" />
        </View>
        <Text className="text-white text-lg flex-1">{title}</Text>
        <Text className="text-gray-400 text-lg">{value}</Text>
    </View>
);

const NavigationRow = ({ icon, title, onPress }: { icon: any, title: string, onPress?: () => void }) => (
    <TouchableOpacity className="flex-row items-center py-3 px-4 border-b border-gray-700 last:border-b-0" onPress={onPress}>
        <View className="w-8 items-center mr-3">
            <Ionicons name={icon} size={22} color="gray" />
        </View>
        <Text className="text-white text-lg flex-1">{title}</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
);

const Section = ({ children }: { children: React.ReactNode }) => (
    <View className="bg-[#1C1C1E] rounded-xl mb-8">{children}</View>
);


const SettingsScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#000]" edges={['top', 'bottom']}>
            {/* <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#000' },
                    headerTitle: () => (
                        <Text className="text-white font-semibold text-lg">Settings</Text>
                    ),
                    headerLeft: () => null,
                    headerRight: () => (
                        <TouchableOpacity className='' onPress={() => router.back()}>
                            <Text className="text-blue-500 font-semibold text-lg">Done</Text>
                            <AntDesign name="check" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                }}
            /> */}

            <View className="flex-row items-center p-3 relative">
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Settings</Text>
                </View>
                <TouchableOpacity className="ml-auto"><Text className="text-blue-500 font-bold text-lg" onPress={() => router.back()}>Save</Text></TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} className="bg-black px-4">
                <View className=" my-7 ">
                    <View className='pt-4 bg-[#1C1C1E] rounded-xl p-4'>

                        <TouchableOpacity className="flex-row items-center mb-4" onPress={() => router.push('/settings/edit-account')}>
                            <View className="w-12 h-12 bg-pink-400 rounded-full items-center justify-center mr-4">
                                <Text className="text-white text-xl font-bold">N</Text>
                            </View>
                            <Text className="text-white text-lg">nwachukwuadinoyi@gmail.com</Text>
                        </TouchableOpacity>

                        <View className="flex-row justify-between items-center pt-3 border-t border-[#3A3A3C]">
                            <Text className="text-white text-lg">Account Status</Text>
                            <Text className="text-gray-400 text-lg">Basic</Text>
                        </View>

                        <TouchableOpacity className="bg-indigo-600 -m-4 p-4 rounded-b-xl flex-row items-center gap-4 mt-4" onPress={() => router.push('/more/premium')}>
                            <View className="w-8 h-8 bg-white rounded-full items-center justify-center">
                                <Ionicons name="star" size={20} color="#5856D6" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-white font-semibold text-lg">Get Day One Premium</Text>
                                <Text className="text-indigo-200 text-sm mt-1">Encrypted Sync, backup, unlimited photos, Mac App, and much more...</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text className="text-gray-500 text-xs mt-3 mb-8 px-4">
                        Privacy, security, reliability — Day One was built from the ground up to safeguard your memories.
                    </Text>
                </View>

                <Section>
                    <ValueRow icon="cloud-outline" title="Sync" value="On" onPress={() => router.push('/settings/sync')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <InfoRow icon="sync-outline" title="Last Sync" value="Dec 3, 2025 at 2:10 AM" />
                </Section>

                <Section>
                    <ValueRow icon="book-outline" title="Journals" value="4" onPress={() => router.push('/settings/journals')} />
                </Section>
                <Section>
                    <NavigationRow icon="help-circle-outline" title="Prompt Packs" onPress={() => router.push('/settings/prompt-packs')} />
                </Section>

                <Section>
                    <NavigationRow icon="chatbubble-ellipses-outline" title="SMS to Journal" onPress={() => router.push('/settings/sms-to-journal')} />
                </Section>

                <Section>
                    <NavigationRow icon="notifications-outline" title="Reminders" onPress={() => router.push('/settings/reminders')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="help-circle-outline" title="Daily Prompts" onPress={() => router.push('/settings/daily-prompt')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <ValueRow icon="reader-outline" title="Templates" value="0" onPress={() => router.push('/more/templates')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="calendar-outline" title="On This Day" onPress={() => router.push('/settings/on-this-day')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="cog-outline" title="Apple Intelligence" onPress={() => router.push('/settings/apple-intelligence')} />
                </Section>

                <Section>
                    <ValueRow icon="time-outline" title="Appearance" value="Lato System Font Size" onPress={() => router.push('/settings/appearance')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="lock-closed-outline" title="Passcode & Face ID" onPress={() => router.push('/settings/passcode')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="archive-outline" title="Import / Export" />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="print-outline" title="Book Printing" />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="apps-outline" title="App Icon" onPress={() => router.push('/settings/app-icon')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="settings-outline" title="Advanced" onPress={() => router.push('/settings/advanced')} />
                </Section>

                <Section>
                    <NavigationRow icon="location-outline" title="Location History" onPress={() => router.push('/settings/location-history')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="send-outline" title="Email to Journal" onPress={() => router.push('/settings/email-to-journal')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="heart-outline" title="Apple Health" />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="flash-outline" title="Integrations" onPress={() => router.push('/settings/integrations')} />
                </Section>

                <Section>
                    <NavigationRow icon="help-buoy-outline" title="Support" onPress={() => router.push('/settings/support')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="flask-outline" title="Labs" onPress={() => router.push('/settings/labs')} />
                    <View className="border-b border-[#3A3A3C]" />
                    <NavigationRow icon="information-circle-outline" title="About" onPress={() => router.push('/settings/about')} />
                </Section>

                <View className="items-center justify-center mt-8">
                    <View className="w-16 h-16 bg-[#1C1C1E] items-center justify-center rounded-2xl mb-4">
                        <Feather name="bookmark" size={32} color="gray" />
                    </View>
                    <Text className="text-gray-400 text-2xl font-light tracking-[8px]">DAY ONE</Text>
                    <Text className="text-gray-600 text-sm tracking-[4px]">JOURNAL</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingsScreen;