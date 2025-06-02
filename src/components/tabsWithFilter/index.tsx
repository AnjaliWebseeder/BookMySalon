import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'

type TabsWithFilterProps = {
  filters?: string[];
  onSelect: (selected: string) => void;
};

export default function TabsWithFilter({
  filters = ['Men', 'Women'],
  onSelect,
}: TabsWithFilterProps) {
  const [selected, setSelected] = useState<string>(filters[0]);

  return (
    <View style={styles.container}>
      {filters.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.tab, selected === item && styles.activeTab]}
          onPress={() => {
            setSelected(item);
            onSelect(item);
          }}
        >
          <Text style={[styles.label, selected === item && styles.activeLabel]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
