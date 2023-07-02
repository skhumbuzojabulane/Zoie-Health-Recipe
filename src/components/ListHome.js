import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import '../styles/listHome.css';

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

function ListHome() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the list of recipes from Firestore when the component mounts
    const fetchRecipes = async () => {
      try {
        const recipesCollection = await firebase.firestore().collection('recipes').get();
        const recipeList = recipesCollection.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          category: doc.data().category,
          instructions: doc.data().instructions
        }));
        setRecipes(recipeList);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <div className="recipe-list-container">
        <h3 className="titles">Simple Recipes Made For real, actual, everyday life.</h3>
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.id}>
            <h4>{recipe.title}</h4>
            <p>Category: {recipe.category}</p>
            <h5>Instructions:</h5>
            <ul>
                {recipe.instructions && Array.isArray(recipe.instructions) ? (
                <ul>
                    {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                    ))}
                </ul>
                ) : (
                <p>No instructions available</p>
                )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListHome;
