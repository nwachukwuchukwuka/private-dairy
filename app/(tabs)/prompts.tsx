import { useAppContext } from "@/context/context";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActionSheetIOS,
  Alert,
  Platform,
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
    id: 'gratitude',
    promptText: 'What am I grateful for today?',
    category: 'Gratitude',
    icon: <MaterialCommunityIcons name="cards-heart-outline" size={24} color="white" />,
  },
  {
    id: 'reflection',
    promptText: 'What is one thing I learned yesterday?',
    category: 'Reflection',
    icon: <MaterialCommunityIcons name="account-question-outline" size={24} color="white" />,
  },
  {
    id: 'fitness',
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


const MyPromptsPlaceholder = () => (
  <View className="flex-1 justify-center items-center px- pt-10">
    <View className="relative mb-6">
      <Ionicons name="folder-open-outline" size={80} color="gray" />
      <View className="absolute -top-2 -right-2 bg-gray-700 w-8 h-8 rounded-full items-center justify-center border-2 border-black">
        <Ionicons name="help" size={20} color="white" />
      </View>
    </View>
    <Text className="text-white text-2xl font-bold mb-2">Nothing added yet</Text>
    <Text className="text-gray-400 text-base text-center">
      Build your own prompt collection by adding prompt packs here.
    </Text>
  </View>
);


const PromptsScreen = () => {
  const router = useRouter();
  const { entries } = useAppContext();
  const [activeTab, setActiveTab] = useState<'Gallery' | 'My Prompts'>('Gallery');


  const showActionSheet = (card: RecommendedCard) => {
    const entryCount = entries.filter(e => e.promptText === card.promptText).length;
    const viewEntriesTitle = `View ${entryCount} Entry(s)`;

    const options = ["Cancel", "Answer Again"];
    if (entryCount > 0) {
      options.splice(1, 0, viewEntriesTitle);
    }

    const cancelButtonIndex = options.indexOf("Cancel");

    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        { options, cancelButtonIndex },
        (buttonIndex) => {
          const selectedOption = options[buttonIndex];
          if (selectedOption === viewEntriesTitle) {
            router.push({
              pathname: '/prompts-screens/prompt-answers',
              params: { promptText: card.promptText }
            });
          } else if (selectedOption === "Answer Again") {
            router.push({
              pathname: '/prompts-screens/prompt-screen-new-entry',
              params: { prefilledPrompt: card.promptText }
            });
          }
        }
      );
    } else {
      const alertButtons: any[] = [
        {
          text: "Answer Again",
          onPress: () => router.push({
            pathname: '/prompts-screens/prompt-screen-new-entry',
            params: { prefilledPrompt: card.promptText }
          }),
        },
        { text: "Cancel", style: "cancel" },
      ];
      if (entryCount > 0) {
        alertButtons.unshift({
          text: viewEntriesTitle,
          onPress: () => router.push({
            pathname: '/prompts-screens/prompt-answers',
            params: { promptText: card.promptText }
          }),
        });
      }
      Alert.alert("Choose an option", "", alertButtons);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingTop: 40 }}
      >
        <View className="flex-row justify-between items-center px-4 pt-4 pb-6">
          <Text className="text-white text-4xl font-bold">Prompts</Text>
        </View>
        <View className="px-4 mb-8">
          <View className="flex-row bg-[#1C1C1E] rounded-2xl p-1">

            <TouchableOpacity
              onPress={() => setActiveTab('Gallery')}
              className={`flex-1 rounded-2xl py-1 items-center justify-center ${activeTab === 'Gallery' ? 'bg-[#3A3A3C]' : ''}`}
            >
              <Text className="text-white ">Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('My Prompts')}
              className={`flex-1 rounded-2xl py-1 items-center justify-center ${activeTab === 'My Prompts' ? 'bg-[#3A3A3C]' : ''}`}
            >
              <Text className="text-white ">My Prompts</Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === 'Gallery' ? (
          <>
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
                  // style={{
                  //   shadowColor: '#FFFFFF',
                  //   shadowOffset: { width: 0, height: 6 },
                  //   shadowOpacity: 0.35,
                  //   shadowRadius: 7,
                  //   elevation: 10,
                  // }}
                  >
                    <TouchableOpacity className="bg-[#34B4E8] h-48 rounded-xl p-4 justify-center items-center relative"
                      onPress={() => showActionSheet(card)}
                    >
                      <TouchableOpacity className="absolute top-3 right-3">
                        <Ionicons name="refresh-circle" size={24} color="white" />
                      </TouchableOpacity>
                      <Text className="text-white text-xl text-center font-semibold">
                        {card.promptText}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center mt-4" onPress={() => router.push(`/prompts-screens/${card.id}`)}>
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
          </>
        ) : (
          <MyPromptsPlaceholder />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PromptsScreen;
