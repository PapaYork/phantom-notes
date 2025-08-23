interface ContactItemProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    lastSeen?: Date;
    isOnline: boolean;
    phoneNumber?: string;
  };
  onPress: (contactId: string) => void;
  showStatus?: boolean;
  showLastSeen?: boolean;
}

// Features it might include:
// - Online/offline status indicators
// - Last seen timestamps
// - Swipe actions (call, message, delete)
// - Search highlighting
