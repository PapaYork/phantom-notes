import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import ChatRow from "../../../components/ChatRow";
import { defaultStyles } from "../../../constants/Styles";
import chats from "../../../assets/data/chats.json";

const ChatsScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingBottom: 40,
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
  );
};

export default ChatsScreen;
