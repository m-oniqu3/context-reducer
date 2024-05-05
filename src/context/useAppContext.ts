import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppContext() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return appContext;
}
