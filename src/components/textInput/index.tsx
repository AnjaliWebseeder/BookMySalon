import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

interface EmailTextInputProps {
  placeholder: string;
  keyboardType?: 'email-address' | 'default';
  value: string;
  onChangeText: (text: string) => void;
  error?: string | null;
}

const EmailTextInput: React.FC<EmailTextInputProps> = ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  error,
}) => {
  return (
    <>
      <View style={styles.container}>
      <View style={[styles.sectionStyle,{borderWidth: error ? 1 : 0}]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          placeholderTextColor={"#D3D3D3"}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
   
  );
};

export default EmailTextInput;
