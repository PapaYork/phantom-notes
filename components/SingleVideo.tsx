import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Video from "react-native-video";

// Fix: Accept props as a single object parameter
const SingleVideo = ({
  item,
  index,
  currentIndex,
}: {
  item: any;
  index: any;
  currentIndex: any;
}) => {
  const { width, height } = Dimensions.get("window");

  const videoRef = useRef(null);

  const onBuffer = () => {
    console.log("Buffering...");
  };

  const onError = () => {
    console.log("Error...");
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <TouchableOpacity style={styles.videoContainer}>
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          paused={index !== currentIndex} // Only play current video
          source={item.video}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
});

export default SingleVideo;
