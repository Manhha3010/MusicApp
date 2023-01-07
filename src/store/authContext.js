import React from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = React.useState(null);
  const Ninh = 'Ninh';
  return (
    <AuthContext.Provider value={{token, setToken, Ninh}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
