import React, { useState, useRef, useCallback, useMemo } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { VideoData } from "./Database";
import SingleVideo from "./SingleVideo";

const FeedComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { height, width } = Dimensions.get("window");
  const tabBarHeight = 70;
  const videoHeight = height - tabBarHeight;
  const flatListRef = useRef<FlatList>(null);

  const viewabilityConfig = useMemo(
    () => ({
      viewAreaCoveragePercentThreshold: 0,
      minimumViewTime: 0,
    }),
    []
  );

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index ?? 0;
      setCurrentIndex(newIndex);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  const renderItem = useCallback(
    ({ item, index }: any) => (
      <SingleVideo
        item={item}
        index={index}
        currentIndex={currentIndex}
        key={`video-${index}`}
      />
    ),
    [currentIndex]
  );

  const keyExtractor = useCallback(
    (item: any, index: number) => `video-${index}`,
    []
  );

  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: videoHeight,
      offset: videoHeight * index,
      index,
    }),
    [videoHeight]
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <FlatList
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={false}
        ref={flatListRef}
        data={VideoData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        pagingEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        getItemLayout={getItemLayout}
        removeClippedSubviews={false}
        maxToRenderPerBatch={1}
        windowSize={3}
        initialNumToRender={1}
        snapToInterval={videoHeight}
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode="never"
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
        contentInset={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 17,
  },
  flatList: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: "black",
    paddingTop: 0,
  },
});

export default FeedComponents;
