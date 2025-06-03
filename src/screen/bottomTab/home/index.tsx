import {  SafeAreaView,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { mainStyle } from '../../../theme/styles'
import Header from '../../../otherComponents/home/header'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../components/searchBar';
import SectionTitle from '../../../components/sectionTitle';
import CategoryGrid from '../../../otherComponents/home/categoryGrid';
import { groomingEssential, hotPicksMens, hotPicksWomens, menServices, services, servingData, specialServices, womenPackageData, womenServices } from '../../../utils/data/home';
import TitleDivider from '../../../components/titleDivider';
import TabsWithFilter from '../../../components/tabsWithFilter';
import ServiceCard from '../../../otherComponents/home/serviceCard';
import Categories from '../../../otherComponents/home/categories';
import HorizontalCardList from '../../../otherComponents/home/horizontalCardList';
import PackageCard from '../../../components/packageCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function Home() {
   const navigation = useNavigation<HomeScreenNavigationProp>();
   const [selectCategory,setSelectCategory] = useState<string>()
   const [selectPackage,setSelectPackage] = useState<string>()
   const onCategoryType = (category:string) => { setSelectCategory(category)}
   const onPackageType = (packageType: string) => {}
  return (
 <ScrollView showsVerticalScrollIndicator={false} style={mainStyle.container}>
    <SafeAreaView>
       <Header navigation={navigation}/>
       <SearchBar/>
       <SectionTitle title={'Every Service Sorted For You'} />
       <CategoryGrid data={services}/>
       <TitleDivider title={'Hot Picks Near You'}/>
       <TabsWithFilter onSelect={onCategoryType} />
       <Categories data={selectCategory === 'Men' ? hotPicksMens : hotPicksWomens}/>
       <ServiceCard data={selectCategory === 'Men' ? menServices : womenServices} />
      <SectionTitle showViewAll={true} title={'Glow & Grace — Essentials for Her'} />
      <CategoryGrid data={specialServices}/>
      <SectionTitle title={'Now Serving'}/>
       <HorizontalCardList data={servingData} />
       <SectionTitle title={'Sharp & Styled — Grooming Essentials for Him'} />
      <CategoryGrid data={groomingEssential}/>
      <SectionTitle title={'Packages for you'} />
       <TabsWithFilter onSelect={onPackageType} />
       <PackageCard data={womenPackageData}/>
   </SafeAreaView>
 </ScrollView>
  )
}