import { useEffect, useRef, useCallback } from 'react';
import { Message } from '../types/message';
import { isMessageExpired, getTimeRemaining } from '../utils/messageUtils';

interface UseDisappearingMessagesProps {
  messages: Message[];
  onMessageExpire: (messageId: string) => void;
}

export const useDisappearingMessages = ({ messages, onMessageExpire }: UseDisappearingMessagesProps) => {
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const scheduleMessageDeletion = useCallback((message: Message) => {
    if (!message.isDisappearing) return;

    const timeRemaining = getTimeRemaining(message.expiresAt);
    
    if (timeRemaining <= 0) {
      onMessageExpire(message.id);
      return;
    }

    const timer = setTimeout(() => {
      onMessageExpire(message.id);
      timersRef.current.delete(message.id);
    }, timeRemaining * 1000);

    timersRef.current.set(message.id, timer);
  }, [onMessageExpire]);

  const clearMessageTimer = useCallback((messageId: string) => {
    const timer = timersRef.current.get(messageId);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(messageId);
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current.clear();
  }, []);

  useEffect(() => {
    messages.forEach(message => {
      if (message.isDisappearing && !isMessageExpired(message)) {
        clearMessageTimer(message.id);
        scheduleMessageDeletion(message);
      }
    });

    return () => {
      clearAllTimers();
    };
  }, [messages, scheduleMessageDeletion, clearMessageTimer, clearAllTimers]);

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  return {
    clearMessageTimer,
    clearAllTimers,
  };
};
