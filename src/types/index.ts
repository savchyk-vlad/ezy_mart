import { ImageProps } from 'react-native';

export type IBanner = {
  imagePath: ImageProps;
};

export type ICard = {
  merchant_name: string,
  merchant_rating: number,
  product_name: string,
  price: number,
  old_price: number,
  discount_percentage: number,
  price_currency: string,
  image: ImageProps,
}