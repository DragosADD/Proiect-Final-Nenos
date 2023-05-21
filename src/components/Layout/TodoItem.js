import TodoItemTemplate from "./TodoItemTemplate";
import React, { useContext, useState } from "react";
import ToDoContext from "../Storeage/ToDoContext";
import { Select, MenuItem, FormGroup, Button, Box } from "@mui/material";

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
  const [selectedAction, setSelectedAction] = useState("");
  const [checkedIDs, setCheckedIDs] = useState([]); // Corrected variable name
  const ctx = useContext(ToDoContext);

  const handleCheckboxChange = (e, item) => {
    const checkboxId = item.id;
    if (e.target.checked) {
      setCheckedIDs((prevIDs) => [...prevIDs, checkboxId]); // Use correct setter function
    } else {
      setCheckedIDs((prevIDs) => prevIDs.filter((el) => el !== checkboxId)); // Use correct setter function
    }
  };

  function deleteHandler(id) {
    ctx.removeToDo(id);
  }

  function getHandler(id) {
    ctx.getToDo(id);
    props.open();
  }

  function handleActionSelect(e) {
    setSelectedAction(e.target.value);
  }

  function handleActionButtonClick() {
    if (selectedAction === "delete") {
      ctx.deleteAllToDo(checkedIDs);
    }
    if (selectedAction === "done") {
      ctx.markAsDone(checkedIDs);
    }
    setSelectedAction("");
    setCheckedIDs([]); // Use correct setter function
  }

  function toDo(el) {
    return (
      <TodoItemTemplate
        duration={eitherHourOrMinute(el)}
        text={el.whatToDo}
        key={el.id}
        onDelete={() => deleteHandler(el.id)}
        onUpdate={() => getHandler(el.id)}
        onBoxChange={(e) => handleCheckboxChange(e, el)} // Use correct function name
        isChecked={checkedIDs.includes(el.id)} // Use correct variable name
        isDone={el.isDone}
      />
    );
  }

  const ToBeRendered = ctx.items.map((el) => {
    const varRouter = props.renderCase;
    if (varRouter === "all") {
      return toDo(el);
    }
    if (varRouter === "to-be-done") {
      if (el.isDone === false) {
        return toDo(el);
      }
    }
    if (varRouter === "done") {
      if (el.isDone === true) {
        return toDo(el);
      }
    }
    return;
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "40%",
          "@media (max-width: 768px)": { width: "60%" },
        }}
      >
        <FormGroup>{ToBeRendered}</FormGroup>
      </Box>
      {checkedIDs.length > 0 && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Select
            value={selectedAction || ""}
            onChange={handleActionSelect}
            displayEmpty
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="" disabled>
              Select Action
            </MenuItem>
            <MenuItem value="delete">Delete</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleActionButtonClick}
            disabled={!selectedAction || checkedIDs.length === 0}
            size="small"
          >
            Perform Action
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
}
