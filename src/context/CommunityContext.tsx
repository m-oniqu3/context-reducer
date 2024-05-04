import { ReactNode, createContext } from "react";


type CommunityContextType = {
    community: string;
}

export const CommunityContext = createContext<CommunityContextType | null>(null);


type ContextProviderProps = {
  children: ReactNode;
};


function CommunityContextProvider({ children }: ContextProviderProps) {


  return (
    <CommunityContext.Provider value={{ community: "React" }}>
      {children}
    </CommunityContext.Provider>
  );
}

export default CommunityContextProvider;