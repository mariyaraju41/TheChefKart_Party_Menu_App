export const dishes = [
  // STARTERS
  {
    id: 1,
    name: "Vegetable Spring Rolls",
    description: "Crispy rolls filled with vegetables",
    mealType: "STARTER",
    type: "VEG",
    image: "https://www.spicebangla.com/wp-content/uploads/2024/06/Spring-Roll-Recipe.jpg",
    category: {
      id: 1,
      name: "Chinese",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png"
    },
    ingredients: [
      { name: "Spring roll wrappers", quantity: "10 pieces" },
      { name: "Mixed vegetables", quantity: "2 cups" },
      { name: "Oil", quantity: "for frying" },
      { name: "Soy sauce", quantity: "2 tbsp" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Grilled chicken chunks marinated in spices",
    mealType: "STARTER",
    type: "NON-VEG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1fHA33FNRQNHUveifYriJS1H0AgEpGP4Cg&s",
    category: {
      id: 2,
      name: "Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian.png"
    },
    ingredients: [
      { name: "Chicken breast", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Spices", quantity: "as needed" },
      { name: "Lemon juice", quantity: "2 tbsp" }
    ]
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese with spices",
    mealType: "STARTER",
    type: "VEG",
    image: "https://c.ndtvimg.com/2024-07/9fe2b05g_paneer-tikka_625x300_01_July_24.jpg",
    category: {
      id: 2,
      name: "Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian.png"
    },
    ingredients: [
      { name: "Paneer", quantity: "300g" },
      { name: "Bell peppers", quantity: "2 medium" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "as needed" }
    ]
  },
  {
    id: 4,
    name: "Fish Fingers",
    description: "Crispy fried fish strips",
    mealType: "STARTER",
    type: "NON-VEG",
    image: "https://vaya.in/recipes/wp-content/uploads/2018/06/Popcorn-Crusted-Fish-Fingers.jpg",
    category: {
      id: 3,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    ingredients: [
      { name: "White fish fillets", quantity: "400g" },
      { name: "Bread crumbs", quantity: "1 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Flour", quantity: "1/2 cup" }
    ]
  },

  // MAIN COURSE
  {
    id: 5,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    mealType: "MAIN COURSE",
    type: "VEG",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
    category: {
      id: 2,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Spices", quantity: "as needed" }
    ]
  },
  {
    id: 6,
    name: "Butter Chicken",
    description: "Tender chicken in creamy tomato sauce",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdHbLpoZ41iDhrAmMy7KT0OX3sgHek0FWwg&s" ,
    category: {
      id: 2,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Tomato", quantity: "4 medium" },
      { name: "Cream", quantity: "100ml" },
      { name: "Butter", quantity: "50g" },
      { name: "Spices", quantity: "as needed" }
    ]
  },
  {
    id: 7,
    name: "Vegetable Biryani",
    description: "Fragrant rice with mixed vegetables",
    mealType: "MAIN COURSE",
    type: "VEG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFoNVxfdIbWINbvG25qgwfZwzPY2BwbGfBg&s",
    category: {
      id: 2,
      name: "Hyderabadi",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/hyderabadi.png"
    },
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Mixed vegetables", quantity: "2 cups" },
      { name: "Biryani masala", quantity: "3 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" }
    ]
  },
  {
    id: 8,
    name: "Chicken Curry",
    description: "Spicy chicken curry with gravy",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ5W-35XkYg4k-G8V_HJ9UvZ3Ew774xnfyQ&s",
    category: {
      id: 2,
      name: "South Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png"
    },
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Coconut milk", quantity: "1/2 cup" },
      { name: "Spices", quantity: "as needed" }
    ]
  },
  {
    id: 9,
    name: "Palak Paneer",
    description: "Paneer in spinach gravy",
    mealType: "MAIN COURSE",
    type: "VEG",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg",
    category: {
      id: 2,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Spinach", quantity: "2 bunches" },
      { name: "Onions", quantity: "1 medium" },
      { name: "Tomatoes", quantity: "2 medium" },
      { name: "Spices", quantity: "as needed" }
    ]
  },
  {
    id: 10,
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb curry from Kashmir",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HrNzcKPGXLXpAc4nUoEQxq8L9F55mUVwoQ&s",
    category: {
      id: 2,
      name: "Kashmiri",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/kashmiri.png"
    },
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Spices", quantity: "as needed" },
      { name: "Ghee", quantity: "3 tbsp" }
    ]
  },

  // DESSERTS
  {
    id: 11,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with nuts",
    mealType: "DESSERT",
    type: "VEG",
    image: "https://static.india.com/wp-content/uploads/2024/07/chocolate-walnut-brownie.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    category: {
      id: 4,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    ingredients: [
      { name: "Chocolate", quantity: "200g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Nuts", quantity: "1/4 cup" },
      { name: "Butter", quantity: "100g" }
    ]
  },
  {
    id: 12,
    name: "Gulab Jamun",
    description: "Sweet milk balls in sugar syrup",
    mealType: "DESSERT",
    type: "VEG",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
    category: {
      id: 2,
      name: "Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian.png"
    },
    ingredients: [
      { name: "Milk powder", quantity: "1 cup" },
      { name: "Flour", quantity: "1/4 cup" },
      { name: "Sugar", quantity: "2 cups" },
      { name: "Water", quantity: "2 cups" },
      { name: "Cardamom", quantity: "4-5 pods" }
    ]
  },
  {
    id: 13,
    name: "Cheesecake",
    description: "Creamy cheese cake with berry compote",
    mealType: "DESSERT",
    type: "VEG",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcmKHskBudHGefr-bxNCCT9h2C0szskyHCsMAmNWWMzjFc16_K99R4ucJJj_AOPpk1yalF2iD2KpviCqTBe8X5Jwyxa6Vklq7aiZZH-sU",
    category: {
      id: 4,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    ingredients: [
      { name: "Cream cheese", quantity: "500g" },
      { name: "Digestive biscuits", quantity: "200g" },
      { name: "Butter", quantity: "100g" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Berries", quantity: "1 cup" }
    ]
  },
  {
    id: 14,
    name: "Rasmalai",
    description: "Soft cheese patties in flavored milk",
    mealType: "DESSERT",
    type: "VEG",
    image: "https://rachnas-kitchen.com/wp-content/uploads/2017/07/rasmalai-2-e1505245876472-gpo.jpg",
    category: {
      id: 2,
      name: "Bengali",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/bengali.png"
    },
    ingredients: [
      { name: "Milk", quantity: "1 liter" },
      { name: "Lemon juice", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Cardamom", quantity: "4-5 pods" },
      { name: "Saffron", quantity: "few strands" }
    ]
  },

  // SIDES
  {
    id: 15,
    name: "Garlic Naan",
    description: "Soft bread with garlic flavor",
    mealType: "SIDES",
    type: "VEG",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/garlic_naan.png",
    category: {
      id: 2,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Butter", quantity: "2 tbsp" }
    ]
  },
  {
    id: 16,
    name: "French Fries",
    description: "Crispy golden potato fries",
    mealType: "SIDES",
    type: "VEG",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/french_fries.png",
    category: {
      id: 4,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    ingredients: [
      { name: "Potatoes", quantity: "4 large" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "to taste" }
    ]
  },
  {
    id: 17,
    name: "Raita",
    description: "Yogurt with vegetables and spices",
    mealType: "SIDES",
    type: "VEG",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/raita.png",
    category: {
      id: 2,
      name: "Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/indian.png"
    },
    ingredients: [
      { name: "Yogurt", quantity: "2 cups" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Tomato", quantity: "1 medium" },
      { name: "Cumin powder", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },
  {
    id: 18,
    name: "Onion Rings",
    description: "Crispy battered onion rings",
    mealType: "SIDES",
    type: "VEG",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/onion_rings.png",
    category: {
      id: 4,
      name: "American",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/american.png"
    },
    ingredients: [
      { name: "Onions", quantity: "2 large" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Bread crumbs", quantity: "1 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Oil", quantity: "for frying" }
    ]
  }
];

export const mealTypes = [
  { id: 1, name: "STARTER" },
  { id: 2, name: "MAIN COURSE" },
  { id: 3, name: "DESSERT" },
  { id: 4, name: "SIDES" }
];