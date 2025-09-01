import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Colors } from '../constants/Colors';
import { ChatStyles, Typography } from '../constants/Styles';
import { Message } from '../types/message';
import { DisappearingTimer, TimerLabel } from './DisappearingTimer';
import { shouldShowTimer } from '../utils/messageUtils';

interface MessageItemProps {
  message: Message;
  isOwnMessage: boolean;
  showTimer: boolean;
}

export const MessageItem: React.FC<MessageItemProps> = ({ 
  message, 
  isOwnMessage, 
  showTimer 
}) => {
  const bubbleStyle = isOwnMessage 
    ? ChatStyles.bubbleSelf 
    : message.isDisappearing 
      ? ChatStyles.bubbleDisappearing 
      : ChatStyles.bubbleOther;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sending':
        return <Ionicons name="time-outline" size={12} color={Colors.textMuted} />;
      case 'sent':
        return <Ionicons name="checkmark" size={12} color={Colors.textMuted} />;
      case 'delivered':
        return <Ionicons name="checkmark-done" size={12} color={Colors.textMuted} />;
      case 'read':
        return <Ionicons name="checkmark-done" size={12} color={Colors.accent} />;
      case 'error':
        return <Ionicons name="alert-circle" size={12} color={Colors.error} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ 
      marginVertical: 4, 
      marginHorizontal: 16,
      alignItems: isOwnMessage ? 'flex-end' : 'flex-start',
    }}>
      <View style={[bubbleStyle, { maxWidth: '80%' }]}>
        <Text style={[Typography.body, { color: Colors.textPrimary }]}>
          {message.content}
        </Text>
        
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginTop: 4,
          gap: 4,
        }}>
          <Text style={[Typography.caption, { color: Colors.textMuted }]}>
            {format(message.timestamp, 'HH:mm')}
          </Text>
          
          {showTimer && shouldShowTimer(message) && (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <DisappearingTimer expiresAt={message.expiresAt} size="small" />
              <TimerLabel expiresAt={message.expiresAt} />
            </View>
          )}
          
          {isOwnMessage && (
            <View style={{ marginLeft: 4 }}>
              {getStatusIcon(message.status)}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
