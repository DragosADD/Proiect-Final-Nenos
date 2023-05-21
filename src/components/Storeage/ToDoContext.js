import React from "react";

const ToDoContext = React.createContext({
  toDos: [],
  loadedToDo: {},
  getToDo: (id) => {},
  addToDo: (todo) => {},
  removeToDo: (id) => {},
  updateToDo: (id) => {},
  deleteAllToDo: (arrOfID) => {},
});

export default ToDoContext;
