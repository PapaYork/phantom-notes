import React, { useRef, useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout, Typography } from '../constants/Styles';
import { Message } from '../types/message';
import { MessageItem } from './MessageItem';
import { TypingIndicator } from './TypingIndicator';

interface MessagesListProps {
  messages: Message[];
  currentUserId: string;
  loading: boolean;
  error: string | null;
  otherUserTyping: boolean;
  showTimer: boolean;
  onLoadMore?: () => void;
}

export const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  currentUserId,
  loading,
  error,
  otherUserTyping,
  showTimer,
  onLoadMore,
}) => {
  const flatListRef = useRef<FlatList>(null);

  const renderMessage = ({ item }: { item: Message }) => (
    <MessageItem
      message={item}
      isOwnMessage={item.senderId === currentUserId}
      showTimer={showTimer}
    />
  );

  const renderEmpty = () => (
    <View style={[Layout.center, { flex: 1, paddingVertical: 40 }]}>
      <Text style={[Typography.body, { color: Colors.textMuted, textAlign: 'center' }]}>
        No messages yet. Start a conversation!
      </Text>
    </View>
  );

  const renderLoading = () => (
    <View style={[Layout.center, { paddingVertical: 20 }]}>
      <ActivityIndicator size="small" color={Colors.accent} />
    </View>
  );

  const renderError = () => (
    <View style={[Layout.center, { paddingVertical: 20 }]}>
      <Text style={[Typography.body, { color: Colors.error, textAlign: 'center' }]}>
        {error}
      </Text>
    </View>
  );

  const keyExtractor = (item: Message) => item.id;

  const getItemLayout = (data: any, index: number) => ({
    length: 80,
    offset: 80 * index,
    index,
  });

  useEffect(() => {
    if (messages.length > 0 && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages.length]);

  if (loading && messages.length === 0) {
    return renderLoading();
  }

  if (error && messages.length === 0) {
    return renderError();
  }

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      renderItem={renderMessage}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={
        otherUserTyping ? <TypingIndicator /> : null
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={10}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ 
        flexGrow: 1,
        paddingVertical: 16,
      }}
      style={{ flex: 1 }}
    />
  );
};
