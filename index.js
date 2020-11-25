
// Carrot-js
// Please send feedback to: drivelchat@gmail.com

// Import React & rxjs to make use of context & observables
import React from 'react';
import { Subject } from 'rxjs';

// Create new 'store' and provider component
const pantry = React.createContext({});
const Carrot = pantry.Provider;

// Function to set a new variable
const plant = (variable, data) => {
  try {
    if (!pantry[variable]) {
      pantry[variable]['temp'] = data; // If no listners, store new temp variable
      pantry[variable] = new Subject(); // Store new observable in pantry
    }
    pantry[variable].next(data); // Set new data
  } catch (error) {
    console.log(error);
  }
};

// Function to listen to changes of observable
const pick = (variable, cb) => {
  try {
    // If variable already exists, execute CB once and delete temp value
    if (pantry[variable]['temp']) {
      cb(pantry[variable]['temp']);
      delete pantry[variable]['temp'];
    }
    if (!pantry[variable]) pantry[variable] = new Subject();
    pantry[variable].subscribe({ // Subscribe to observable
    next(data) { cb(data); } // If change is detected, pass variable to callback
    })
  } catch (error) {
    console.log(error);
  }
};

export { Carrot };
export { pantry };
export { plant };
export { pick };