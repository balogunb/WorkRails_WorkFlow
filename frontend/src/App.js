import './App.css';
import Main from './components/main.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {


  const data = {
    q1: "Hello World",
    q2: "What is the way",
    q3: "This is working",
  };

  return (
    <Router>
      <Main/>
    </Router>
  );
}

export default App;
