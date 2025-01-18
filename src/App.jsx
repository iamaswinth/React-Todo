import React, { useState } from 'react'

import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("")

  let i = 0;

  const handleSubmit = () => {
    if(input.trim() === ""){
      alert("Please Enter TodoList")
      return
    }

    setTodos(todos => {
      return todos.concat({
        text : input,
        id : nanoid(),
      })
    })
    
    setInput("")

  }

  const handleKeyDown = e => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  const removeTodos = (id) => setTodos(
    todos.filter(t => t.id !== id)
  )



  return (
    <div className='container'>
      <input 
      type="text" 
      placeholder='New Todo' 
      value={input} 
      onChange={e => setInput(e.target.value)} 
      onKeyDown={handleKeyDown}
      />

      <button onClick={handleSubmit} className='mt-4'>Submit</button>
      

      <ul className='todos-list  '>
        {todos.map(({text, id}) => (
          <li key={id} className='todo'>
            <span>{text}</span>
            <button className='close' onClick={() => removeTodos(id)}>x</button>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default App