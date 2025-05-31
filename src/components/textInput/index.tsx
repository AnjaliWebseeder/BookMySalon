import React, { useState } from 'react';
import { View, TextInput, Text,TouchableOpacity, KeyboardTypeOptions } from 'react-native';
import styles from './styles';
import { Eye } from '../../assets/icons/eye';
import { EyeOff } from '../../assets/icons/eyeOff';

interface TextInputFieldProps {
  label:string
  placeholder: string;
  keyboardType?: KeyboardTypeOptions ;
  value: string;
  onChangeText: (text: string) => void;
  error?: string | null;
  secureTextEntry?:boolean
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  error,
  label,
  secureTextEntry
}) => {
   const [hidePassword, setHidePassword] = useState(secureTextEntry);
  return (
    
    <>
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error && styles.errorInput]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#aaa"
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.iconWrapper}
          >
            {!hidePassword ? <Eye/> : <EyeOff/>}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
    </>
   
  );
};

export default TextInputField;
