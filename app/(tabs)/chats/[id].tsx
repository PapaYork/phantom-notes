import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { Layout } from "../../../constants/Styles";
import { useMessages } from "../../../hooks/useMessages";
import { useDisappearingMessages } from "../../../hooks/useDisappearingMessages";
import { useRealTimeMessages } from "../../../hooks/useRealTimeMessages";
import { ChatHeader } from "../../../components/ChatHeader";
import { MessagesList } from "../../../components/MessagesList";
import { MessageInput } from "../../../components/MessageInput";
import { User, DisappearTimer } from "../../../types/message";

const MessagingScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [showTimer, setShowTimer] = useState(true);
  const [currentUserId] = useState("user1");
  const [otherUserId] = useState(id || "user2");

  const mockUser: User = {
    id: otherUserId,
    name: `User ${otherUserId}`,
    avatar: `https://i.pravatar.cc/150?u=${otherUserId}`,
    isOnline: true,
  };

  const {
    messages,
    loading,
    error,
    sendMessage,
    updateMessageStatus,
    removeMessage,
  } = useMessages({
    chatId: id || "chat1",
    currentUserId,
    otherUserId,
  });

  const { clearMessageTimer } = useDisappearingMessages({
    messages,
    onMessageExpire: (messageId) => {
      removeMessage(messageId);
      Alert.alert(
        "Message Expired",
        "A message has been automatically deleted."
      );
    },
  });

  const {
    otherUserTyping,
    startTyping,
    stopTyping,
    markAsRead,
    markAsDelivered,
  } = useRealTimeMessages({
    chatId: id || "chat1",
    currentUserId,
    otherUserId,
  });

  const handleSendMessage = (
    content: string,
    disappearTimer: DisappearTimer
  ) => {
    try {
      sendMessage(content, disappearTimer);
    } catch (err) {
      Alert.alert("Error", "Failed to send message. Please try again.");
    }
  };

  const handleTyping = () => {
    startTyping();
  };

  const handleStopTyping = () => {
    stopTyping();
  };

  useEffect(() => {
    const unreadMessageIds = messages
      .filter((msg) => msg.senderId === otherUserId && msg.status !== "read")
      .map((msg) => msg.id);

    if (unreadMessageIds.length > 0) {
      markAsRead(unreadMessageIds);
    }
  }, [messages, otherUserId, markAsRead]);

  return (
    <View style={[Layout.container, { backgroundColor: Colors.background }]}>
      <ChatHeader user={mockUser} />

      <MessagesList
        messages={messages}
        currentUserId={currentUserId}
        loading={loading}
        error={error}
        otherUserTyping={otherUserTyping}
        showTimer={showTimer}
      />

      <MessageInput
        onSendMessage={handleSendMessage}
        onTyping={handleTyping}
        onStopTyping={handleStopTyping}
        disabled={loading}
      />
    </View>
  );
};

export default MessagingScreen;
