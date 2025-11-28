import { Feather, Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// interface QuickStartItem {
//   name: string;
//   icon: React.ReactNode;
// }

// const quickStartItems: QuickStartItem[] = [
//   {
//     name: "Suggestions",
//     icon: <Ionicons name="bulb-outline" size={28} color="white" />,
//   },
//   {
//     name: "Day View",
//     icon: <Ionicons name="sunny-outline" size={28} color="white" />,
//   },
//   { name: "Templates", icon: <Feather name="edit" size={26} color="white" /> },
//   {
//     name: "Audio",
//     icon: <Ionicons name="mic-outline" size={28} color="white" />,
//   },
// ];

interface QuickStartItem {
  name: string;
  icon: React.ReactNode;
  // route: string; // The route to navigate to
  route?: Href;
}

// Add the routes to your data
const quickStartItems: QuickStartItem[] = [
  {
    name: "Suggestions",
    icon: <Ionicons name="bulb-outline" size={28} color="white" />,
    route: "/more/suggestions",
  },
  {
    name: "Day View",
    icon: <Ionicons name="sunny-outline" size={28} color="white" />,
    route: "/more/day-view",
  },
  {
    name: "Templates",
    icon: <Feather name="edit" size={26} color="white" />,
    route: "/", // Left empty as requested
  },
  {
    name: "Audio",
    icon: <Ionicons name="mic-outline" size={28} color="white" />,
    route: "/more/premium", // Audio button opens the premium modal
  },
];

const streakDays = [12, 13, 14, 15, 16, 17, 18];
const currentDay = 18;

const TodayScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingTop: 60 }}>
        <View className="px-4">
          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-white text-2xl font-bold">Quick Start</Text>
              <TouchableOpacity>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-400 mb-4">
              Instantly create an entry with one of the following:
            </Text>
            <View className="bg-[#1C1C1E] rounded-2xl p-4 flex-row justify-around">
              {quickStartItems.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  className="items-center justify-between h-16"
                  onPress={() => item.route && router.push(item.route)}
                >
                  {item.icon}
                  <Text className="text-white text-sm">{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-1">
              <View className="flex-row items-center gap-2">
                <Text className="text-white text-2xl font-bold">
                  On This Day
                </Text>
                <View className="bg-gray-700 rounded-md px-2 py-1">
                  <Text className="text-white text-xs font-semibold">
                    Nov 18
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-400 mb-4">
              No past memories yet! Create an entry now, and you'll see it here
              next year.
            </Text>
            <View className="flex-row gap-3">
              <TouchableOpacity className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2024</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2023</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2022</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-white text-2xl font-bold">
                Daily Prompt
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-[#34B4E8] rounded-2xl p-6 items-center justify-center min-h-[120px]">
              <Text className="text-white text-2xl font-semibold text-center">
                What is one way I can be generous today?
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mb-10">
            <Text className="text-white text-2xl font-bold mb-2">
              Add from Photo Library
            </Text>
            <Text className="text-gray-400 mb-4">
              Photo library access is required to show photos from your photo
              library.
            </Text>
            <TouchableOpacity className="bg-[#E5E5EA] py-4 rounded-xl items-center justify-center">
              <Text className="text-blue-500 font-bold text-base">
                Enable Photo Library Access
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mb-10">
            <Text className="text-white text-2xl font-bold mb-2">
              Get the Full Journaling Experience
            </Text>
            <Text className="text-gray-400 mb-4">
              Unlimited media, entries, journals, and sync across devices.
              <TouchableOpacity>
                <Text className="text-gray-400 underline"> Learn more.</Text>
              </TouchableOpacity>
            </Text>
            <TouchableOpacity className="bg-[#A7A2E5] py-4 rounded-xl items-center justify-center">
              <Text className="text-black font-bold text-base">
                Upgrade to Premium
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-white text-2xl font-bold">Streak</Text>
              <TouchableOpacity>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-[#1C1C1E] rounded-2xl p-4 pt-5">
              <View className="flex-row mb-6">
                <View className="flex-1 items-center border-r border-gray-600">
                  <Text className="text-gray-400 text-sm mb-1">
                    Current Streak
                  </Text>
                  <Text className="text-white text-3xl font-semibold">0</Text>
                </View>
                <View className="flex-1 items-center">
                  <Text className="text-gray-400 text-sm mb-1">
                    Longest Streak
                  </Text>
                  <Text className="text-white text-3xl font-semibold">0</Text>
                </View>
              </View>
              <View className="flex-row justify-around items-end">
                {streakDays.map((day) => (
                  <View key={day} className="items-center gap-2 relative">
                    <View className="w-8 h-8 rounded-full border-2 border-gray-600" />
                    <Text className="text-gray-400">{day}</Text>
                    {day === currentDay && (
                      <View className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute -bottom-2" />
                    )}
                  </View>
                ))}
              </View>
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodayScreen;
