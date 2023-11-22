/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {colors} from '../../../../theme/colors';
import {space} from '../../../../theme/spacings';
import {fontSizes} from '../../../../theme/fonts';
import {SvgXml} from 'react-native-svg';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

export const ResturentInfo = ({Resturants = {}}) => {
  const {
    name = 'KFC',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/700'],
    address = '23rd street downhill',
    isOpen = false,
    ratings = 5,
    IsClosedTemporarily = true,
  } = Resturants;
  const ratingArray = Array.from(new Array(Math.floor(ratings)));
  return (
    <Card style={{backgroundColor: colors.bg.primary}}>
      <Card.Cover
        key={name}
        source={{uri: photos[0]}}
        style={{margin: space.lg}}
      />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.cardItems}>
          <View style={styles.rating}>
            {ratingArray.map(b => (
              <SvgXml key={b} xml={star} style={{height: 20, width: 20}} />
            ))}
          </View>
          {IsClosedTemporarily && !isOpen && (
            <Text style={{color: colors.ui.error}}>Closed Temporarily</Text>
          )}
          {isOpen && !IsClosedTemporarily && (
            <SvgXml xml={open} style={{height: 20, width: 20}} />
          )}
        </View>
        <View style={styles.cardItems}>
          <Text style={styles.text}>{address}</Text>
          <Image src={icon} style={{height: 20, width: 20, flexWrap: 'wrap'}} />
        </View>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Italic',
    fontSize: fontSizes.body,
    color: colors.ui.primary,
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'Lato-Italic',
    fontSize: fontSizes.caption,
    color: colors.ui.primary,
  },
  rating: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  cardItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
