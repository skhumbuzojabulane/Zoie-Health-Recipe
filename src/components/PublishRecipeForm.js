import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; 
import 'firebase/compat/firestore';

import '../styles/publishRecipeForm.css'; // Import the CSS file

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA38ZQFOUSELiwmlYOA76TnWZrY28dUt9E",
  authDomain: "healthy-recipe-fbb2b.firebaseapp.com",
  projectId: "healthy-recipe-fbb2b",
  storageBucket: "healthy-recipe-fbb2b.appspot.com",
  messagingSenderId: "757477750335",
  appId: "1:757477750335:web:fccbc88e756e40fddb2a8a",
  measurementId: "G-73HQPNY4C5"
};

firebase.initializeApp(firebaseConfig);

function PublishRecipeForm() {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [publishError, setPublishError] = useState(false);
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const validExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validExtensions.includes(fileType)) {
        setFileError('Please upload a JPEG, PNG, or JPG image.');
        setCoverPhoto(null);
      } else {
        setCoverPhoto(file);
        setFileError('');
      }
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!title || !instructions) {
      setPublishError(true);
      setPublishSuccess(false);
      return;
    }

    // Create a new recipe object
    const recipe = {
      title,
      instructions,
      category
    };

    // Store the recipe in Firebase Firestore
     firebase.firestore().collection('recipes').add(recipe)
      .then((docRef) => {
        // Upload the cover photo to Firebase Storage
        if (coverPhoto) {
          const storageRef = firebase.storage().ref();
          const coverPhotoRef = storageRef.child(`covers/${docRef.id}`);
          coverPhotoRef.put(coverPhoto)
            .then(() => {
              console.log('Cover photo uploaded successfully!');
              setPublishSuccess(true);
              setPublishError(false);

              // Clear the cover photo state
              setCoverPhoto(null);
            })
            .catch((error) => {
              console.error('Error uploading cover photo:', error);
              setPublishSuccess(false);
              setPublishError(true);
            });
        } else {
          setPublishSuccess(true);
          setPublishError(false);
        }

        // Clear the form fields after successful submission
        setTitle('');
        setInstructions('');
        setCategory('');
        setCoverPhoto(null);
      })
      .catch((error) => {
        console.error('Error storing recipe:', error);
        setPublishSuccess(false);
        setPublishError(true);
      });
  };

  return (
    <div>
      <h2>Publish Recipe</h2>
      <div className='content'>
      <p>The <strong>Publish Recipe Form</strong> is a user-friendly web form that allows you to effortlessly create and share your favorite recipes. 
          <br /> Simply enter the recipe <strong>Title</strong>, <strong>instructions</strong>, and an optional <strong>category</strong>, and click <strong>Publish Recipe</strong> to submit. 
          <br /> Your recipe will be securely stored and displayed for others to enjoy.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='drop-container'>
          <label htmlFor="coverPhoto">Drop cover photo here:</label>
          <input
            type="file"
            id="coverPhoto"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {fileError && <p className='error-message'>{fileError}</p>}
        </div>
        <div>
          <label htmlFor="title" >Title:</label>
          <input
            type="text"
            id="title"
            placeholder='Burger'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            placeholder='type the description here'
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required ></textarea>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            placeholder='Fast Food'
            value={category}
            onChange={(e) => setCategory(e.target.value)}/>
        </div>
          {(publishSuccess || publishError) && (
              <p className={`message ${publishSuccess ? 'success-message' : 'error-message'}`}>
                {publishSuccess
                  ? 'Recipe published successfully!'
                  : 'Error storing recipe. Please try again.'}
              </p>
            )}
        <div className='padButton'>
            <button className='button' type="submit">Publish Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default PublishRecipeForm;
