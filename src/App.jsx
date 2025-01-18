import React, { useState } from 'react'

import { nanoid } from 'nanoid';

const App = () => {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  
  const [input, setInput] = useState("")

  

  const handleSubmit = () => {
    if(input.trim() === ""){
      alert("Please Enter TodoList")
      return
    }

    const newTodo = {
      text : input,
      id : nanoid(),
    }

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];

      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    })
    
    setInput("")

  }

  const handleKeyDown = e => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  const removeTodos = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((t) => t.id !== id);

      localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }



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