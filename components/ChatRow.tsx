import { Colors } from "../constants/Colors";
import { format } from "date-fns";
import { Link } from "expo-router";
import { FC } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
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
  const truncatedMessage = msg.length > 40 ? `${msg.substring(0, 40)}...` : msg;
  const formattedDate = format(date, "MM.dd.yy");

  return (
    <Link href={`/(tabs)/chats/${id}`} asChild>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={Colors.quaternary}
        style={styles.container}
      >
        <View style={styles.content}>
          <Image source={{ uri: img }} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{from}</Text>
            <Text style={styles.message}>{truncatedMessage}</Text>
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
      </TouchableHighlight>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.quaternary,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  message: {
    fontSize: 16,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  rightSection: {
    alignItems: "flex-end",
    gap: 8,
  },
  date: {
    fontSize: 14,
    color: Colors.textTertiary,
    fontWeight: "500",
  },
  unreadBadge: {
    backgroundColor: Colors.accent,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  unreadCount: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default ChatRow;
