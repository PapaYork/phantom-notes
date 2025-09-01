import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Typography, Layout } from '../constants/Styles';
import { User } from '../types/message';

interface ChatHeaderProps {
  user: User;
  onBack?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onBack }) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View style={{
      backgroundColor: Colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    }}>
      <TouchableOpacity
        onPress={handleBack}
        style={{
          padding: 8,
          borderRadius: 20,
        }}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
      </TouchableOpacity>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: user.avatar || `https://i.pravatar.cc/150?u=${user.id}` }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
          <View style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: user.isOnline ? Colors.success : Colors.textMuted,
            borderWidth: 2,
            borderColor: Colors.surface,
          }} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[Typography.h4, { color: Colors.textPrimary }]}>
            {user.name}
          </Text>
          <Text style={[Typography.caption, { 
            color: user.isOnline ? Colors.success : Colors.textMuted 
          }]}>
            {user.isOnline ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 8,
          borderRadius: 20,
        }}
      >
        <Ionicons name="ellipsis-vertical" size={24} color={Colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
};
