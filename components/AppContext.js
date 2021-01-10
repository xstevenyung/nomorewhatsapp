import { createContext, useContext } from 'react';

const AppContext = createContext({});

function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

function useApp() {
  return useContext(AppContext);
}

export default AppContext;
export { AppContextProvider, useApp };
