import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import FeedComponents from "../../../components/FeedComponents";

const Feed = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
          <TouchableOpacity>
            <Feather name="camera" size={27} color={Colors.accent} />
          </TouchableOpacity>
        </View>
        <FeedComponents />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent,
  },
});
export default Feed;
