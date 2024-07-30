import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';

import { FACEBOOK_CLIENT_ID } from '@env';

export const useFacebookAuth = () => {
  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: FACEBOOK_CLIENT_ID,
  });

  const signInWithFacebook = async () => {
    try {
      const res = await promptAsync();

      if (res.type !== 'success') {
        return;
      }

      const userInfoResponse = await fetch(
        `https://graph.facebook.com/me?access_token=${res.authentication?.accessToken}&fields=id,name,picture.type(large)`,
      );

      const userData = await userInfoResponse.json();

      return {
        userData,
        accessToken: res.authentication?.accessToken,
      };
    } catch (error) {}
  };

  return { signInWithFacebook };
};
