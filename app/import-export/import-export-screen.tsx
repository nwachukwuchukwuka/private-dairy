import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TagsModal from './tags';

const OptionRow = ({ label, value, href, onPress }: { label: string; value: string; href?: string; onPress?: () => void }) => {
  const router = useRouter();
  const handlePress = href ? () => router.push(href) : onPress;

  return (
    <TouchableOpacity onPress={handlePress} className="flex-row justify-between items-center py-4 px-4 border-b border-gray-800 last:border-b-0">
      <Text className="text-white text-lg">{label}</Text>
      <View className="flex-row items-center">
        <Text className="text-gray-400 text-lg mr-2">{value}</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

const ActionButton = ({ label }: { label: string }) => (
  <TouchableOpacity className="py-4 px-4 border-b border-gray-800 last:border-b-0">
    <Text className="text-blue-500 text-lg">{label}</Text>
  </TouchableOpacity>
);

const NavigationRow = ({ label, href }: { label: string; href: string }) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(href)} className="flex-row justify-between items-center py-4 px-4 border-b border-gray-800 last:border-b-0">
      <Text className="text-white text-lg">{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
  );
};

const ImportExportScreen = () => {
  const router = useRouter();
  const [isTagsModalVisible, setTagsModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black" edges={['top']}>
      <View className="flex-row justify-end items-center p-4">
        <Text className="text-white text-xl font-bold absolute w-full text-center">Import/Export</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-blue-500 text-lg font-bold">Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerClassName="pb-10">
        <View className="p-6 items-center">
          <View className="bg-gray-800 p-3 rounded-lg">
            <Feather name="upload" size={32} color="gray" />
          </View>
          <Text className="text-gray-400 text-center mt-4 text-base">
            A variety of export options ensure your entries always stay yours.
            <Text className="text-blue-500"> Learn more</Text>
          </Text>
        </View>

        <View className="px-4">
          <View className="bg-[#1C1C1E] rounded-lg">
            <OptionRow label="Include" value="All Journals" href="/import-export/include" />
            <OptionRow label="Date Range" value="All Entries" href="/import-export/date-range-screen" />
            <OptionRow label="Only Include Tags" value="All" onPress={() => setTagsModalVisible(true)} />
            <OptionRow label="Excluded Tags" value="None" onPress={() => setTagsModalVisible(true)} />
          </View>
          <Text className="text-gray-500 mt-2 ml-2 text-sm">
            4 Journals, 0 Entries, 0 Media
          </Text>

          <Text className="text-gray-400 uppercase font-bold mt-8 mb-2 ml-2">Export</Text>
          <View className="bg-[#1C1C1E] rounded-lg">
            <ActionButton label="Export Day One JSON (.zip)" />
            <ActionButton label="Export Plain Text (.zip)" />
            <ActionButton label="Export Comma Separated (.csv)" />
          </View>

          <Text className="text-gray-400 uppercase font-bold mt-8 mb-2 ml-2">PDF</Text>
          <View className="bg-[#1C1C1E] rounded-lg">
            <ActionButton label="Export PDF" />
            <NavigationRow label="PDF Settings" href="/import-export/pdf-settings" />
          </View>

          <Text className="text-gray-400 uppercase font-bold mt-8 mb-2 ml-2">Import</Text>
          <View className="bg-[#1C1C1E] rounded-lg">
            <ActionButton label="Import Day One JSON (.zip)" />
            <ActionButton label="Import CSV (.csv)" />
            <ActionButton label="Import from Day One Classic" />
            <ActionButton label="Import Text-Only Auto Backup" />
          </View>
        </View>
      </ScrollView>

      <TagsModal
        visible={isTagsModalVisible}
        onClose={() => setTagsModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default ImportExportScreen;