import { Stack } from 'expo-router';
import React from 'react';

export default function RemindersLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="notifications" />
            <Stack.Screen name="advanced" />

            <Stack.Screen
                name="new-reminder"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}