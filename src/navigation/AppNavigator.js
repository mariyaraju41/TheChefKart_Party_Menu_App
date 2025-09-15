import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DishListScreen from '../Screens/DishListScreen';
import IngredientScreen from '../Screens/IngredientScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="DishList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="DishList" 
        component={DishListScreen} 
        options={{ title: 'Party Menu Selection' }}
      />
      <Stack.Screen 
        name="Ingredients" 
        component={IngredientScreen} 
        options={{ title: 'Ingredients' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;