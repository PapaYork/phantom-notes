import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Feather } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Feed",
          headerLargeTitle: true,
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: Colors.accent,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.accent,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="camera" size={27} color={Colors.accent} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
