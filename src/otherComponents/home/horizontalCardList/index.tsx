import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles'

type ItemType = {
  id: string;
  image: string;
  title: string;
  subtitle:string
};

type HorizontalCardListProps = {
  data: ItemType[];
};


export default function HorizontalCardList({data} : HorizontalCardListProps) {
  return (
     <FlatList
    horizontal
    data={data}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.list}
    renderItem={({ item }) => (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity style={styles.addButton}><Text>+ ADD</Text></TouchableOpacity>
      </View>
    )}
  />
  )
}