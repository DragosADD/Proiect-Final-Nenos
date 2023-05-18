import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import ToDoContext from "./ToDoContext";

const defaultToDoState = {
  items: [],
  loadedToDo: {},
};

const toDoReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = [...state.items, action.item];
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((el) => el.id !== action.id);
    console.log(updatedItems);
    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE") {
    const updatedItems = state.items.map((el) => {
      if (el.id === action.item.id) {
        return {
          ...el,
          duration: action.item.duration,
          whatToDo: action.item.whatToDo,
          outputTimeType: action.item.outputTimeType,
        };
      }
      return el;
    });

    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "GET") {
    const loadedToDo = state.items.find((el) => el.id === action.id);
    console.log(loadedToDo);
    return {
      ...state,
      loadedToDo: loadedToDo || {},
    };
  }
  return defaultToDoState;
};

export default function ToDoProvider(props) {
  const [toDoState, dispatchToDoAction] = useReducer(
    toDoReducer,
    defaultToDoState
  );

  useEffect(() => {
    const storedToDos = localStorage.getItem("todo");
    if (storedToDos) {
      const parsedToDos = JSON.parse(storedToDos);
      parsedToDos.forEach((el) => {
        console.log(el);
        addToDoHandler(el);
      });
    }
  }, []);

  useEffect(() => {
    if (toDoState.items.length === 0) {
      localStorage.removeItem("todo");
      return;
    }
    localStorage.setItem("todo", JSON.stringify(toDoState.items));
  }, [toDoState.items]);

  const addToDoHandler = (item) => {
    dispatchToDoAction({ type: "ADD", item: item });
  };

  const removeToDoHandler = (id) => {
    dispatchToDoAction({
      type: "REMOVE",
      id: id,
    });
  };
  const updateToDoHandler = (id, item) => {
    dispatchToDoAction({
      type: "UPDATE",
      item: item,
    });
  };

  const getToDoAction = (id) => {
    dispatchToDoAction({
      type: "GET",
      id: id,
    });
  };

  const toDoContex = {
    items: toDoState.items,
    loadedToDo: toDoState.loadedToDo,
    getToDo: getToDoAction,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
    updateToDo: updateToDoHandler,
  };

  return (
    <ToDoContext.Provider value={toDoContex}>
      {props.children}
    </ToDoContext.Provider>
  );
}
