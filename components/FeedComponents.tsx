import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { VideoData } from "./Database";
import SingleVideo from "./SingleVideo";

const FeedComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={VideoData}
      vertical={true}
      onChangeIndex={({ index }) => handleChangeIndex(index)}
      renderItem={({ item, index }) => (
        <SingleVideo item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default FeedComponents;
