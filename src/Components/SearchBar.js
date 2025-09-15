import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  // Expo way
import Colors from '../constants/Colors';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      {/* Built-in search icon */}
      <MaterialIcons name="search" size={22} color={Colors.textSecondary} style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder="Search dishes, desserts, sides..."
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.text,
  },
});

export default SearchBar;
