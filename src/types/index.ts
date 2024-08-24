import { ImageProps } from 'react-native';

export type IBanner = {
  imagePath: ImageProps;
};

export type ICard = {
  merchant_name: string;
  merchant_rating: number;
  product_name: string;
  price: number;
  old_price: number;
  discount_percentage: number;
  price_currency: string;
  image: ImageProps;
};

export type ITheme = {
  colors: {
    background: string;
    header_background: string;
    tab_bar_background: string;
    header_shadow: string;
    header_text: string;
    text: string;
    tabBarActiveTintColor: string;
    tabBarInActiveTintColor: string;
  };
};
