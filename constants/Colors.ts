export const Colors = {
  // Dark theme colors
  primary: "#0A0A0A", // Deep black
  secondary: "#1A1A1A", // Dark gray
  tertiary: "#2A2A2A", // Medium dark gray
  quaternary: "#3A3A3A", // Lighter dark gray

  // Star Wars inspired yellow accents
  accent: "#FFD700", // Bright gold yellow
  accentLight: "#FFE55C", // Light yellow
  accentDark: "#B8860B", // Dark goldenrod
  accentHover: "#FFED4E", // Hover state yellow

  // Utility colors
  transparent: "transparent", // Transparent color

  // Text colors
  textPrimary: "#000000", // White text
  textSecondary: "#E0E0E0", // Light gray text
  textTertiary: "#B0B0B0", // Medium gray text
  textMuted: "#808080", // Muted gray text

  // Background colors
  background: "#0A0A0A", // Main background
  surface: "#1A1A1A", // Surface background
  card: "#2A2A2A", // Card background
  modal: "#1F1F1F", // Modal background

  // Status colors
  success: "#4CAF50", // Green
  warning: "#FF9800", // Orange
  error: "#F44336", // Red
  info: "#2196F3", // Blue

  // Chat specific colors
  chatBubble: "#2A2A2A", // Chat bubble background
  chatBubbleSelf: "#1E3A8A", // Own chat bubble
  chatBubbleOther: "#2A2A2A", // Other's chat bubble
  chatBubbleDisappearing: "#B8860B", // Disappearing message bubble

  // Border colors
  border: "#3A3A3A", // Border color
  borderLight: "#4A4A4A", // Light border
  borderDark: "#2A2A2A", // Dark border

  // Shadow colors
  shadow: "rgba(0, 0, 0, 0.5)", // Shadow color
  shadowLight: "rgba(0, 0, 0, 0.3)", // Light shadow

  // Overlay colors
  overlay: "rgba(0, 0, 0, 0.7)", // Overlay color
  overlayLight: "rgba(0, 0, 0, 0.5)", // Light overlay

  // Gradient colors
  gradientStart: "#0A0A0A", // Gradient start
  gradientEnd: "#1A1A1A", // Gradient end
  accentGradientStart: "#FFD700", // Accent gradient start
  accentGradientEnd: "#B8860B", // Accent gradient end
} as const;

export type ColorScheme = typeof Colors;
