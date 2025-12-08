import { Stack } from 'expo-router';
import React from 'react';

export default function JournalsLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="selective-screen-modal"
                options={{
                    presentation: "modal",
                }}
            />

        </Stack>
    );
}