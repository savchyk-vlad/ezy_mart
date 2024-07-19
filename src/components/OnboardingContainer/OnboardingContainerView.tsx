import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import { ExpandingDot } from "react-native-animated-pagination-dots";

import { RightArrowIcon } from "~assets/images/icons/IconsSvg";
import useOnboarding from "~containers/Onboarding/hooks/useOnboarding";;
import { ThemeColors } from "~assets";
import { SCREENS } from "~constants";
import styles from "./styles";
import { useAsyncStorageContext } from "~providers/AsyncStorageContext";

type IScreen = {
  imagePath: ImageSourcePropType | undefined;
  headerText: string;
  paragraph: string;
};

type IOnboardingProps = {
  skipButton?: boolean;
  nextScreenName?: string;
  scrollX: any;
  handleScroll: () => void;
  screen: IScreen;
};

const OnboardingConatinerView = (props: IOnboardingProps) => {
  const {
    skipButton = true,
    nextScreenName,
    scrollX,
    screen,
    handleScroll,
  } = props;
  const { goToNextOnboardingScreen, goToLoginScreen } = useOnboarding();
  const { userData, setAsyncStorage } = useAsyncStorageContext();

  const getStartButtonHandle = () => {
    const updatedUserData = { ...userData, onboardingPassStatus: true };
    goToLoginScreen(SCREENS.SIGN_IN);

    setAsyncStorage("userData", updatedUserData);
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen?.imagePath && (
        <Image source={screen?.imagePath} style={styles.image} />
      )}

      <TouchableOpacity
        onPress={() => goToNextOnboardingScreen(SCREENS.SIGN_IN)}
      >
        <Text style={[styles.skipButton, !skipButton && { opacity: 0 }]}>
          Skip
        </Text>
      </TouchableOpacity>

      <BlurView
        intensity={70}
        tint="systemUltraThinMaterialDark"
        style={styles.bottomPopUp}
      >
        <Text style={styles.popUpText}>{screen.headerText}</Text>

        {nextScreenName && (
          <View style={styles.popUpBottomContainer}>
            <ExpandingDot
              data={Array.from(Array(3))}
              expandingDotWidth={40}
              scrollX={scrollX}
              inActiveDotOpacity={0.1}
              inActiveDotColor={ThemeColors.white}
              activeDotColor={ThemeColors.white}
              dotStyle={{ width: 20 }}
              containerStyle={{ left: 0, top: 30 }}
            />

            <TouchableOpacity
              onPress={handleScroll}
              style={styles.popUpNextButton}
            >
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
        )}

        {screen.paragraph && (
          <View>
            <Text style={styles.popUpParagraph}>{screen.paragraph}</Text>
            <TouchableOpacity
              style={styles.popUpButton}
              onPress={getStartButtonHandle}
            >
              <Text style={styles.popUpButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        )}
      </BlurView>
    </SafeAreaView>
  );
};

export default OnboardingConatinerView;
