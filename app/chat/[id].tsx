import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isFromMe: boolean;
  sender: string;
}

export default function ChatDetailScreen() {
  const { theme } = useTheme();
  const [messages] = useState<Message[]>([]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.surface, borderBottomColor: theme.border },
        ]}
      >
        <Text style={[styles.title, { color: theme.textPrimary }]}>Chat</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={theme.accent} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  searchButton: {
    padding: 8,
  },
});
