export interface IState {
  isAuthenticated: boolean;
  initialRouteName: string;
  isOnboardingCompleted: boolean;
  isLoading: boolean;
}

export interface IAuthContext {
  state: IState;
  logout: () => void;
  markOnboardingCompleted: () => void;
}
