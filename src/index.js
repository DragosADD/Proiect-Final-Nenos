import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import ToDoProvider from "./components/Storeage/ToDoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToDoProvider>
    <App />
  </ToDoProvider>
);
