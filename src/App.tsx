import "./App.css";
import { useAppContext } from "./context/useAppContext";

function App() {
  const { message } = useAppContext();

  return (
    <>
      <h3>How to use useContext & useReducer with TypeScript in React</h3>
      <p>{message}</p>
    </>
  );
}

export default App;
