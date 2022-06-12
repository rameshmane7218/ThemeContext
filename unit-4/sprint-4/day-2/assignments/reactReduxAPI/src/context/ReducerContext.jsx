import React, { createContext, useReducer, useState } from "react";
import data from "../data/tasks.json";
import { v4 as uuidv4 } from "uuid";

export const ReducerContext = createContext();

const updateData = (task, { type, id, value, payload }) => {
  switch (type) {
    case "removeItem": {
      let newTask = task.filter((todo) => todo.id != id);
      return newTask;
    }
    case "addItem": {
      return [
        ...task,
        {
          id: uuidv4(),
          text: value,
          done: false,
          count: 1,
        },
      ];
    }

    case "ToggleStatus": {
      return task.map((todo) => {
        if (todo.id === id) {
          todo.done = !payload;
        }
        return todo;
      });
    }
    case "Increment": {
      return task.map((todo) => {
        if (todo.id === id) {
          todo.count = payload + 1;
        }
        return todo;
      });
    }
    case "Decrement": {
      return task.map((todo) => {
        if (todo.id === id) {
          todo.count = payload - 1;
        }
        return todo;
      });
    }
    default: {
      console.log("Type incorrect", type);
      return task;
    }
  }
};

export const ReducerContextProvider = ({ children }) => {
  const [task, setTask] = useReducer(updateData, data);
  // console.log("task", task);
  return (
    <ReducerContext.Provider value={{ task, setTask }}>
      {children}
    </ReducerContext.Provider>
  );
};
