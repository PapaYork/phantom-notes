import { Colors } from "../constants/Colors";
import { format } from "date-fns";
import { Link } from "expo-router";
import { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export interface ChatRowProps {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: FC<ChatRowProps> = ({
  id,
  from,
  date,
  img,
  msg,
  read,
  unreadCount,
}) => {
  const formattedDate = format(date, "MM.dd.yy");

  return (
    <Link href={`/(tabs)/chats/${id}`} asChild>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image source={{ uri: img }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{from}</Text>
              <View style={styles.messageContainer}>
                <Text
                  style={styles.message}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {msg}
                </Text>
              </View>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.date}>{formattedDate}</Text>
              {unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{unreadCount}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableWithoutFeedback>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: Colors.quaternary,
  },
  textContainer: {
    flex: 1,
    gap: 2,
    marginRight: 8, // Space for right section
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000000",
    lineHeight: 20,
  },
  messageContainer: {
    flex: 1,
    minWidth: 100, // Important for text truncation
  },
  message: {
    fontSize: 14,
    color: "#667781",
    lineHeight: 18,
    fontWeight: "400",
    flex: 1,
  },
  rightSection: {
    alignItems: "flex-end",
    gap: 8,
    minWidth: 60, // Reserve space for date and badge
  },
  date: {
    fontSize: 12,
    color: "#667781",
    fontWeight: "400",
    lineHeight: 16,
  },
  unreadBadge: {
    backgroundColor: Colors.accent,
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  unreadCount: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E9EDEF",
    marginLeft: 87, // 16 (padding) + 55 (avatar) + 16 (gap)
  },
});

export default ChatRow;
