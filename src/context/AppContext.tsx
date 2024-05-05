import { ReactNode, createContext } from "react";

type AppContextType = {
  message: string;
};

export const AppContext = createContext<AppContextType | null>(null);

type ContextProviderProps = {
  children: ReactNode;
};

function AppContextProvider({ children }: ContextProviderProps) {
  return (
    <AppContext.Provider value={{ message: "Hello World" }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
