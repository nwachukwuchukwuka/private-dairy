import { Stack } from 'expo-router';
import React from 'react';

export default function SettingsLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="edit-account"
                options={{
                    presentation: "modal",
                }}
            />

            <Stack.Screen name="advanced" />
        </Stack>
    );
}