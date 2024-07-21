import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useState } from 'react';

import { GOOGLE_AUTH_CLIENT_WEB_ID, GOOGLE_AUTH_CLIENT_IOS_ID } from '@env';
import { IGoogle } from '~types/auth';

export const useGoogleAuth = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_AUTH_CLIENT_WEB_ID,
    iosClientId: GOOGLE_AUTH_CLIENT_IOS_ID,
    offlineAccess: true,
  });

  const [googleResponse, setGoogleResponse] = useState<IGoogle | null>();

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleRes = await GoogleSignin.signIn();

      if (googleRes) {
        setGoogleResponse(googleRes);
      }
    } catch (error) {}
  };

  return { userData: googleResponse?.user, googleResponse, signInWithGoogle };
};
