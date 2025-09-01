import { addMinutes, differenceInSeconds, formatDistanceToNow } from 'date-fns';
import { DisappearTimer, Message } from '../types/message';

export const DISAPPEAR_TIMERS: { value: DisappearTimer; label: string }[] = [
  { value: 5, label: '5 minutes' },
  { value: 60, label: '1 hour' },
  { value: 1440, label: '24 hours' },
  { value: 10080, label: '7 days' },
];

export const calculateExpiryTime = (timer: DisappearTimer): Date => {
  return addMinutes(new Date(), timer);
};

export const getTimeRemaining = (expiresAt: Date): number => {
  return Math.max(0, differenceInSeconds(expiresAt, new Date()));
};

export const formatTimeRemaining = (seconds: number): string => {
  if (seconds <= 0) return 'Expired';
  
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
};

export const isMessageExpired = (message: Message): boolean => {
  return new Date() >= message.expiresAt;
};

export const shouldShowTimer = (message: Message): boolean => {
  return message.isDisappearing && !isMessageExpired(message);
};

export const getTimerColor = (seconds: number): string => {
  if (seconds <= 60) return '#F44336'; // Red for last minute
  if (seconds <= 300) return '#FF9800'; // Orange for last 5 minutes
  return '#4CAF50'; // Green for normal
};

export const generateMessageId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
