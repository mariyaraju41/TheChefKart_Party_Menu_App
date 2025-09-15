import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dishes, mealTypes } from '../data/mockData';
import DishCard from '../Components/DishCard';
import TabButton from '../Components/TabButton';
import VegFilter from '../Components/VegFilter';
import SearchBar from '../Components/SearchBar';
import Colors from '../constants/Colors';

const DishListScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('MAIN COURSE');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('ALL');
  const [selectedDishes, setSelectedDishes] = useState({});

  const toggleDishSelection = (dishId) => {
    setSelectedDishes(prev => ({
      ...prev,
      [dishId]: !prev[dishId]
    }));
  };

  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      const matchesCategory = dish.mealType === selectedCategory;
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVegFilter = vegFilter === 'ALL' || 
                             (vegFilter === 'VEG' && dish.type === 'VEG') || 
                             (vegFilter === 'NON-VEG' && dish.type === 'NON-VEG');
      
      return matchesCategory && matchesSearch && matchesVegFilter;
    });
  }, [selectedCategory, searchQuery, vegFilter]);

  const getSelectedCountByCategory = (category) => {
    return dishes.filter(dish => 
      dish.mealType === category && selectedDishes[dish.id]
    ).length;
  };

  const totalSelected = useMemo(() => {
    return Object.values(selectedDishes).filter(selected => selected).length;
  }, [selectedDishes]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
      />
      
      <VegFilter 
        selectedFilter={vegFilter} 
        onFilterChange={setVegFilter} 
      />
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {mealTypes.map(type => (
          <TabButton
            key={type.id}
            title={type.name}
            count={getSelectedCountByCategory(type.name)}
            isActive={selectedCategory === type.name}
            onPress={() => setSelectedCategory(type.name)}
          />
        ))}
      </ScrollView>

      <FlatList
        data={filteredDishes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            isSelected={!!selectedDishes[item.id]}
            onToggleSelection={() => toggleDishSelection(item.id)}
            onViewIngredients={() => navigation.navigate('Ingredients', { dish: item })}
          />
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total Selected: {totalSelected}</Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tabContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  listContent: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  continueText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default DishListScreen;