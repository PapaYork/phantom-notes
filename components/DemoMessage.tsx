import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Buttons } from '../constants/Styles';
import { Message, DisappearTimer } from '../types/message';
import { DisappearingTimer, TimerLabel } from './DisappearingTimer';
import { calculateExpiryTime, generateMessageId } from '../utils/messageUtils';

interface DemoMessageProps {
  onSendDemoMessage: (message: Message) => void;
}

export const DemoMessage: React.FC<DemoMessageProps> = ({ onSendDemoMessage }) => {
  const [demoMessages, setDemoMessages] = useState<Message[]>([]);

  const createDemoMessage = (timer: DisappearTimer, content: string): Message => ({
    id: generateMessageId(),
    senderId: 'demo',
    receiverId: 'user',
    content,
    timestamp: new Date(),
    expiresAt: calculateExpiryTime(timer),
    status: 'sent',
    disappearTimer: timer,
    isDisappearing: true,
  });

  const sendDemoMessage = (timer: DisappearTimer) => {
    const messages = {
      5: 'This message will disappear in 5 minutes! ⏰',
      60: 'This message will disappear in 1 hour! 🕐',
      1440: 'This message will disappear in 24 hours! 📅',
      10080: 'This message will disappear in 7 days! 📆',
    };

    const message = createDemoMessage(timer, messages[timer]);
    onSendDemoMessage(message);
    
    Alert.alert(
      'Demo Message Sent',
      `A message with ${timer === 5 ? '5 minutes' : timer === 60 ? '1 hour' : timer === 1440 ? '24 hours' : '7 days'} timer has been sent!`
    );
  };

  return (
    <View style={{
      backgroundColor: Colors.card,
      borderRadius: 16,
      padding: 16,
      margin: 16,
      borderWidth: 2,
      borderColor: Colors.accent,
    }}>
      <Text style={[Typography.h4, { color: Colors.textPrimary, marginBottom: 12 }]}>
        🎯 Disappearing Messages Demo
      </Text>
      
      <Text style={[Typography.body, { color: Colors.textSecondary, marginBottom: 16 }]}>
        Test the disappearing messages feature with different timers:
      </Text>

      <View style={{ gap: 8 }}>
        <TouchableOpacity
          style={[Buttons.primary, Buttons.small]}
          onPress={() => sendDemoMessage(5)}
        >
          <Text style={[Typography.button, { color: Colors.textPrimary }]}>
            ⏰ 5 Minutes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Buttons.primary, Buttons.small]}
          onPress={() => sendDemoMessage(60)}
        >
          <Text style={[Typography.button, { color: Colors.textPrimary }]}>
            🕐 1 Hour
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Buttons.primary, Buttons.small]}
          onPress={() => sendDemoMessage(1440)}
        >
          <Text style={[Typography.button, { color: Colors.textPrimary }]}>
            📅 24 Hours
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Buttons.primary, Buttons.small]}
          onPress={() => sendDemoMessage(10080)}
        >
          <Text style={[Typography.button, { color: Colors.textPrimary }]}>
            📆 7 Days
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop: 16,
        padding: 12,
        backgroundColor: Colors.surface,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: Colors.accent,
      }}>
        <Text style={[Typography.caption, { color: Colors.textSecondary }]}>
          💡 Tip: Messages are permanently deleted when the timer expires. 
          No recovery is possible once deleted.
        </Text>
      </View>
    </View>
  );
};
