import { Stack } from "expo-router";

export default function ImportExportLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="import-export-screen" />
        </Stack>
    );
}
