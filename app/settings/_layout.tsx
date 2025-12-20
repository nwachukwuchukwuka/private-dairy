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
            <Stack.Screen name="daily-prompt" />

            <Stack.Screen name="apple-intelligence" />
            <Stack.Screen name="on-this-day" />
            <Stack.Screen name="appearance" />

            <Stack.Screen name="passcode" />
            <Stack.Screen name="app-icon" />
            <Stack.Screen name="location-history" />


            <Stack.Screen name="email-to-journal" />
            <Stack.Screen name="integrations" />

            <Stack.Screen name="support" />
            <Stack.Screen name="labs" />
            <Stack.Screen name="about" options={{ presentation: "modal" }} />
        </Stack>
    );
}