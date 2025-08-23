interface ChatBubbleProps {
  message: {
    id: string;
    text: string;
    timestamp: Date;
    senderId: string;
    type: "text" | "image" | "file";
  };
  isOwn: boolean; // true if message is from current user
  showAvatar?: boolean;
  showTimestamp?: boolean;
}

// Features it might include:
// - Different bubble colors for sent/received
// - Message status indicators (sent, delivered, read)
// - Long press menu (copy, delete, reply)
// - Different layouts for media messages
