import "./App.css";
import Main from "./components/main.js";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {  
  const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const prom = await fetch("http://localhost:3001/getdata", requestOptions);
      var res = await prom.json();
      //console.log(res);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Main data={data} />
    </Router>
  );
}

export default App;
