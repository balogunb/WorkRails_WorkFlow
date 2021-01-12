import './App.css';
import Main from './components/main.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {


var data =  {
  "step1":{
    "question": "What car are you looking to buy?",
    "options":[
      {"string":"Mercedes", "value": 50000},
      {"string":"Toyota", "value": 20000},
      {"string":"Chevy", "value": 30000},
      {"string":"Dodge", "value": 60000},
    ],
    "review": "Car cost:"
  },
  "step2":{
    "question": "When do you want it delivered?",
    "review": "Delivery cost:"
  },
  "step3":{
    "question": "Select Additional Features",
    "options":[
      {"string":"Self Driving", "value": 6000},
      {"string":"Chrome Rims", "value": 1000},
      {"string":"WIFI", "value": 4000},
      {"string":"Television", "value": 8000},
      {"string":"Auto Lock", "value": 300},
      {"string":"Stars", "value": 9000},
    ],
    "review": "Additional Features Cost:"
  }
}

  return (
    <Router>
      <Main data = {data}/>
    </Router>
  );
}

export default App;
