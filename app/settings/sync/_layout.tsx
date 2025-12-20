import { Stack } from 'expo-router';
import React from 'react';

export default function SyncLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="status" />
            <Stack.Screen name="storage" />
            <Stack.Screen name="sync-advanced" />

            <Stack.Screen
                name="selective-sync"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="encryption-key"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}