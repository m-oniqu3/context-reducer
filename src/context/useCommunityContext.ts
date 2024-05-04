import { useContext } from "react";
import { CommunityContext } from "./CommunityContext";

export function useCommunityContext() {
    const communityContext = useContext(CommunityContext);

    if (!communityContext) {
        throw new Error("useCommunityContext must be used within a CommunityContextProvider");
    }

    return communityContext;
}