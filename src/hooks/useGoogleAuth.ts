import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { GOOGLE_AUTH_CLIENT_WEB_ID, GOOGLE_AUTH_CLIENT_IOS_ID } from '@env';

export const useGoogleAuth = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_AUTH_CLIENT_WEB_ID,
    iosClientId: GOOGLE_AUTH_CLIENT_IOS_ID,
    offlineAccess: true,
  });

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleRes = await GoogleSignin.signIn();

      return googleRes;
    } catch (error) {
      console.warn(error);

      return null;
    }
  };

  return { signInWithGoogle };
};
