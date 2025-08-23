import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const Layout = () => {
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
              <Text style={styles.headerTitle}>Chats</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: Colors.accent,
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons
                  name="camera-outline"
                  color={Colors.accent}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons
                  name="ellipsis-vertical"
                  color={Colors.accent}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginLeft: "auto",
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 40,
    minHeight: 40,
  },
  chatHeaderTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    maxWidth: 300,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chatHeaderInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  chatStatus: {
    fontSize: 13,
    color: Colors.textTertiary,
    fontWeight: "400",
  },
  chatHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default Layout;
