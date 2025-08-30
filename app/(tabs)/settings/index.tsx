import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={32} color="#25D366" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Your Name</Text>
            <Text style={styles.profileStatus}>
              Hey there! I am using Phantom Notes
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="qr-code" size={20} color="#25D366" />
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="key" size={20} color="#25D366" />
            </View>
            <Text style={styles.settingTitle}>Account</Text>
            <Ionicons name="chevron-forward" size={16} color="#667781" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="chatbubbles" size={20} color="#25D366" />
            </View>
            <Text style={styles.settingTitle}>Chats</Text>
            <Ionicons name="chevron-forward" size={16} color="#667781" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="notifications" size={20} color="#25D366" />
            </View>
            <Text style={styles.settingTitle}>Notifications</Text>
            <Ionicons name="chevron-forward" size={16} color="#667781" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="shield-checkmark" size={20} color="#25D366" />
            </View>
            <Text style={styles.settingTitle}>Privacy</Text>
            <Ionicons name="chevron-forward" size={16} color="#667781" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    lineHeight: 22,
  },
  profileStatus: {
    fontSize: 14,
    color: "#667781",
    lineHeight: 18,
  },
  editButton: {
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 36,
    minHeight: 36,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E9EDEF",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  settingsSection: {
    paddingTop: 8,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  settingTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    lineHeight: 20,
  },
});
