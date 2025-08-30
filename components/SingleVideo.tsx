import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Ionicons } from "@expo/vector-icons";
import Video from "react-native-video";

const SingleVideo = ({ item, index, currentIndex }: any) => {
  const { width, height } = Dimensions.get("window");
  const tabBarHeight = 70;
  const videoHeight = height - tabBarHeight;
  const videoRef = useRef(null);
  const [videoAspectRatio, setVideoAspectRatio] = useState<number | null>(null);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const onBuffer = useCallback(
    (data: any) => {
      setIsBuffering(data.isBuffering);
      if (data.isBuffering) {
        console.log(`Video ${index} buffering...`);
      }
    },
    [index]
  );

  const onError = useCallback(
    (error: any) => {
      console.log(`Video ${index} error:`, error);
    },
    [index]
  );

  const onLoad = useCallback(
    (data: any) => {
      if (data.naturalSize) {
        const { width: videoWidth, height: videoHeight } = data.naturalSize;
        const aspectRatio = videoWidth / videoHeight;
        setVideoAspectRatio(aspectRatio);
        setIsReady(true);
        console.log(`Video ${index} loaded with aspect ratio: ${aspectRatio}`);
      }
    },
    [index]
  );

  const onReadyForDisplay = useCallback(() => {
    setIsReady(true);
    console.log(`Video ${index} ready for display`);
  }, [index]);

  const [isPaused, setIsPaused] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(false);

  const shouldPause = useMemo(() => {
    if (isPaused) return true;

    if (index !== currentIndex) return true;

    if (isBuffering) return true;

    return false;
  }, [isPaused, index, currentIndex, isBuffering]);

  useEffect(() => {
    if (index === currentIndex) {
      setIsPaused(false);
      setShowPlayIcon(false);
    }
  }, [currentIndex, index]);

  useEffect(() => {
    if (showPlayIcon) {
      const timer = setTimeout(() => {
        setShowPlayIcon(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showPlayIcon]);

  const handleVideoPress = useCallback(() => {
    setIsPaused(!isPaused);
    setShowPlayIcon(true);
  }, [isPaused]);

  const getResizeMode = useCallback(() => {
    if (!videoAspectRatio) return "cover";

    const isPortrait = videoAspectRatio < 1;

    return isPortrait ? "cover" : "contain";
  }, [videoAspectRatio]);

  const shouldPreload = useMemo(() => {
    const distance = Math.abs(index - currentIndex);
    return distance <= 1;
  }, [index, currentIndex]);

  return (
    <View
      style={[styles.container, { width, height: videoHeight }]}
      collapsable={false}
    >
      <Video
        ref={videoRef}
        onBuffer={onBuffer}
        onError={onError}
        onLoad={onLoad}
        onReadyForDisplay={onReadyForDisplay}
        paused={shouldPause}
        source={item.video}
        style={styles.video}
        repeat={true}
        muted={false}
        resizeMode={getResizeMode()}
        bufferConfig={{
          minBufferMs: 10000,
          maxBufferMs: 30000,
          bufferForPlaybackMs: 1000,
          bufferForPlaybackAfterRebufferMs: 2000,
        }}
        ignoreSilentSwitch="ignore"
        playInBackground={false}
        playWhenInactive={false}
        {...(shouldPreload ? {} : { paused: true, source: null })}
      />

      <TouchableOpacity
        style={styles.touchOverlay}
        onPress={handleVideoPress}
        activeOpacity={1}
      />

      {showPlayIcon && index === currentIndex && (
        <View style={styles.playIconContainer} pointerEvents="none">
          <Ionicons
            name={isPaused ? "play" : "pause"}
            size={35}
            color="white"
          />
        </View>
      )}

      {isBuffering && index === currentIndex && (
        <View style={styles.bufferingContainer} pointerEvents="none">
          <View style={styles.bufferingSpinner}>
            <Ionicons name="refresh" size={30} color="white" />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    position: "relative",
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
  },
  touchOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  playIconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  bufferingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 3,
  },
  bufferingSpinner: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SingleVideo;
