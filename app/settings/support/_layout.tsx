import { Stack } from 'expo-router';
import React from 'react';

export default function SupportLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="diagnostics" options={{ headerShown: false }} />
            <Stack.Screen
                name="email-diagnostics"
                options={{
                    presentation: 'modal',
                    headerShown: false
                }}
            />
        </Stack>
    );
}