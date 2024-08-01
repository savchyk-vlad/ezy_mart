import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
  OpenSans_500Medium,
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';
import { BeVietnamPro_400Regular } from '@expo-google-fonts/be-vietnam-pro';
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    PlusJakartaSans_600SemiBold,
    BeVietnamPro_400Regular,
    OpenSans_500Medium,
    OpenSans_400Regular,
  });

  return { fontsLoaded };
};
