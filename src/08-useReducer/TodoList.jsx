import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [] , onDeleteTodo,ontoggleTodo }) => {
  
  
  
  
  return (
    <>
      <ul className="list-group">
        {
          todos.map( todo =>(
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo}
            ontoggleTodo={ontoggleTodo}
          />
          ))
        }
      </ul>
    </>
  )
}
