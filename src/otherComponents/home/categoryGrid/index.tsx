import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  View
} from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';

type ItemType = {
  id: number;
  image: ImageSourcePropType;
  label: string;
};

type CategoryGridProps = {
  data: ItemType[];
};

export default function CategoryGrid({ data }: CategoryGridProps) {
  return (
    <FlatList
      data={data}
      numColumns={3}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <LinearGradient
            colors={['#B0A8AC', '#FFFFFF80']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <TouchableOpacity style={styles.item}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
          </LinearGradient>
          <Text  numberOfLines={1}
  ellipsizeMode="tail" style={styles.label}>{item.label}</Text>
        </View>
      )}
    />
  );
}
