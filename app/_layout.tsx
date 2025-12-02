import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import "./globals.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <MenuProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="journals/entry-detail"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="prompts-screens/[id]"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="journals/streak-modal"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="journals/journals-menu"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="(auth)"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="import-export"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="journals/filter-screen"
              options={{
                animation: "fade",
              }}
            />

            <Stack.Screen
              name="prompts-screens/settings"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="more"
              options={{
                presentation: "modal",
              }}
            />

            <Stack.Screen
              name="journals/new-entry"
              options={{
                // presentation: 'fullScreenModal',
                presentation: 'modal',
              }}
            />
          </Stack>
        </KeyboardAvoidingView>
      </MenuProvider>
    </GestureHandlerRootView>
  );
}
