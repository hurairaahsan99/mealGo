import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {colors} from '../../../../theme/colors';
import {space} from '../../../../theme/spacings';
import {fontSizes} from '../../../../theme/fonts';
import {SvgXml} from 'react-native-svg';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

export const ResturentInfo = ({Resturants = {}}) => {
  const {
    name = 'KFC',
    icon,
    photos = ['https://picsum.photos/700'],
    address = '23rd street downhill',
    isOpen = true,
    ratings = 3.2,
    IsClosedTemporarily,
  } = Resturants;
  const ratingArray = Array.from(new Array(Math.floor(ratings)));
  console.log(ratingArray);
  return (
    <Card style={{backgroundColor: colors.bg.primary}}>
      <Card.Cover
        key={name}
        source={{uri: photos[0]}}
        style={{margin: space.lg}}
      />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.svg}>
          <View style={styles.rating}>
            {ratingArray.map(() => (
              <SvgXml xml={star} style={{height: 20, width: 20}} />
            ))}
          </View>
          <SvgXml xml={open} style={{height: 20, width: 20}} />
        </View>
        <Text style={styles.text}>{address}</Text>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Italic',
    fontSize: fontSizes.body,
    color: colors.ui.primary,
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
  svg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
