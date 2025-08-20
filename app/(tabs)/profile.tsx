import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme } from "../../constants/Theme";
import { TabBarStyles } from "../../constants/Styles";

const ProfileScreen = () => {
  const { theme } = useTheme();
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("Kevin Hart");
  const [username, setUsername] = React.useState("@kevinhart");
  const [bio, setBio] = React.useState("Comedian, Actor, and Host");
  const [phoneNumber, setPhoneNumber] = React.useState("+1 234 567 8900");
  const [image, setImage] = React.useState("https://via.placeholder.com/80");
  const [status, setStatus] = React.useState("online"); // online, idle, dnd, offline

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "#43B581";
      case "idle":
        return "#FAA61A";
      case "dnd":
        return "#F04747";
      case "offline":
        return "#747F8D";
      default:
        return "#43B581";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "idle":
        return "Idle";
      case "dnd":
        return "Do Not Disturb";
      case "offline":
        return "Offline";
      default:
        return "Online";
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView style={styles.scrollContainer}>
        {/* Profile Header */}
        <View
          style={[
            styles.profileHeader,
            { backgroundColor: theme.surface, borderBottomColor: theme.border },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.profileImage} source={{ uri: image }} />
            <View
              style={[
                styles.statusIndicator,
                { backgroundColor: getStatusColor(status) },
              ]}
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={[styles.displayName, { color: theme.textPrimary }]}>
              {name}
            </Text>
            <Text style={[styles.username, { color: theme.textSecondary }]}>
              {username}
            </Text>
            <Text style={[styles.statusText, { color: theme.textTertiary }]}>
              {getStatusText(status)}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.editButton, { backgroundColor: theme.card }]}
            onPress={handleEditPress}
          >
            <Ionicons name="pencil" size={20} color={theme.accent} />
          </TouchableOpacity>
        </View>

        {/* Bio Section */}
        <View style={[styles.bioSection, { borderBottomColor: theme.border }]}>
          <Text style={[styles.bioText, { color: theme.textSecondary }]}>
            {bio}
          </Text>
        </View>

        {/* Edit Profile Section */}
        {isEditing && (
          <View style={[styles.editSection, { backgroundColor: theme.card }]}>
            <Text style={[styles.editTitle, { color: theme.textPrimary }]}>
              Edit Profile
            </Text>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                Display Name
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                    color: theme.textPrimary,
                  },
                ]}
                value={name}
                onChangeText={setName}
                placeholder="Enter your display name"
                placeholderTextColor={theme.textTertiary}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                Username
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                    color: theme.textPrimary,
                  },
                ]}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                placeholderTextColor={theme.textTertiary}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                Bio
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                    color: theme.textPrimary,
                  },
                ]}
                value={bio}
                onChangeText={setBio}
                placeholder="Tell us about yourself"
                placeholderTextColor={theme.textTertiary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                Phone Number
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                    color: theme.textPrimary,
                  },
                ]}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                placeholderTextColor={theme.textTertiary}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                Status
              </Text>
              <View style={styles.statusSelector}>
                {["online", "idle", "dnd", "offline"].map((s) => (
                  <TouchableOpacity
                    key={s}
                    style={[
                      styles.statusOption,
                      {
                        borderColor: theme.border,
                        backgroundColor: theme.surface,
                      },
                      status === s && {
                        backgroundColor: theme.accent,
                        borderColor: theme.accent,
                      },
                    ]}
                    onPress={() => setStatus(s)}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: getStatusColor(s) },
                      ]}
                    />
                    <Text
                      style={[
                        styles.statusOptionText,
                        { color: theme.textSecondary },
                        status === s && { color: "#FFFFFF" },
                      ]}
                    >
                      {getStatusText(s)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: theme.accent }]}
              onPress={handleEditPress}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Settings Sections */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { backgroundColor: theme.card, color: theme.textPrimary },
            ]}
          >
            Account Settings
          </Text>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="person-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Personal Information
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="shield-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Privacy & Safety
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Notifications
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="color-palette-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Appearance
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
            onPress={() => {
              const { toggleTheme } = useTheme();
              toggleTheme();
            }}
          >
            <Ionicons
              name={
                theme.background === darkTheme.background
                  ? "sunny-outline"
                  : "moon-outline"
              }
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              {theme.background === darkTheme.background
                ? "Light Mode"
                : "Dark Mode"}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { backgroundColor: theme.card, color: theme.textPrimary },
            ]}
          >
            Billing & Payments
          </Text>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="card-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Payment Methods
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="receipt-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Billing History
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="gift-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Gift Cards
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { backgroundColor: theme.card, color: theme.textPrimary },
            ]}
          >
            Support & Feedback
          </Text>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Help Center
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Contact Support
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuItem,
              {
                backgroundColor: theme.surface,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={theme.textPrimary}
              style={styles.menuIcon}
            />
            <Text style={[styles.menuItemText, { color: theme.textPrimary }]}>
              Give Feedback
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={theme.textTertiary}
            />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[
              styles.logoutButton,
              { borderColor: theme.error, backgroundColor: theme.error + "20" },
            ]}
          >
            <Ionicons name="log-out-outline" size={20} color={theme.error} />
            <Text style={[styles.logoutText, { color: theme.error }]}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.versionText, { color: theme.textTertiary }]}>
          Version 1.0.0 © 2024 PHA. All rights reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8FAFC",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  statusIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  displayName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6B7280",
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#9CA3AF",
  },
  editButton: {
    padding: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
  },
  bioSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  bioText: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
  },
  editSection: {
    padding: 20,
    backgroundColor: "#F8FAFC",
    marginBottom: 20,
  },
  editTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  statusSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  statusOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },
  statusOptionActive: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6",
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  statusOptionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  statusOptionTextActive: {
    color: "#FFFFFF",
  },
  saveButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F8FAFC",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    backgroundColor: "#FFFFFF",
  },
  menuIcon: {
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  actionButtons: {
    padding: 20,
    gap: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FEE2E2",
    backgroundColor: "#FEF2F2",
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#EF4444",
  },
  versionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9CA3AF",
    textAlign: "center",
    padding: 20,
  },
});

export default ProfileScreen;
