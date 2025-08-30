import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "./Colors";

// Typography styles
export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: "bold" as const,
    color: Colors.textPrimary,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: Colors.textPrimary,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: "600" as const,
    color: Colors.textPrimary,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: "600" as const,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: "normal" as const,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: "normal" as const,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: "normal" as const,
    color: Colors.textTertiary,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
} as const;

// Button styles
export const Buttons = {
  primary: {
    backgroundColor: Colors.accent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  secondary: {
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  ghost: {
    backgroundColor: Colors.transparent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  small: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
} as const;

// Text styles
export const Texts = {
  primary: {
    ...Typography.body,
    color: Colors.textPrimary,
  },
  secondary: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  accent: {
    ...Typography.body,
    color: Colors.accent,
  },
  muted: {
    ...Typography.body,
    color: Colors.textMuted,
  },
  heading: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },
  caption: {
    ...Typography.caption,
    color: Colors.textTertiary,
  },
} as const;

// Input styles
export const Inputs = {
  primary: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: Colors.textPrimary,
    fontSize: 16,
    lineHeight: 22,
  },
  focused: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: Colors.textPrimary,
    fontSize: 16,
    lineHeight: 22,
  },
  error: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.error,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: Colors.textPrimary,
    fontSize: 16,
    lineHeight: 22,
  },
} as const;

// Card styles
export const Cards = {
  primary: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  secondary: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chat: {
    backgroundColor: Colors.chatBubble,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    maxWidth: "80%",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
} as const;

// Layout styles
export const Layout = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  row: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  column: {
    flexDirection: "column" as const,
  },
  center: {
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  spaceBetween: {
    justifyContent: "space-between" as const,
  },
  spaceAround: {
    justifyContent: "space-around" as const,
  },
  padding: {
    padding: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  margin: {
    margin: 20,
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
  marginVertical: {
    marginVertical: 20,
  },
} as const;

// Chat specific styles
export const ChatStyles = {
  bubble: {
    ...Cards.chat,
    marginVertical: 4,
  },
  bubbleSelf: {
    ...Cards.chat,
    backgroundColor: Colors.chatBubbleSelf,
    alignSelf: "flex-end" as const,
    marginVertical: 4,
  },
  bubbleOther: {
    ...Cards.chat,
    backgroundColor: Colors.chatBubbleOther,
    alignSelf: "flex-start" as const,
    marginVertical: 4,
  },
  bubbleDisappearing: {
    ...Cards.chat,
    backgroundColor: Colors.chatBubbleDisappearing,
    borderWidth: 2,
    borderColor: Colors.accent,
    marginVertical: 4,
  },
  inputContainer: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  messageInput: {
    backgroundColor: Colors.card,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: Colors.textPrimary,
    fontSize: 16,
    maxHeight: 100,
  },
} as const;

// Tab bar styles
export const TabBarStyles = {
  container: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingBottom: 20,
    paddingTop: 10,
    height: 90,
  },
  tab: {
    alignItems: "center" as const,
    justifyContent: "center" as const,
    paddingVertical: 8,
  },
  tabLabel: {
    ...Typography.caption,
    marginTop: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
} as const;

// Animation styles
export const Animations = {
  fadeIn: {
    opacity: 1,
  },
  fadeOut: {
    opacity: 0,
  },
  slideUp: {
    transform: [{ translateY: 0 }],
  },
  slideDown: {
    transform: [{ translateY: 50 }],
  },
  scaleIn: {
    transform: [{ scale: 1 }],
  },
  scaleOut: {
    transform: [{ scale: 0.9 }],
  },
} as const;

// Combined styles object
export const Styles = {
  Typography,
  Buttons,
  Texts,
  Inputs,
  Cards,
  Layout,
  ChatStyles,
  TabBarStyles,
  Animations,
} as const;

export const defaultStyles = StyleSheet.create({
  block: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 14,
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 60,
  },
});

export default Styles;
