import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ImageSourcePropType, ImageBackground } from 'react-native';
import {styles} from './styles'
import LinearGradient from 'react-native-linear-gradient';

type ItemType = {
  image: ImageSourcePropType;
  label: string;
   price: number | string;   
  time:number | string
};

type HorizontalCardListProps = {
  data: ItemType[];
};


export default function HorizontalCardList({data} : HorizontalCardListProps) {
  return (
     <FlatList
    horizontal
    data={data}
    keyExtractor={(item,index) => index.toString()}
    showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.list}
    renderItem={({ item }) => (
         <View style={styles.cardWrapper}>
      <ImageBackground
        resizeMode={'contain'}
        source={item.image} 
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
       <LinearGradient
   colors={['#FFFFFF00', '#BE84E5CC']}
  start={{ x: 0.5, y: 0 }}
  end={{ x: 0.5, y: 1 }}
  style={styles.gradient}
>
          <View style={styles.content}>
            <View style={styles.textGroup}>
              <Text style={styles.title}>{item.label}</Text>
              <Text style={styles.subtitle}>₹{item.price}  • {item.time} mins</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
    
    )}
  />
  )
}