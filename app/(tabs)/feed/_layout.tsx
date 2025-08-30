import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLargeTitle: true,
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
