import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface RecommendedCard {
  id: string;
  promptText: string;
  category: string;
  icon: React.ReactNode;
}

const recommendedCardsData: RecommendedCard[] = [
  {
    id: '1',
    promptText: 'What am I grateful for today?',
    category: 'Gratitude',
    icon: <MaterialCommunityIcons name="cards-heart-outline" size={24} color="white" />,
  },
  {
    id: '2',
    promptText: 'What is one thing I learned yesterday?',
    category: 'Reflection',
    icon: <MaterialCommunityIcons name="account-question-outline" size={24} color="white" />,
  },
  {
    id: '3',
    promptText: 'How did I move my body today?',
    category: 'Fitness',
    icon: <Ionicons name="fitness-outline" size={24} color="white" />,
  },
];


interface PromptPack {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const promptPacksData: PromptPack[] = [
  {
    id: "gratitude",
    name: "Gratitude",
    icon: <MaterialCommunityIcons name="cards-heart-outline" size={26} color="white" />,
  },
  {
    id: "reflection",
    name: "Reflection",
    icon: <MaterialCommunityIcons name="account-question-outline" size={26} color="white" />,
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: <Ionicons name="fitness-outline" size={26} color="white" />,
  },
  {
    id: "creativity",
    name: "Creativity",
    icon: <Ionicons name="color-palette-outline" size={26} color="white" />,
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    icon: <MaterialCommunityIcons name="brain" size={26} color="white" />,
  },
  {
    id: "legacy",
    name: "Legacy",
    icon: <MaterialCommunityIcons name="brain" size={26} color="white" />,
  },
  {
    id: "fun",
    name: "Fun",
    icon: <MaterialCommunityIcons name="brain" size={26} color="white" />,
  },
  {
    id: "about-me",
    name: "About Me",
    icon: <Ionicons name="person-outline" size={26} color="white" />,
  },
];


const PromptsScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black">


      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row justify-between items-center px-4 pt-4 pb-6">
          <Text className="text-white text-4xl font-bold">Prompts</Text>
        </View>
        <View className="px-4 mb-8">
          <View className="flex-row bg-[#1C1C1E] rounded-lg p-1">
            <TouchableOpacity className="flex-1 bg-[#3A3A3C] rounded-md py-2 items-center justify-center">
              <Text className="text-white font-semibold">Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-2 items-center justify-center">
              <Text className="text-gray-400 font-semibold">My Prompts</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-white text-2xl font-bold px-4 mb-4">
            Recommended
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {recommendedCardsData.map((card) => (
              <View
                key={card.id}
                className="w-80 mr-4 p-3 bg-black"
                style={{
                  shadowColor: '#FFFFFF',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.35,
                  shadowRadius: 7,
                  elevation: 10,
                }}
              >
                <View className="bg-[#34B4E8] h-48 rounded-xl p-4 justify-center items-center relative">
                  <TouchableOpacity className="absolute top-3 right-3">
                    <Ionicons name="refresh-circle" size={24} color="white" />
                  </TouchableOpacity>
                  <Text className="text-white text-xl text-center font-semibold">
                    {card.promptText}
                  </Text>
                </View>
                <TouchableOpacity className="flex-row items-center mt-4">
                  {card.icon}
                  <Text className="text-white text-lg ml-3 flex-1">
                    {card.category}
                  </Text>
                  <Feather name="chevron-right" size={20} color="gray" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="px-4">
          <Text className="text-white text-2xl font-bold mb-2">
            Prompt Packs
          </Text>
          {promptPacksData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center py-4 border-b border-gray-800"
              onPress={() => router.push(`/prompts-screens/${item.id}`)}
            >
              <View className="w-8">{item.icon}</View>
              <Text className="text-white text-lg ml-4 flex-1">
                {item.name}
              </Text>
              <Feather name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PromptsScreen;
