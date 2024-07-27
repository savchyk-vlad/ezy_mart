import { ThemeColors } from '~assets';

export const bottomNavigatorOptions = {
  tabBarActiveTintColor: '#4C46B8',
  tabBarInactiveTintColor: '#757575',
  tabBarStyle: {
    height: 95,
    borderTopWidth: 0,
    shadowColor: ThemeColors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },
};
