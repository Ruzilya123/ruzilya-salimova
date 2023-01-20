
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import ToDo from './ToDo'

function ToDos() {

    const [todos, setTodos] = useState([
        { id: nanoid(10), title: "Task 1", completed: false },
        { id: nanoid(10), title: "Task 2", completed: true },
        { id: nanoid(10), title: "Task 3", completed: false },
        { id: nanoid(10), title: "Task 4", completed: true },
        { id: nanoid(10), title: "Task 5", completed: false }
    ])

    return (
        <div>
            <ToDo
            todos={todos}
            setTodos={setTodos}
            />
        </div>
    )
}

export default ToDos