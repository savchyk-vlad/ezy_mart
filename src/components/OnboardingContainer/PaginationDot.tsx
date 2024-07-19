import React, { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useDerivedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";

type IPaginationDot = {
  name: string;
  screenName: string;
  currentDotIndex: number;
  screenIndex: number;
};

const PaginationDot = (props: IPaginationDot) => {
  const { screenName, name, currentDotIndex, screenIndex } = props;
  const pointInActiveWidth = useSharedValue(40);
  const pointActivetWidth = useSharedValue(40);

  const activeColor = useSharedValue("#FFFFFF");
  const inActiveColor = useSharedValue("#A7A8AC");

  const animationConfig = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const activeProgress = useDerivedValue(() => {
    return withDelay(200, withTiming(activeColor.value === "#A7A8AC" ? 1 : 0));
  });

  const inActiveProgress = useDerivedValue(() => {
    return withDelay(
      200,
      withTiming(inActiveColor.value === "#A7A8AC" ? 1 : 0)
    );
  });

  const animationActiveStyle = useAnimatedStyle(() => {
    return {
      width:
        screenIndex === currentDotIndex
          ? withDelay(0, withTiming(pointInActiveWidth.value, animationConfig))
          : currentDotIndex < screenIndex
          ? withDelay(0, withTiming(pointActivetWidth.value, animationConfig))
          : 20,

      backgroundColor:
        screenIndex === currentDotIndex
          ? interpolateColor(
              activeProgress.value,
              [0, 1],
              ["#A7A8AC", "#FFFFFF"]
            )
          : currentDotIndex < screenIndex
          ? interpolateColor(
              inActiveProgress.value,
              [1, 0],
              ["#FFFFFF", "#A7A8AC"]
            )
          : "#A7A8AC",
      height: 8,
      borderRadius: 5,
      marginHorizontal: 4,
    };
  });

  useEffect(() => {
    pointInActiveWidth.value = 40;
    pointActivetWidth.value = 22;

    activeColor.value = "#A7A8AC";
    inActiveColor.value = "#FFFFFF";
  }, [screenName]);

  return <Animated.View key={name} style={animationActiveStyle} />;
};

export default PaginationDot;
