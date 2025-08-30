import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 70,
          paddingBottom: 15,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
