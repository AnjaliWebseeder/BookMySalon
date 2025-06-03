import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'



type CategoriesParams = {
  label: string;
};

type CategoriesProps = {
  data: CategoriesParams[];
};



export default function Categories({data} : CategoriesProps) {
  return (
  <FlatList
     horizontal
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <Text>{item.label}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.main}
    
    />
  )
}