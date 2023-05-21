import { useState, useEffect, useContext } from "react";
import ToDoContext from "../Storeage/ToDoContext";
import TodoFormtemplate from "./TodoFormtemplate";

function random() {
  return Math.floor(Math.random() * 1000000);
}

export default function TodoForm(props) {
  const [time, setTime] = useState("");
  const [isValidTime, setisValidTime] = useState();

  const [description, setDescription] = useState("");
  const [IsValidDescription, setIsValidDescription] = useState();

  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);
  const [isTimeTouched, setIsTimeTouched] = useState(false);

  const [outputTimeType, setOutputTimeType] = useState("minutes");
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(ToDoContext);

  function validate(timeOrDescription) {
    if (timeOrDescription === "time") {
      if (!isNaN(time) && time !== "" && time > 0) {
        return true;
      }
    } else if (timeOrDescription === "description") {
      if (description.trim().length > 0) {
        return true;
      }
    }
    return false;
  }

  // loading values for the update button
  useEffect(() => {
    const objectVar = ctx.loadedToDo;
    if (objectVar && Object.keys(objectVar).length === 4) {
      setTime(objectVar.duration);
      setDescription(objectVar.whatToDo);
      setOutputTimeType(objectVar.outputTimeType);
    }
  }, []);

  //Just so that the button doesnt re render and flashes
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        !isNaN(time) && time !== "" && time > 0 && description.trim().length > 0
      );
    }, 500);
    return () => {
      console.log(`Cleanup`);
      clearTimeout(identifier);
    };
  }, [time, description]);

  //submit form
  function handleSubmit(e) {
    e.preventDefault();
    if (
      Object.keys(ctx.loadedToDo).length === 4 &&
      validate("time") &&
      validate("description")
    ) {
      let calculatedTime = time;
      if (outputTimeType === "hours") {
        calculatedTime = time * 60;
      }
      ctx.updateToDo(ctx.loadedToDo.id, {
        duration: Number(calculatedTime),
        whatToDo: description,
        outputTimeType: outputTimeType,
        id: ctx.loadedToDo.id,
        isDone: ctx.loadedToDo.isDone,
      });
      setTime("");
      setDescription("");
      props.onClose();
      return;
    }

    //making sure that it's impossible to enter bad data
    if (validate("time") && validate("description")) {
      let calculatedTime = time;
      if (outputTimeType === "hours") {
        calculatedTime = time * 60;
      }
      ctx.addToDo({
        duration: Number(calculatedTime),
        whatToDo: description,
        outputTimeType: outputTimeType,
        id: random(),
        isDone: false,
      });
      console.log(ctx.items[ctx.items.length - 1]);
      setTime("");
      setDescription("");
      props.onClose();
    }
  }

  //validation on every change
  function getValueTime(e) {
    const value = e.target.value;
    setTime(value);
    setisValidTime(validate("time"));
  }

  function getValueDescription(e) {
    const value = e.target.value;
    setDescription(value);
    setIsValidDescription(validate("description"));
  }

  //to see if the fields have been touched
  function validateInputTime() {
    setisValidTime(validate("time"));
    setIsTimeTouched(true);
  }

  function validateInputDescription() {
    setIsValidDescription(validate("description"));
    setIsDescriptionTouched(true);
  }

  return (
    <TodoFormtemplate
      validateInputDescription={validateInputDescription}
      validateInputTime={validateInputTime}
      getValueDescription={getValueDescription}
      getValueTime={getValueTime}
      handleSubmit={handleSubmit}
      setOutputTimeType={setOutputTimeType}
      formIsValid={formIsValid}
      isTimeTouched={isTimeTouched}
      isDescriptionTouched={isDescriptionTouched}
      IsValidDescription={IsValidDescription}
      isValidTime={isValidTime}
      time={time}
      description={description}
      outputTimeType={outputTimeType}
    ></TodoFormtemplate>
  );
}
