import React from 'react'

function ToDoField({id, title, completed, isCheckbox, isDelete, isEdit}) {
    return (
        <li 
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        className={completed ? 'task__completed' : ''}>
            <input checked={completed} type="checkbox" onChange={() => isCheckbox(id)}/>
            <label onClick={() => isEdit(id)}>{title}</label>
            <button style={{borderRadius: '50px', background: 'lightgray'}} onClick={() => isDelete(id)}>Delete</button>
        </li>
    )
}

export default ToDoField