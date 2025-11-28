// // import { useAppState } from "@/context/context";
// import { Entypo, FontAwesome } from "@expo/vector-icons";
// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import { Tabs } from "expo-router";
// import React from "react";

// export default function TabsLayout() {
// //   const { isAuthenticated } = useAppState();

// //   if (!isAuthenticated) return <Redirect href="/onboarding" />;
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "white",
//         tabBarInactiveTintColor: "#70808d",
//         tabBarStyle: {
//           backgroundColor: "#273238",
//           borderTopWidth: 1,
//           borderTopColor: "#3a4650",
//           position: "absolute",
//           elevation: 0,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Journals",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome6 name="users" size={20} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="prompts"
//         options={{
//           title: "Prompts",
//           tabBarIcon: ({ color }) => (
//             <Entypo name="picasa" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="more"
//         options={{
//           title: "More",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome name="user" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }


// import { useAppState } from "@/context/context";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
          tabBarInactiveTintColor: "#70808d",
          tabBarStyle: {
            backgroundColor: "#273238",
            borderTopWidth: 1,
            borderTopColor: "#3a4650",
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
              <FontAwesome6 name="users" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="prompts"
          options={{
            title: "Prompts",
            tabBarIcon: ({ color }) => (
              <Entypo name="picasa" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <TouchableOpacity
        className="absolute top-16 right-6 w-8 h-8 rounded-full bg-gray-600 items-center justify-center"
        onPress={() => router.push('/prompts-screens/settings')}
      >
        <View >
          <Ionicons name="person" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
