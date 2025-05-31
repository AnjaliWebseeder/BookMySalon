import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import { BackIcon } from '../../assets/icons/back'
import { RootStackParamList } from '../../navigation/rootStackParamList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type AuthHeaderProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

export default function AuthHeader<T extends keyof RootStackParamList>({
  navigation,
}: AuthHeaderProps<T>){
  return (
    <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
           <BackIcon/>
        </TouchableOpacity>
    <Text style={styles.brandTitle}>
    <Text style={styles.brandBoldUnderline}>Book</Text>
    <Text style={styles.textStyle}>MySalon</Text>
    </Text>
    <Text style={styles.subTitle}>Because Self-Care Should Be Simple</Text>
 </View>
  )
}