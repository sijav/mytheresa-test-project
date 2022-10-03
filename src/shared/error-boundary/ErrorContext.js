import {createContext, useContext} from 'react';

export const ErrorContext = createContext({
  error: null,
  reset: () => {}
});

export const useErrorContext = () => useContext(ErrorContext);
