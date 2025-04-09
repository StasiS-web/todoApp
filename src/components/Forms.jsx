import React, { useState } from "react";

export default function Forms() {
    const [taskName, setTaskName]=useState("")
    const createTodo=()=>{};
    const handleChange=(e)=>{};

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