// EXAMPLE ONLY! THIS FILE IS USUALLY NOT PART OF GIT TRACKING
// .gitignore skips this at the project level, but it is added for example here

export const firebase = {
  apiKey: 'AIzaSyBBa0NBUQMC_8YxF0F4nAGuzuIr5QF_pDA',
  authDomain: 'redux-50cf5.firebaseapp.com',
  databaseURL: 'https://redux-50cf5.firebaseio.com',
  storageBucket: 'redux-50cf5.appspot.com',
  messagingSenderId: '863335352832'
}

// Config for react-redux-firebase
// For more details, visit https://prescottprue.gitbooks.io/react-redux-firebase/content/config.html
export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
  enableLogging: false, // enable/disable Firebase Database Logging
  updateProfileOnLogin: false // enable/disable updating of profile on login
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export const env = 'development'

export default { firebase, reduxFirebase, env }
