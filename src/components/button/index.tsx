import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text
}) => {

 return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button


