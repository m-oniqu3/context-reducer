import "./App.css";
import { useCommunityContext } from "./context/useCommunityContext";

function App() {
  const { community } = useCommunityContext();

  return (
    <>
      <h3>How to use useContext & useReducer with TypeScript in React</h3>
      <p>Welcome to the {community} community!</p>
    </>
  );
}

export default App;
