import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles'

type PackageDetail = {
  service: string;
  detail: string;
};

type SinglePackage = {
  title: string;
  rating: number;
  reviews: number;
  price: number;
  time: number;
  details: PackageDetail[];
};

type PackageCardProps = {
  data: SinglePackage[];
};



const PackageCard = ({data} : PackageCardProps) => {
 const renderCard = ({ item }: { item: SinglePackage }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>
      </View>

      <View style={styles.row}>
        <Entypo name="star" size={16} color="green" />
        <Text style={styles.rating}>
          {item.rating} | {item.reviews}K
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={14} color="#6B2480" />
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        {item.details.map((detail, index) => (
          <Text key={index} style={styles.detailItem}>
            • <Text style={styles.bold}>{detail.service}:</Text>{' '}
            {detail.detail}
          </Text>
        ))}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Your Package</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>₹{item.price}</Text>
        <Text style={styles.time}>{item.time} mins</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderCard}
      contentContainerStyle={styles.list}
    />
  );
};

export default PackageCard;
