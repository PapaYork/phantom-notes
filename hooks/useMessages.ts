import { useState, useEffect, useCallback } from 'react';
import { Message, MessageStatus, DisappearTimer } from '../types/message';
import { generateMessageId, calculateExpiryTime } from '../utils/messageUtils';

interface UseMessagesProps {
  chatId: string;
  currentUserId: string;
  otherUserId: string;
}

export const useMessages = ({ chatId, currentUserId, otherUserId }: UseMessagesProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback((content: string, disappearTimer: DisappearTimer) => {
    const newMessage: Message = {
      id: generateMessageId(),
      senderId: currentUserId,
      receiverId: otherUserId,
      content,
      timestamp: new Date(),
      expiresAt: calculateExpiryTime(disappearTimer),
      status: 'sending',
      disappearTimer,
      isDisappearing: true,
    };

    setMessages(prev => [newMessage, ...prev]);

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, status: 'sent' as MessageStatus }
            : msg
        )
      );
    }, 1000);

    return newMessage;
  }, [currentUserId, otherUserId]);

  const updateMessageStatus = useCallback((messageId: string, status: MessageStatus) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, status }
          : msg
      )
    );
  }, []);

  const removeMessage = useCallback((messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  }, []);

  const loadMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const mockMessages: Message[] = [
        {
          id: '1',
          senderId: otherUserId,
          receiverId: currentUserId,
          content: 'Hey! How are you doing?',
          timestamp: new Date(Date.now() - 300000),
          expiresAt: new Date(Date.now() + 300000),
          status: 'read',
          disappearTimer: 5,
          isDisappearing: true,
        },
        {
          id: '2',
          senderId: currentUserId,
          receiverId: otherUserId,
          content: 'I\'m doing great! Thanks for asking.',
          timestamp: new Date(Date.now() - 240000),
          expiresAt: new Date(Date.now() + 360000),
          status: 'delivered',
          disappearTimer: 60,
          isDisappearing: true,
        },
        {
          id: '3',
          senderId: otherUserId,
          receiverId: currentUserId,
          content: 'That\'s awesome! Want to grab coffee later?',
          timestamp: new Date(Date.now() - 180000),
          expiresAt: new Date(Date.now() + 86400000),
          status: 'sent',
          disappearTimer: 1440,
          isDisappearing: true,
        },
      ];

      setMessages(mockMessages);
    } catch (err) {
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }, [chatId, currentUserId, otherUserId]);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  return {
    messages,
    loading,
    error,
    sendMessage,
    updateMessageStatus,
    removeMessage,
    loadMessages,
  };
};
