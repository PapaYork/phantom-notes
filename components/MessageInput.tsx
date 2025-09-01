import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Modal, 
  FlatList, 
  Text,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { ChatStyles, Typography, Buttons } from '../constants/Styles';
import { DisappearTimer } from '../types/message';
import { DISAPPEAR_TIMERS } from '../utils/messageUtils';

interface MessageInputProps {
  onSendMessage: (content: string, disappearTimer: DisappearTimer) => void;
  onTyping: () => void;
  onStopTyping: () => void;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  onTyping,
  onStopTyping,
  disabled = false,
}) => {
  const [message, setMessage] = useState('');
  const [showTimerPicker, setShowTimerPicker] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState<DisappearTimer>(5);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTextChange = (text: string) => {
    setMessage(text);
    
    if (!isTyping) {
      setIsTyping(true);
      onTyping();
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      onStopTyping();
    }, 2000);
  };

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim(), selectedTimer);
      setMessage('');
      setIsTyping(false);
      onStopTyping();
      
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    }
  };

  const handleTimerSelect = (timer: DisappearTimer) => {
    setSelectedTimer(timer);
    setShowTimerPicker(false);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const renderTimerOption = ({ item }: { item: typeof DISAPPEAR_TIMERS[0] }) => (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        backgroundColor: selectedTimer === item.value ? Colors.accent : Colors.surface,
      }}
      onPress={() => handleTimerSelect(item.value)}
    >
      <Text style={[
        Typography.body,
        { 
          color: selectedTimer === item.value ? Colors.textPrimary : Colors.textSecondary,
          fontWeight: selectedTimer === item.value ? '600' : 'normal',
        }
      ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={ChatStyles.inputContainer}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'flex-end',
          gap: 8,
        }}>
          <TouchableOpacity
            style={{
              padding: 8,
              borderRadius: 20,
              backgroundColor: Colors.accent,
            }}
            onPress={() => setShowTimerPicker(true)}
          >
            <Ionicons name="timer-outline" size={20} color={Colors.textPrimary} />
          </TouchableOpacity>
          
          <View style={{ 
            flex: 1,
            backgroundColor: Colors.card,
            borderRadius: 25,
            paddingHorizontal: 16,
            paddingVertical: 8,
            maxHeight: 100,
          }}>
            <TextInput
              style={[ChatStyles.messageInput, { 
                borderWidth: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
              }]}
              value={message}
              onChangeText={handleTextChange}
              placeholder="Type a message..."
              placeholderTextColor={Colors.textMuted}
              multiline
              maxLength={1000}
              editable={!disabled}
            />
          </View>
          
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 25,
              backgroundColor: message.trim() ? Colors.accent : Colors.quaternary,
              opacity: message.trim() && !disabled ? 1 : 0.5,
            }}
            onPress={handleSend}
            disabled={!message.trim() || disabled}
          >
            <Ionicons 
              name="send" 
              size={20} 
              color={Colors.textPrimary} 
            />
          </TouchableOpacity>
        </View>
        
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginTop: 8,
          paddingHorizontal: 4,
        }}>
          <Text style={[Typography.caption, { color: Colors.textMuted }]}>
            Timer: {DISAPPEAR_TIMERS.find(t => t.value === selectedTimer)?.label}
          </Text>
          <Text style={[Typography.caption, { color: Colors.textMuted }]}>
            {message.length}/1000
          </Text>
        </View>
      </View>

      <Modal
        visible={showTimerPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowTimerPicker(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: Colors.overlay,
          justifyContent: 'flex-end',
        }}>
          <View style={{
            backgroundColor: Colors.surface,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 20,
            maxHeight: '50%',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderBottomColor: Colors.border,
            }}>
              <Text style={[Typography.h4, { color: Colors.textPrimary }]}>
                Select Timer
              </Text>
              <TouchableOpacity onPress={() => setShowTimerPicker(false)}>
                <Ionicons name="close" size={24} color={Colors.textSecondary} />
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={DISAPPEAR_TIMERS}
              renderItem={renderTimerOption}
              keyExtractor={(item) => item.value.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
