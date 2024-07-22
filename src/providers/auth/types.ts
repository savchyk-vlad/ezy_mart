export interface IState {
  isAuthenticated: boolean;
  initialRouteName: string;
  isOnboardingCompleted: boolean;
  isLoading: boolean;
  accessToken: string;
}

export interface IAuthContext {
  state: IState;
  logout: () => void;
  markOnboardingCompleted: () => void;
  loginFromGoogle: () => void;
}
