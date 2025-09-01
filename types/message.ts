export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'error';

export type DisappearTimer = 5 | 60 | 1440 | 10080; // 5min, 1hr, 24hr, 7days in minutes

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  expiresAt: Date;
  status: MessageStatus;
  disappearTimer: DisappearTimer;
  isDisappearing: boolean;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  lastSeen?: Date;
}

export interface TypingIndicator {
  userId: string;
  isTyping: boolean;
  timestamp: Date;
}
