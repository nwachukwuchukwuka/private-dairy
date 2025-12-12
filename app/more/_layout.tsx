import { Stack } from 'expo-router';
import React from 'react';

export default function MoreLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="suggestions"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="day-view"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="premium"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen
                name="quick-start"
                options={{
                    presentation: 'modal',
                }}
            />

            <Stack.Screen
                name="daily-prompts"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="on-this-day"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="on-this-day-detail"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}