import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { Colors } from "../constants/Colors";
import { Typography } from "../constants/Styles";
import {
  getTimeRemaining,
  formatTimeRemaining,
  getTimerColor,
} from "../utils/messageUtils";

interface DisappearingTimerProps {
  expiresAt: Date;
  size?: "small" | "medium" | "large";
}

export const DisappearingTimer: React.FC<DisappearingTimerProps> = ({
  expiresAt,
  size = "small",
}) => {
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(expiresAt)
  );
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(expiresAt);
      setTimeRemaining(remaining);

      if (remaining <= 60) {
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 0.7,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ).start();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, pulseAnim]);

  if (timeRemaining <= 0) return null;

  const timerColor = getTimerColor(timeRemaining);
  const isUrgent = timeRemaining <= 60;

  const sizeStyles = {
    small: {
      container: { width: 16, height: 16 },
      text: { fontSize: 8 },
    },
    medium: {
      container: { width: 20, height: 20 },
      text: { fontSize: 10 },
    },
    large: {
      container: { width: 24, height: 24 },
      text: { fontSize: 12 },
    },
  };

  return (
    <Animated.View
      style={[
        {
          backgroundColor: timerColor,
          borderRadius: sizeStyles[size].container.width / 2,
          alignItems: "center",
          justifyContent: "center",
          opacity: pulseAnim,
        },
        sizeStyles[size].container,
      ]}
    >
      <Text
        style={[
          {
            color: Colors.textPrimary,
            fontWeight: "bold",
            textAlign: "center",
          },
          sizeStyles[size].text,
        ]}
      >
        {isUrgent ? "!" : "⏰"}
      </Text>
    </Animated.View>
  );
};

export const TimerLabel: React.FC<{ expiresAt: Date }> = ({ expiresAt }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(expiresAt)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(expiresAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  if (timeRemaining <= 0) return null;

  return (
    <Text style={[Typography.caption, { color: getTimerColor(timeRemaining) }]}>
      {formatTimeRemaining(timeRemaining)}
    </Text>
  );
};
