import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#048CBA", // This is an orange looking color
    },
    secondary: {
      main: "#2bff55", //Another orange-ish color
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#CBF0FD",
          color: "#048CBA",
          "&:hover": {
            backgroundColor: "#CBF0FD",
          },
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "#EFFBFF",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();
