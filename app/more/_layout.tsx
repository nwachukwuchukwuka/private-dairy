import { Stack } from 'expo-router';
import React from 'react';

export default function MoreLayout() {
    return (
        <Stack>
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
        </Stack>
    );
}