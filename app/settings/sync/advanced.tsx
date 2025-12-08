import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OptionCard = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
    <View className="mb-8">
        <View className="flex-row items-center mb-2 ml-4">
            <Ionicons name="checkmark-circle" size={20} color="green" />
            <Text className="text-white font-bold ml-2">{title}</Text>
        </View>
        <View className="bg-[#1C1C1E] rounded-lg p-3 mb-2">{children}</View>
        <Text className="text-gray-500 text-xs px-4">{subtitle}</Text>
    </View>
);

const AdvancedSyncScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="bg-[#1C1C1E] flex-row items-center p-3">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
                    <Ionicons name="chevron-back" size={28} color="#007AFF" />
                    <Text className="text-blue-500 text-lg">Sync</Text>
                </TouchableOpacity>
            </View>


            <ScrollView contentContainerClassName="p-4">
                <OptionCard title="Encryption key is stored in iCloud" subtitle="If you remove your encryption key from iCloud and if you have not enabled iCloud Keychain in your iCloud settings, you will be required to manually enter your key when you install the Day One app on a new device. If you lose your private key, you will not be able to access your end-to-end encrypted journal data, and there will be nothing the Day One team can do to help you regain access. We recommend that you enable Keychain in your iCloud settings, or allow us to keep your key in iCloud (where the key itself is encrypted and accessible only by the client). Otherwise, we strongly recommend that you print out your key and keep it somewhere safe for future reference.">
                    <View>
                        <TouchableOpacity className="p-2 border-b border-gray-700">
                            <Text className="text-white text-lg">Only Store Encryption Key in Keychain</Text>
                            <Text className="text-gray-400 text-sm">(Not recommended)</Text>
                        </TouchableOpacity>
                        <View className="p-2 flex-row justify-between items-center">
                            <Text className="text-white text-lg">Encryption Key</Text>
                            <Ionicons name="qr-code-outline" size={24} color="gray" />
                        </View>
                    </View>
                </OptionCard>

                <OptionCard title="Sync is turned on" subtitle="Disabling sync means your data will be saved only on your device. It will no longer be automatically backed up to our secure servers, and it will no longer be synced to other devices where you use the Day One app. If you delete the Day One app or if anything happens to your device that prevents you from being able to open the Day One app, you will lose all of your journal data. We recommend you keep sync turned on. Otherwise, we strongly recommend you create manual backups using our export feature.">
                    <TouchableOpacity>
                        <Text className="text-white text-lg">Disable Sync</Text>
                        <Text className="text-gray-400 text-sm">(Not recommended)</Text>
                    </TouchableOpacity>
                </OptionCard>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">REMOVE DATA FROM SERVERS</Text>
                <Text className="text-gray-500 text-xs px-4 mb-8">We automatically back up your data to our severs for safekeeping. If you would like to remove your data from our servers, first disable sync above and then follow <Text className="text-blue-500">these steps.</Text></Text>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center">
                    <Text className="text-red-500 text-lg">Reset Sync</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-xs px-4 mt-2">Causes sync to re-download all journals and entries. Please use this feature <Text className="text-red-500">cautiously</Text>, as it will cause a large amount of network activity.</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AdvancedSyncScreen;