import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { TabBarStyles } from "./constants/Styles";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

// Import your screen components
import ChatsScreen from "./app/(tabs)/chats";
import fyp from "./app/(tabs)/myfeed";
import ProfileScreen from "./app/(tabs)/profile";

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            TabBarStyles.container,
            { backgroundColor: theme.surface, borderTopColor: theme.border },
          ],
          tabBarActiveTintColor: theme.accent,
          tabBarInactiveTintColor: theme.textTertiary,
          tabBarLabelStyle: TabBarStyles.tabLabel,
        }}
      >
        <Tab.Screen
          name="chats"
          component={ChatsScreen}
          options={{
            title: "Chats",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="myfeed"
          component={fyp}
          options={{
            title: "My Feed",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
