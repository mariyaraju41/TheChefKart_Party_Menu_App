import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import VegIcon  from '../icons/veg.png';
import NonVegIcon  from '../icons/nonveg.png';

const DishCard = ({ dish, isSelected, onToggleSelection, onViewIngredients }) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      {/* Dish Image + Veg/Non-Veg Badge */}
      <View style={styles.imageContainer}>
        {dish.image ? (
          <Image source={{ uri: dish.image }} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <Icon name="restaurant" size={30} color={Colors.textSecondary} />
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}

        {/* ✅ Food License Icon Badge */}
       <View style={styles.typeBadge}>
  <Image
    source={dish.type === 'VEG' ? VegIcon : NonVegIcon}
    style={styles.typeIcon}
  />

        </View>
      </View>

      {/* Dish Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.selectButton, isSelected && styles.selectedButton]}
            onPress={onToggleSelection}
          >
            <Text style={styles.buttonText}>
              {isSelected ? 'Remove' : 'Add'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ingredientButton}
            onPress={onViewIngredients}
          >
            <Text style={styles.ingredientText}>Ingredient</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  imageContainer: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  placeholderText: {
    color: Colors.textSecondary,
    marginTop: 5,
    fontSize: 12,
  },
  typeBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  typeIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.text,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  selectedButton: {
    backgroundColor: Colors.error,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  ingredientButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  ingredientText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default DishCard;
