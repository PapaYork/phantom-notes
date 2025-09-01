import { useState, useEffect, useCallback } from 'react';
import { TypingIndicator } from '../types/message';

interface UseRealTimeMessagesProps {
  chatId: string;
  currentUserId: string;
  otherUserId: string;
}

export const useRealTimeMessages = ({ chatId, currentUserId, otherUserId }: UseRealTimeMessagesProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const [otherUserTyping, setOtherUserTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const startTyping = useCallback(() => {
    if (!isTyping) {
      setIsTyping(true);
      // In a real app, emit typing event to server
      setTimeout(() => setIsTyping(false), 3000);
    }
  }, [isTyping]);

  const stopTyping = useCallback(() => {
    setIsTyping(false);
    // In a real app, emit stop typing event to server
  }, []);

  const simulateOtherUserTyping = useCallback(() => {
    setOtherUserTyping(true);
    setTimeout(() => setOtherUserTyping(false), 3000);
  }, []);

  const markAsRead = useCallback((messageIds: string[]) => {
    // In a real app, send read receipts to server
    console.log('Marking messages as read:', messageIds);
  }, []);

  const markAsDelivered = useCallback((messageIds: string[]) => {
    // In a real app, send delivery receipts to server
    console.log('Marking messages as delivered:', messageIds);
  }, []);

  useEffect(() => {
    setOnlineUsers([currentUserId, otherUserId]);
    
    const interval = setInterval(() => {
      simulateOtherUserTyping();
    }, 15000);

    return () => clearInterval(interval);
  }, [currentUserId, otherUserId, simulateOtherUserTyping]);

  return {
    isTyping,
    otherUserTyping,
    onlineUsers,
    startTyping,
    stopTyping,
    markAsRead,
    markAsDelivered,
  };
};
