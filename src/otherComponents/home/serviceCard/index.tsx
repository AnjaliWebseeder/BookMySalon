import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles'

type ServiceCardParams = {
  image:string,
  title:string,
  description:string,
  price:string,
  time:string

}

export default function ServiceCard({ image, title, description, price, time }: ServiceCardParams) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ ADD</Text>
      </TouchableOpacity>
    </View>
  )
}