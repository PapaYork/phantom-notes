import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLargeTitle: false,
          headerTransparent: false,
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>Settings</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#25D366", // WhatsApp green
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="search-outline" color="#25D366" size={22} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 28, // WhatsApp header title size
    fontWeight: "700",
    color: "#000000",
    lineHeight: 34,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginLeft: "auto",
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 36,
    minHeight: 36,
  },
});
