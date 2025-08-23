interface SettingsItemProps {
  title: string;
  subtitle?: string;
  icon?: string; // Icon name or component
  onPress?: () => void;
  rightElement?: "arrow" | "toggle" | "badge" | React.ReactNode;
  disabled?: boolean;
}

// Different types of settings items:
// - Navigation items (with arrow)
// - Toggle switches (notifications on/off)
// - Action items (logout, delete account)
// - Info items (app version, user info)
