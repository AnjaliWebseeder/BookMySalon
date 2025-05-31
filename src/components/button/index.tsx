import {GestureResponderEvent, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  containerStyle?:ViewStyle
  buttonTextStyle?:TextStyle
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  containerStyle,
  buttonTextStyle
}) => {

 return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.button,containerStyle]}>
      <Text style={[styles.buttonText,buttonTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button


