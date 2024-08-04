interface IUser {
  birthdate: string | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  nickname: string | null;
  image: string | null;
}
export interface IState {
  isAuthenticated: boolean;
  initialRouteName: string;
  isOnboardingCompleted: boolean;
  isLoading: boolean;
  accessToken: string;
  userData: IUser;
}

export interface IAuthContext {
  state: IState;
  user: IUser;
  logout: () => void;
  markOnboardingCompleted: () => void;
  loginFromGoogle: () => void;
  loginFromFacebook: () => void;
}
