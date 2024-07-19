import { useNavigation } from "@react-navigation/native";

import { NavigationProps } from "~types/navigationTypes/navigation.types";

const useOnboarding = () => {
  const navigation = useNavigation<NavigationProps>();

  const goToNextOnboardingScreen = (screenName: any) => {
    navigation.navigate(screenName, { hideBackButton: false });
  };

  const goToLoginScreen = (screenName: any) => {
    navigation.navigate(screenName, { hideBackButton: false });
  };

  return { goToNextOnboardingScreen, goToLoginScreen };
};

export default useOnboarding;
