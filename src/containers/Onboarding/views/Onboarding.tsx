import { FlatList, View, Animated } from "react-native";
import React, { useEffect, useState } from "react";

import { MOCK_ONBOARDING_SCREENS } from "~containers/Core/Navigation/screens";
import { OnboardingContainerView } from "~components";
import { screenHeight, screenWidth } from "~constants";

const Onboarding = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<FlatList>(null);

  const handleScroll = () => {
    setScrollIndex(scrollIndex + 1);
  };

  const onScrollEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
    }
  );

  const nextScreenName = (index: number) => {
    return index < MOCK_ONBOARDING_SCREENS.length - 1
      ? MOCK_ONBOARDING_SCREENS[index]?.name
      : "";
  };

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({ index: scrollIndex, animated: true });
  }, [scrollIndex]);

  return (
    <View style={{ height: screenHeight }}>
      <FlatList
        ref={flatListRef}
        data={MOCK_ONBOARDING_SCREENS}
        onScroll={onScrollEvent}
        renderItem={({ item, index }) => (
          <OnboardingContainerView
            screen={item}
            nextScreenName={nextScreenName(index)}
            scrollX={scrollX}
            handleScroll={handleScroll}
            skipButton={false}
          />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={screenWidth}
        horizontal
        scrollEnabled={false}
      />
    </View>
  );
};

export default Onboarding;
