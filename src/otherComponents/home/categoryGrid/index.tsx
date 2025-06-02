import React from 'react';
import {  Text, Image, TouchableOpacity, FlatList } from 'react-native';
import {styles} from './styles'

type ItemType = {
  id: string;
  image: string;
  label: string;
};

type CategoryGridProps = {
  data: ItemType[];
};


export default function CategoryGrid({data}: CategoryGridProps) {
  return (
      <FlatList
    data={data}
    numColumns={3}
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    )}
  />
  )
}