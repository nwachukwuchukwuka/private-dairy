import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  //   const { isAuthenticated } = useAppState();

  //   if (!isAuthenticated) return <Redirect href="/onboarding" />;
  return (

    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#3A3A3C",
          tabBarStyle: {
            backgroundColor: "#1C1C1E",
            borderTopWidth: 0.3,
            borderTopColor: "#3A3A3C",
            position: "absolute",
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Journals",
            tabBarIcon: ({ color }) => (
              <Ionicons name="journal" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="prompts"
          options={{
            title: "Prompts",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat-question-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarIcon: ({ color }) => (
              <Feather name="more-horizontal" size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <TouchableOpacity
        className="absolute top-16 right-6 w-8 h-8 rounded-full bg-gray-600 items-center justify-center"
        onPress={() => router.push('/settings')}
      >
        <View >
          <Ionicons name="person" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
