import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from 'react';
import ToDoField from './ToDoField';

function ToDo({todos, setTodos}) {

    const [add, setAdd] = useState("")

    function isCheckbox(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
        }))
    }

    function isDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function isEdit(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: prompt("Edit")}
            }
            return todo
        }))
    }

    function addTodo() {
        setTodos([...todos, { id: nanoid(7), title: add, completed: false }]);
        setAdd("");
      }

    return (
        <div>
            <input
                style={{borderRadius: '10px'}}
                value={add}
                onChange={event => setAdd(event.target.value)}
                placeholder={'Add Todo...'}
            />
            <button style={{borderRadius: "1.1em", border: "1px solid", textTransform: "uppercase"}} onClick={addTodo}>Submit</button>
            <ul>
                {todos.map(todo => (
                    <ToDoField
                    key={todo.id}
                    {...todo}
                    isCheckbox={isCheckbox}
                    isDelete={isDelete}
                    isEdit={isEdit}
                    />
                    )
                )}
            </ul>
        </div>
    )
}

export default ToDo