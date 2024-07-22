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
    name: SCREENS.HOME,
    component: Home,
    title: 'Home',
    icon: TabHomeIcon,
  },
  {
    name: SCREENS.TRENDING,
    component: Trending,
    title: 'Trending',
    icon: TabTrendingIcon,
  },
  {
    name: SCREENS.CHAT,
    component: Chat,
    title: 'Chat',
    icon: TabChatIcon,
  },
  {
    name: SCREENS.FAVORITES,
    component: Favorites,
    title: 'Favorites',
    icon: TabFavoritesIcon,
  },
  {
    name: SCREENS.PROFILE,
    component: Profile,
    title: 'Profile',
    icon: TabProfileIcon,
  },
];
