import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import '../styles/listCRUID.css';

// Initialize Firebase app
firebase.initializeApp({
    apiKey: "AIzaSyA38ZQFOUSELiwmlYOA76TnWZrY28dUt9E",
    authDomain: "healthy-recipe-fbb2b.firebaseapp.com",
    projectId: "healthy-recipe-fbb2b",
    storageBucket: "healthy-recipe-fbb2b.appspot.com",
    messagingSenderId: "757477750335",
    appId: "1:757477750335:web:fccbc88e756e40fddb2a8a",
    measurementId: "G-73HQPNY4C5"
});

export default function RecipeListDashboardCRUID() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the list of recipes from Firestore when the component mounts
    const fetchRecipes = async () => {
      try {
        const recipesCollection = await firebase.firestore().collection('recipes').get();
        const recipeList = recipesCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipeList);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipeId) => {
    // Handle click on recipe title, you can implement the read more functionality here
    console.log('Read more about recipe with ID:', recipeId);
  };

  const editRecipe = (recipeId) => {
    // Handle click on Edit button
    console.log('Edit recipe with ID:', recipeId);
    // Implement your edit functionality here
    // You can navigate to an edit page or show a modal for editing the recipe
  };

  const deleteRecipe = (recipeId) => {
    // Handle click on Delete button
    console.log('Delete recipe with ID:', recipeId);
    // Implement your delete functionality here
    // You can prompt a confirmation dialog and delete the recipe if confirmed
  };

  const handleEditClick = (recipeId) => {
    editRecipe(recipeId);
  };

  const handleDeleteClick = (recipeId) => {
    deleteRecipe(recipeId);
  };
  

  return (
    <div className="recipe-list-container">
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div className="recipe-item" key={recipe.id}>
          <h4 onClick={() => handleRecipeClick(recipe.id)}>{recipe.title}</h4>
          <div className="buttons-container">
            <button onClick={() => handleEditClick(recipe.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(recipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
