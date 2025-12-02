import { Stack } from 'expo-router';
import React from 'react';

export default function EntryEditorLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="edit-date"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="move-journal"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="location"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="entry-info"
                options={{
                    presentation: 'modal',
                }}
            />

            <Stack.Screen name="version-history" options={{ presentation: 'modal' }} />
            <Stack.Screen name="pdf-preview" options={{ presentation: 'modal' }} />
            <Stack.Screen name="this-day-view" options={{ presentation: 'modal' }} />
        </Stack>
    );
}