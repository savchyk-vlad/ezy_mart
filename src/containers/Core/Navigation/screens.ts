import { SCREENS } from '~constants';

import { Onboarding } from '~containers/Onboarding';
import { SignUp } from '~containers/Login/views/SignUp';
import { Home } from '~containers/Home';
import { Trending } from '~containers/Trending';
import { Chat } from '~containers/Chat';
import { Favorites } from '~containers/Favorites';
import { SignIn } from '~containers/Login';
import { Profile } from '~containers/Profile';

import {
  TabChatIcon,
  TabFavoritesIcon,
  TabHomeIcon,
  TabProfileIcon,
  TabTrendingIcon,
} from '~assets/images/icons/IconsSvg';

export const AUTH_SCREENS = [
  {
    name: SCREENS.ONBOARDING,
    component: Onboarding,
  },
  {
    name: SCREENS.SIGN_IN,
    component: SignIn,
  },
  {
    name: SCREENS.SIGN_UP,
    component: SignUp,
  },
];

export const APP_ROOT_SCREENS = [
  {
    screenRouteName: SCREENS.HOME,
    component: Home,
    label: 'Home',
    icon: TabHomeIcon,
  },
  {
    screenRouteName: SCREENS.TRENDING,
    component: Trending,
    label: 'Trending',
    icon: TabTrendingIcon,
  },
  {
    screenRouteName: SCREENS.CHAT,
    component: Chat,
    label: 'Chat',
    icon: TabChatIcon,
  },
  {
    screenRouteName: SCREENS.FAVORITES,
    component: Favorites,
    label: 'Favorites',
    icon: TabFavoritesIcon,
  },
  {
    screenRouteName: SCREENS.PROFILE,
    component: Profile,
    label: 'Profile',
    icon: TabProfileIcon,
  },
];
