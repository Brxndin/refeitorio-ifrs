import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            {isAuth ? (
                <Stack.Screen name="(refeitorio)" />
            ) : (
                <Stack.Screen name="(auth)/login" />
            )}
        </Stack>
    );
}
