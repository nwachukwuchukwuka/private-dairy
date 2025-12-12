// import { AppContextProvider } from "@/context/context";
// import { Stack } from "expo-router";
// import { KeyboardAvoidingView, Platform } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { MenuProvider } from "react-native-popup-menu";
// import "./globals.css";

// export default function RootLayout() {
//   return (
//     <AppContextProvider>
//       <GestureHandlerRootView>
//         <MenuProvider>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             className="flex-1"
//           >
//             <Stack
//               screenOptions={{
//                 headerShown: false,
//               }}
//             >
//               <Stack.Screen name="(tabs)" />
//               <Stack.Screen
//                 name="journals/entry-detail"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="prompts-screens/[id]"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="journals/streak-modal"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="journals/journals-menu"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="(auth)"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="import-export"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />
//               <Stack.Screen
//                 name="journals/filter-screen"
//                 options={{
//                   animation: "fade",
//                 }}
//               />

//               <Stack.Screen
//                 name="settings"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />

//               <Stack.Screen
//                 name="more"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />

//               <Stack.Screen
//                 name="journals/journal-editor-modal"
//                 options={{
//                   presentation: "modal",
//                 }}
//               />

//               <Stack.Screen
//                 name="journals/new-entry"
//                 options={{
//                   // presentation: 'fullScreenModal',
//                   presentation: 'modal',
//                 }}
//               />
//               <Stack.Screen
//                 name="prompts-screens/prompt-screen-new-entry"
//                 options={{
//                   presentation: 'modal',
//                 }}
//               />

//               <Stack.Screen
//                 name="prompts-screens/prompt-answers"
//                 options={{
//                   presentation: 'modal',
//                 }}
//               />

//             </Stack>
//           </KeyboardAvoidingView>
//         </MenuProvider>
//       </GestureHandlerRootView>
//     </AppContextProvider>

//   );
// }


import { AppContextProvider } from "@/context/context";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import "./globals.css";

export default function RootLayout() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleProgressBarPress = () => {
    bottomSheetModalRef.current?.present();
  };
  return (
    <AppContextProvider>
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
                name="settings"
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
                name="journals/journal-editor-modal"
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
              <Stack.Screen
                name="journals/edit-entry"
                options={{
                  presentation: 'modal',
                }}
              />
              <Stack.Screen
                name="prompts-screens/prompt-screen-new-entry"
                options={{
                  presentation: 'modal',
                }}
              />

              <Stack.Screen
                name="prompts-screens/prompt-answers"
                options={{
                  presentation: 'modal',
                }}
              />

            </Stack>


            {/* <BottomSheetModalProvider>

              <View >
                <Button title="Open Bottom Sheet" onPress={handleProgressBarPress} />
              </View>


              <BottomSheetFile ref={bottomSheetModalRef} />
            </BottomSheetModalProvider> */}
          </KeyboardAvoidingView>
        </MenuProvider>
      </GestureHandlerRootView>
    </AppContextProvider>

  );
}