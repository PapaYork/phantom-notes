import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import ChatRow from "../../../components/ChatRow";
import { defaultStyles } from "../../../constants/Styles";
import chats from "../../../assets/data/chats.json";

const ChatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* WhatsApp-style Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <View style={styles.headerActions}>
          <Text style={styles.headerAction}>Edit</Text>
        </View>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingBottom: 45,
        }}
      >
        <FlatList
          data={chats}
          renderItem={({ item }) => <ChatRow {...item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E9EDEF",
    height: 44, // WhatsApp header height
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000000",
    lineHeight: 22,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAction: {
    fontSize: 17,
    fontWeight: "400",
    color: "#007AFF",
    lineHeight: 22,
  },
});

export default ChatsScreen;
