import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const VegFilter = ({ selectedFilter, onFilterChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilter === 'ALL' && styles.activeFilter
        ]}
        onPress={() => onFilterChange('ALL')}
      >
        <Text style={[
          styles.filterText,
          selectedFilter === 'ALL' && styles.activeFilterText
        ]}>
          ALL
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilter === 'VEG' && styles.activeVegFilter
        ]}
        onPress={() => onFilterChange('VEG')}
      >
        <Text style={[
          styles.filterText,
          selectedFilter === 'VEG' && styles.activeFilterText
        ]}>
          VEG
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilter === 'NON-VEG' && styles.activeNonVegFilter
        ]}
        onPress={() => onFilterChange('NON-VEG')}
      >
        <Text style={[
          styles.filterText,
          selectedFilter === 'NON-VEG' && styles.activeFilterText
        ]}>
          NON-VEG
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  activeFilter: {
    backgroundColor: Colors.primary,
  },
  activeVegFilter: {
    backgroundColor: Colors.veg,
  },
  activeNonVegFilter: {
    backgroundColor: Colors.nonVeg,
  },
  filterText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: Colors.white,
  },
});

export default VegFilter;