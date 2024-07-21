import React, { useState } from 'react';
import { IState, IAuthContext, IProps } from './types';
import { MARKETS, SCREENS, STORAGE_KEYS } from '~constants';
import { AsyncStorageService } from '~services';
import { useLanguages } from '~hooks/language/useLanguages';
import { getItemFromAsyncStorage } from '~utils';

const initialState: IState = {
  codeVerifier: '',
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
  isLoading: true,
  initialRouteName: SCREENS.HOME_STACK,
  isOnboardingCompleted: false,
};

const AuthenticationContext = React.createContext<IAuthContext>({
  state: initialState,
  authenticate: () => null,
  refreshToken: () => null,
  logout: () => null,
  skipLogin: () => null,
  loginFromProfile: () => null,
  registerFromProfile: () => null,
  isGuestMode: false,
  ananasMarket: MARKETS.RS,
  handleSetAnanasMarket: () => null,
  markOnboardingCompleted: () => null,
});

const AuthenticationProvider = (props: IProps) => {
  const [state, setState] = useState(initialState);
  const [isGuestMode, setIsGuestMode] = useState(false);
  const [ananasMarket, setAnanasMarket] = useState(MARKETS.RS);

  const { resetToDefaultLanguage } = useLanguages();

  React.useEffect(() => {
    const getAuthState = async () => {
      const accessToken = await getItemFromAsyncStorage(
        STORAGE_KEYS.ACCESS_TOKEN,
        'Error retrieving accessToken from local storage: ',
      );
      const refreshToken = await getItemFromAsyncStorage(
        STORAGE_KEYS.REFRESH_TOKEN,
        'Error retrieving refreshToken from local storage: ',
      );
      const codeVerifier = await getItemFromAsyncStorage(
        STORAGE_KEYS.CODE_VERIFIER,
        'Error retrieving codeVerifier from local storage: ',
      );
      const isGuestModeInStorage = await getItemFromAsyncStorage(
        STORAGE_KEYS.IS_GUEST_MODE,
        'Error retrieving isGuestMode from local storage: ',
      );
      let onboardingStatus = '';

      try {
        onboardingStatus =
          (await AsyncStorageService.getItem(
            STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
          )) || false;
      } catch (error) {
        console.log(
          'Error retrieving onboarding status from local storage: ',
          error,
        );
      }

      const isAuthenticated = !!accessToken && !!refreshToken && !!codeVerifier;

      setState({
        ...state,
        isLoading: false,
        isAuthenticated,
        accessToken: isAuthenticated ? accessToken : '',
        refreshToken: isAuthenticated ? refreshToken : '',
        codeVerifier: isAuthenticated ? codeVerifier : '',
        isOnboardingCompleted: onboardingStatus ? true : false,
      });
      setIsGuestMode(isAuthenticated ? false : !!isGuestModeInStorage);
    };

    getAuthState().catch(console.error);

    const getAnanasMarket = async () => {
      try {
        const marketKey =
          (await AsyncStorageService.getItem(STORAGE_KEYS.ANANAS_MARKET_KEY)) ||
          MARKETS.RS;

        if (marketKey) {
          setAnanasMarket(marketKey);
        }
      } catch (error) {
        console.log('Error retrieving isGuestMode from local storage: ', error);
      }
    };

    getAnanasMarket().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = async (
    codeVerifier: string,
    accessToken: string,
    refreshToken: string,
  ) => {
    AsyncStorageService.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    AsyncStorageService.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    AsyncStorageService.setItem(STORAGE_KEYS.CODE_VERIFIER, codeVerifier);

    setState({
      ...state,
      codeVerifier,
      accessToken,
      refreshToken,
      isAuthenticated: true,
      initialRouteName: SCREENS.HOME_STACK,
    });
    setIsGuestMode(false);
  };

  const logout = async () => {
    if (!state.isAuthenticated) {
      return;
    }

    AsyncStorageService.clearStorage([STORAGE_KEYS.IS_ONBOARDING_COMPLETED]);
    resetToDefaultLanguage();

    setState({
      ...state,
      codeVerifier: '',
      accessToken: '',
      refreshToken: '',
      isAuthenticated: false,
      initialRouteName: SCREENS.HOME_STACK,
    });
    setIsGuestMode(false);
  };

  const refreshToken = async (accessToken: string) => {
    AsyncStorageService.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);

    setState({
      ...state,
      accessToken,
    });
  };

  const skipLogin = async () => {
    AsyncStorageService.setItem(STORAGE_KEYS.IS_GUEST_MODE, 'true');

    setState({
      ...state,
      initialRouteName: [SCREENS.SIGN_UP, SCREENS.LOGIN].includes(
        state.initialRouteName as SCREENS,
      )
        ? SCREENS.PROFILE_STACK
        : state.initialRouteName,
    });
    setIsGuestMode(true);
    setState({
      ...state,
      initialRouteName: SCREENS.HOME_STACK,
    });
  };

  const loginFromProfile = async () => {
    setState({
      ...state,
      initialRouteName: SCREENS.LOGIN,
    });
    setIsGuestMode(false);
  };

  const registerFromProfile = () => {
    setState({
      ...state,
      initialRouteName: SCREENS.SIGN_UP,
    });
    setIsGuestMode(false);
  };

  const handleSetAnanasMarket = async (marketKey: MARKETS) => {
    try {
      await AsyncStorageService.setItem(
        STORAGE_KEYS.ANANAS_MARKET_KEY,
        marketKey,
      );

      setAnanasMarket(marketKey);
    } catch (error) {
      console.log('Error retrieving isGuestMode from local storage: ', error);
    }
  };

  const markOnboardingCompleted = async () => {
    try {
      await AsyncStorageService.setItem(
        STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
        true,
      );
    } catch (error) {
      console.log(
        'Error setting onboarding status from local storage: ',
        error,
      );
    }

    setState({
      ...state,
      isOnboardingCompleted: true,
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        authenticate,
        refreshToken,
        logout,
        skipLogin,
        isGuestMode,
        loginFromProfile,
        registerFromProfile,
        ananasMarket,
        handleSetAnanasMarket,
        markOnboardingCompleted,
      }}
      {...props}
    />
  );
};

export default AuthenticationProvider;
export const useAuthentication = (): IAuthContext =>
  React.useContext(AuthenticationContext);
