import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, FlatList } from 'react-native';
import {styles} from './styles'

type ServiceCardParams = {
  image:ImageSourcePropType,
  title:string,
  description:string,
  price:number | string
  time:number | string

}

type ServiceCardProps = {
  data: ServiceCardParams[];
};

export default function ServiceCard({data }: ServiceCardProps) {
  return (
    <FlatList
    horizontal 
    data={data}
    contentContainerStyle={styles.container}
    renderItem={({item}) => (
      <View style={styles.card}>
        <View style={styles.row}>
            <Image source={item.image} style={styles.image} />
       <View>
          <View style={styles.main}>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.description}>{item.description}</Text>
                 <View style={styles.footer}>
       <View style={styles.row}>
         <Text style={styles.price}>₹{item.price}</Text>
         <View style={styles.dot}/>
        <Text style={styles.time}>  {item.time} mins</Text>
       </View>
          <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ ADD</Text>
      </TouchableOpacity>
      </View>
          </View>
        </View> 
        </View>  
    </View>
    )}
    />
  )
}