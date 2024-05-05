import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "The App Context must be used within an AppContextProvider"
    );
  }

  return context;
}
