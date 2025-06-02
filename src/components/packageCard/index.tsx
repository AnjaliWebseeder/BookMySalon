import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type DetailsParams = {
  item: string;
};

type PackageCardParams = {
  title: string;
  details: DetailsParams[];
  price: string;
};

export default function PackageCard({ title, details, price }: PackageCardParams) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {details.map((item, idx) => (
        <Text key={idx} style={styles.detail}>
          • {item.item}
        </Text>
      ))}
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Edit Your Package</Text>
      </TouchableOpacity>
    </View>
  );
}
