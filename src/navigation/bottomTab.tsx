import React, { useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { HomeIcon  } from '../assets/icons/home';
import { CartIcon } from '../assets/icons/shopping_cart';
import { EventIcon } from '../assets/icons/event';
import { PersonIcon } from '../assets/icons/person';
import Home from '../screen/bottomTab/home';
import Cart from '../screen/bottomTab/cart';
import Appointment from '../screen/bottomTab/appointment';
import Account from '../screen/bottomTab/account';
import { RootStackParamList } from './rootStackParamList';
import appColors from '../theme/appColors';
import { windowHeight } from '../theme/appConstant';



const Tab = createBottomTabNavigator<RootStackParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const animations = useRef(state.routes.map(() => new Animated.Value(1))).current;

  const handlePress = (routeName: string, index: number) => {
    const event = navigation.emit({
        type: 'tabPress',
        target: state.routes[index].key,
        canPreventDefault: true
    });

    if (!event.defaultPrevented) {
      navigation.navigate(routeName);
    }

    Animated.sequence([
      Animated.timing(animations[index], {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index], {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const IconComponent =
          route.name === 'Home'
            ? HomeIcon
            : route.name === 'Cart'
            ? CartIcon
            : route.name === 'Appointment'
            ? EventIcon
            : PersonIcon;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => handlePress(route.name, index)}
            activeOpacity={0.8}
          >
            <Animated.View
              style={[
                styles.iconContainer,
                { transform: [{ scale: animations[index] }] },
              ]}
            >
              <IconComponent
                color={isFocused ? '#4E4E4E' : "#88878A"}
                 size={24}
              />
            </Animated.View>
            {isFocused && (
              <Animated.Text style={styles.label}>
                {route.name}
              </Animated.Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 80 : 60,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 0.4,
    paddingBottom: Platform.OS === 'ios' ? 20 : 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:1
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    marginTop:windowHeight(10)
  },
  iconContainer: {
    // marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: appColors.active,
  },
});
