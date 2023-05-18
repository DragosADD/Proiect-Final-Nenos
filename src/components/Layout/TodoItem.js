import TodoItemTemplate from "./TodoItemTemplate";
import React, { useContext } from "react";
import ToDoContext from "../Storeage/ToDoContext";

//usefull functions
function eitherHourOrMinute(todo) {
  if (todo.duration > 60) {
    const hours = Math.floor(todo.duration / 60);
    const minutes = todo.duration - hours * 60;
    return `${hours} h ${minutes} min `;
  }
  return `${todo.duration} min`;
}

export default function TodoItem(props) {
  const ctx = useContext(ToDoContext);

  function deleteHandler(id) {
    ctx.removeToDo(id);
  }

  function getHandler(id) {
    ctx.getToDo(id);
    props.open();
  }

  const ToBeRedendered = ctx.items.map((el) => {
    return (
      <TodoItemTemplate
        duration={eitherHourOrMinute(el)}
        text={el.whatToDo}
        key={el.id}
        onDelete={() => deleteHandler(el.id)}
        onUpdate={() => getHandler(el.id)}
      />
    );
  });

  return <React.Fragment>{ToBeRedendered}</React.Fragment>;
}

// function randomNumber() {
//   return Math.floor(Math.random() * 1000000);
// }

// export default function TodoItem(props) {
//   //getting to data to be rendered
//   const ctx = useContext(ToDoContext);

//   //rendering items
//   const ToBeRedendered = ctx.items.map((el) => {
//     function deleteHandler() {
//       ctx.removeToDo(el.id);
//     }
//     function updateHandler() {
//       ctx.getToDo(el.id);
//       props.open();
//     }

//     return (
//       <TodoItemTemplate
//         duration={eitherHourOrMinute(el)}
//         text={el.whatToDo}
//         key={el.id}
//         onDelete={deleteHandler}
//         onUpdate={updateHandler}
//       ></TodoItemTemplate>
//     );
//   });

//   //rendering the whole list even if the dame is TodoItem
//   return <React.Fragment>{ToBeRedendered}</React.Fragment>;
// }
