import { FaCheckCircle, FaTrash } from "react-icons/fa"
import type { Todo } from "../App"

type TodoProps = {
    todo: Todo,
    completeTodo : (id:number) => void,
    removeTodo : (id:number) => void,
}

function Todo({todo, completeTodo, removeTodo} : TodoProps) {

  return (
    <div className="bg-purple-800 p-2 rounded-md flex justify-between items-center my-4 text-white">
            <p className={`${todo.completed === true ? "line-through" : ""}`}>{todo.text}</p>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaCheckCircle onClick={()=> completeTodo(todo.id)}  className="hover:text-gray-200"/>
              <FaTrash onClick={()=> removeTodo(todo.id)}  className="hover:text-gray-200" />
            </div>
          </div>
  )
}

export default Todo