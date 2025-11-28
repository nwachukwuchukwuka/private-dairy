import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="sign-in" />
            <Stack.Screen name="sign-up"
                options={{
                    presentation: "modal",
                }}
            />


            {/* <Stack.Screen
                name="collections-screen"
                options={({ route }) => {
                    const params = route.params as { presentation?: string };
                    if (params.presentation === "modal") {
                        return {
                            presentation: "modal",
                        };
                    }
                    return {
                        presentation: "card",
                    };
                }}
            /> */}

        </Stack>
    );
}
