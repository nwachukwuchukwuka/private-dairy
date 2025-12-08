import { Stack } from 'expo-router';
import React from 'react';

export default function EditAccountLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="edit-account"
                options={{
                    presentation: 'modal',

                }}
            />
            <Stack.Screen name="change-password" />
            <Stack.Screen name="check-email" options={{
                presentation: 'modal',
            }} />
        </Stack>
    );
}