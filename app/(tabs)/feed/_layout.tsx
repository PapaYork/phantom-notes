import { Stack } from "expo-router";
import React from "react";

export default function FeedLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "My Feed",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
