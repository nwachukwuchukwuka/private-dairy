import MoreStreak from "@/components/MoreStreak";
import { Feather, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface QuickStartItem {
  name: string;
  icon: React.ReactNode;
  route?: Href;
}

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
    route: "/",
  },
  {
    name: "Audio",
    icon: <Ionicons name="mic-outline" size={28} color="white" />,
    route: "/more/premium",
  },
];


const TodayScreen: React.FC = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);


  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("file selected", result.assets[0].uri);

    }
  };

  // useEffect(() => {
  //   const getPhotos = async () => {
  //     const { status } = await MediaLibrary.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Media Library permission not granted');
  //       return;
  //     }

  //     const assets = await MediaLibrary.getAssetsAsync({
  //       first: 4,
  //       mediaType: 'photo',
  //       sortBy: ['creationTime'],
  //     });

  //     setPhotos(assets.assets);
  //   };

  //   getPhotos();
  // }, []);

  const handleOnThisDayPress = (year: string) => {
    const dateString = `${year}-11-18T12:00:00.000Z`;
    router.push({
      pathname: '/more/day-view',
      params: { initialDate: dateString }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingTop: 60 }}>
        <View className="px-4">
          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-white text-2xl font-bold">Quick Start</Text>
              <TouchableOpacity onPress={() => router.push("/more/quick-start")}>
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
              <TouchableOpacity onPress={() => router.push("/more/on-this-day")}>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-400 mb-4">
              No past memories yet! Create an entry now, and you'll see it here
              next year.
            </Text>
            <View className="flex-row gap-3">
              <Pressable onPress={() => handleOnThisDayPress('2024')} className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2024</Text>
              </Pressable>
              <Pressable onPress={() => handleOnThisDayPress('2023')} className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2023</Text>
              </Pressable>
              <Pressable onPress={() => handleOnThisDayPress('2022')} className="bg-[#E5E5EA] flex-1 py-3 rounded-xl items-center justify-center">
                <Text className="text-black font-semibold text-base">2022</Text>
              </Pressable>
            </View>
          </View>

          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-white text-2xl font-bold">
                Daily Prompt
              </Text>
              <TouchableOpacity onPress={() => router.push('/more/daily-prompts')}>
                <Text className="text-blue-400 text-base">See more</Text>
              </TouchableOpacity>
            </View>
            <Pressable className="bg-[#34B4E8] rounded-2xl p-6 items-center justify-center min-h-[120px]">
              <Text className="text-white text-2xl font-semibold text-center">
                What is one way I can be generous today?
              </Text>
            </Pressable>
          </View>
          <View className="mb-10">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-white text-2xl font-bold">
                Add from Photo Library
              </Text>
              <TouchableOpacity onPress={pickImage}>
                <Text className="text-blue-400 text-base">
                  Select
                </Text>
              </TouchableOpacity>
            </View>

            {photos.length > 0 ? (
              <View className="flex-row justify-between">
                {photos.map(photo => (
                  <TouchableOpacity
                    key={photo.id}
                  >
                    <Image
                      source={{ uri: photo.uri }}
                      className="w-20 h-20 rounded-lg"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text className="text-gray-400">
                No recent photos found.
              </Text>
            )}
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

          <MoreStreak />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodayScreen;
