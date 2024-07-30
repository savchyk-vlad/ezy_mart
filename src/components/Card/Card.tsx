import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';

import { FavoriteIcon, StarIcon } from '~assets/images/icons/IconsSvg';
import { ICard } from '~types';
import styles from './styles';

const Card = ({ product }: { product: ICard }) => {
  const [favoriteButtonActiveStatus, setFavoriteButtonActiveStatus] =
    useState(false);

  const handleFavoriteButton = () => {
    setFavoriteButtonActiveStatus(!favoriteButtonActiveStatus);
  };

  const { currentPrice, oldPrice, discount } = useMemo(
    () => ({
      currentPrice: product.price.toFixed(2),
      oldPrice: product.old_price.toFixed(2),
      discount: `-${product.discount_percentage}%`,
    }),
    [product],
  );

  return (
    <TouchableOpacity style={styles.card_container}>
      <View style={styles.discount_badge_container}>
        <Text style={styles.discount_text}>{discount}</Text>
      </View>

      <Image style={styles.image} resizeMode="cover" source={product.image} />

      <TouchableOpacity
        onPress={handleFavoriteButton}
        style={styles.favorite_button_container}>
        <FavoriteIcon isButtonChecked={favoriteButtonActiveStatus} />
      </TouchableOpacity>

      <View style={styles.card_info_container}>
        <Text style={styles.merchant_name}>{product.merchant_name}</Text>
        <View style={styles.merchant_rating}>
          <StarIcon />
          <Text>{product.merchant_rating}</Text>
        </View>
      </View>

      <Text style={styles.product_name}>{product.product_name}</Text>

      <View style={styles.product_price_container}>
        <Text style={styles.product_current_price}>${currentPrice}</Text>
        <View>
          <Text style={styles.product_old_price}>${oldPrice}</Text>
          <View style={styles.product_old_price_linestroke} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
