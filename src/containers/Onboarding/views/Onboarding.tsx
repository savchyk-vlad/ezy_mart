import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Animated } from 'react-native';

import { OnboardingContainerView } from '~components';
import { SCREENS, HEIGHT, WIDTH } from '~constants';
import { imagePathes } from '~assets/images/images';

const MOCK_ONBOARDING_SCREENS = [
  {
    name: SCREENS.ONBOARDING,
    headerText: 'Discover Endless Shopping Possibilities',
    imagePath: imagePathes.onboardingBg1ImagePath,
  },
  {
    name: SCREENS.ONBOARDING,
    headerText: 'Effortless Shopping Experience',
    imagePath: imagePathes.onboardingBg2ImagePath,
  },
  {
    name: SCREENS.ONBOARDING,
    headerText: 'Stay Ahead of the Latest Trends',
    paragraph: 'Welcome Aboard EziBuy: Navigating Your Health Journey',
    imagePath: imagePathes.onboardingBg3ImagePath,
  },
];

const Onboarding = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = () => {
    setScrollIndex(scrollIndex + 1);
  };

  const onScrollEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
    },
  );

  const nextScreenName = (index: number) => {
    return index < MOCK_ONBOARDING_SCREENS.length - 1
      ? MOCK_ONBOARDING_SCREENS[index]?.name
      : '';
  };

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({ index: scrollIndex, animated: true });
  }, [scrollIndex]);

  return (
    <View style={{ height: HEIGHT }}>
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
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={WIDTH}
        horizontal
        scrollEnabled={true}
      />
    </View>
  );
};

export default Onboarding;
