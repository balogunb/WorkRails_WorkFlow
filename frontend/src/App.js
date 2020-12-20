import './App.css';
import Main from './components/main.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Main/>
    </Router>
  );
}

export default App;
