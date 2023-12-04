import React, { createContext, useContext, useReducer } from 'react';

const UserFormContext = createContext();

const initialState = {
    step: 1,
    name: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    agree:false,
    subscription: null,
    storeName: '',
    address: '',
    city: '',
    zipCode: '',
    storePhone: '',
    storeImage: null,
    schedules: null,
    storeDescription: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    cardholderName: '',
    billAdress: '',
    billCity: '',
    billZipCode: '',
    noted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export const UserFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <UserFormContext.Provider value={{ state, dispatch }}>
      {children}
    </UserFormContext.Provider>
  );
};


export const useUserForm = () => {
  const context = useContext(UserFormContext);
  if (!context) {
    throw new Error('useUserForm must be used within a UserFormProvider');
  }
  return context;
};
