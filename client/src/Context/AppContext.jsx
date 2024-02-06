import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toast from '../Components/Toast';
import { useQuery } from 'react-query';

import * as apiClient from '../http'

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

  const [toast, setToast] = useState()

  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false
  })

  console.log(isError)

  return (
    <AppContext.Provider value={{
      showToast: (toastMessage) => {
        setToast(toastMessage)
      },
      isLogged: !isError
    }}>
      {toast && (<Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(undefined)} />)}
      {children}
    </AppContext.Provider >
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}