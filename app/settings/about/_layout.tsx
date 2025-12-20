import { Stack } from 'expo-router';
import React from 'react';

export default function AboutLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="index" options={{ p resentation: 'modal' }} /> */}
            <Stack.Screen name="legal" />
        </Stack>
    );
}