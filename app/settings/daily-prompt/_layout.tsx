import { Stack } from 'expo-router';
import React from 'react';

export default function DailyPromptLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="time" />
            <Stack.Screen name="journal" />
        </Stack>
    );
}