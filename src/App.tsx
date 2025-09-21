import "./App.css"
import { useState } from "react"
import Todo from "./components/Todo"

export type Todo = {
  id: number,
  text: string,
  completed: boolean
}


function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(){
    if(!input.trim()) return

    const newTodo : Todo = {
      id:  Date.now(),
      text: input,
      completed: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
    setInput("")
  }

  function completeTodo(id: number){
    
    setTodos((prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed: true} : todo)))
    }


  return (
   <>
    <div className="bg-purple-950 p-2 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-md shadow-md">
        <h1 className="text-center text-white text-2xl">Todos for the day</h1>
        <div className="flex gap-2  justify-center my-8">
          <input
          value={input}
          onChange={(e => setInput(e.target.value))}
          type="text" placeholder="Add Todo" className="flex-[3] border-2 outline-none border-gray-500 text-white placeholder:text-gray-500 p-2 rounded-md focus:border-white "  />
          <button onClick={handleAddTodo} className="flex-[1] bg-purple-800 cursor-pointer rounded-md text-sm hover:bg-purple-900 text-white">Add Todo</button>
        </div>
        <div>
          <h1 className="text-white text-xl text-center">Todos</h1>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
          ))}
        </div>
      </div>
    </div>
   </>
  )
}

export default App
