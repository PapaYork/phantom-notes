import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { Colors } from '../constants/Colors';
import { ChatStyles } from '../constants/Styles';

export const TypingIndicator: React.FC = () => {
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(dot1Anim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(dot2Anim, {
            toValue: 1,
            duration: 400,
            delay: 200,
            useNativeDriver: true,
          }),
          Animated.timing(dot3Anim, {
            toValue: 1,
            duration: 400,
            delay: 400,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(dot1Anim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(dot2Anim, {
            toValue: 0,
            duration: 400,
            delay: 200,
            useNativeDriver: true,
          }),
          Animated.timing(dot3Anim, {
            toValue: 0,
            duration: 400,
            delay: 400,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => animate());
    };

    animate();

    return () => {
      dot1Anim.stopAnimation();
      dot2Anim.stopAnimation();
      dot3Anim.stopAnimation();
    };
  }, [dot1Anim, dot2Anim, dot3Anim]);

  return (
    <View style={{ 
      marginVertical: 4, 
      marginHorizontal: 16,
      alignItems: 'flex-start',
    }}>
      <View style={[ChatStyles.bubbleOther, { paddingHorizontal: 12, paddingVertical: 8 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Animated.View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: Colors.textMuted,
              opacity: dot1Anim,
            }}
          />
          <Animated.View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: Colors.textMuted,
              opacity: dot2Anim,
            }}
          />
          <Animated.View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: Colors.textMuted,
              opacity: dot3Anim,
            }}
          />
        </View>
      </View>
    </View>
  );
};
