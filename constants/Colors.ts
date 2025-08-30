export const Colors = {
  primary: "#0A0A0A",
  secondary: "#1A1A1A",
  tertiary: "#2A2A2A",
  quaternary: "#3A3A3A",

  accent: "#FFD700",
  accentLight: "#FFE55C",
  accentDark: "#B8860B",
  accentHover: "#FFED4E",

  transparent: "transparent",

  textPrimary: "#000000",
  textSecondary: "#E0E0E0",
  textTertiary: "#B0B0B0",
  textMuted: "#808080",

  background: "#0A0A0A",
  surface: "#1A1A1A",
  card: "#2A2A2A",
  modal: "#1F1F1F",

  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  info: "#2196F3",

  chatBubble: "#2A2A2A",
  chatBubbleSelf: "#1E3A8A",
  chatBubbleOther: "#2A2A2A",
  chatBubbleDisappearing: "#B8860B",

  border: "#3A3A3A",
  borderLight: "#4A4A4A",
  borderDark: "#2A2A2A",

  shadow: "rgba(0, 0, 0, 0.5)",
  shadowLight: "rgba(0, 0, 0, 0.3)",

  overlay: "rgba(0, 0, 0, 0.7)",
  overlayLight: "rgba(0, 0, 0, 0.5)",

  gradientStart: "#0A0A0A",
  gradientEnd: "#1A1A1A",
  accentGradientStart: "#FFD700",
  accentGradientEnd: "#B8860B",
} as const;

export type ColorScheme = typeof Colors;
