const admin = require('./firebaseAdmin');

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
