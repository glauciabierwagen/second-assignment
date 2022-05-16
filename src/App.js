import Home from "./components/Home";
import Message from "./components/Message";

function App() {
  return (
    <div className="container">
      <Message greet="Welcome" who="JavaScript students" />
      <Home />
    </div>
  );
};

export default App;
