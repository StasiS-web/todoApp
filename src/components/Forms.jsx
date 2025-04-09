import React, { useState } from "react";
import firebase from "firebase/compat/app";

export default function Forms() {
    const [taskName, setTaskName]=useState("");

    const createTodo=(e)=>{
        e.preventDefault();
        const todoRef=firebase.database().ref("Todo");
        const todo ={
            taskName,
            completed: false,
        }
        todoRef.push(todo);
    };
    const handleChange=(e)=>{
        setTaskName(e.target.value);
    };

    return (
        <form onSubmit={createTodo}>
            <input 
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            value={taskName}
            required
            onChange={handleChange}
            />
            <button className="button-add" type="submit">
              Add
            </button>
        </form>
    );
}