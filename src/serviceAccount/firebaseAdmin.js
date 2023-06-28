const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount/healthy-recipe-fbb2b-firebase-adminsdk-qcexx-30b5313b68.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Create a user account with the desired email address and password
const email = 'example@example.com';
const password = 'password123';

admin
  .auth()
  .createUser({
    email: email,
    password: password,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

module.exports = admin;
