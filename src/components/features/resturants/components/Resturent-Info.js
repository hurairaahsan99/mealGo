import * as React from 'react';
import {Card, Text} from 'react-native-paper';

export const ResturentInfo = ({Resturants = {}}) => {
  const {
    name = 'KFC',
    icon,
    photos = ['https://picsum.photos/700'],
    address = '23rd street downhill',
    isOpen = true,
    ratings = 3,
    IsClosedTemporarily,
  } = Resturants;
  return (
    <Card>
      <Card.Cover key={name} source={{uri: photos[0]}} />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};
