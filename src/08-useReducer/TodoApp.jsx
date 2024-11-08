import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {


  const{todos, todosCount,pendingTodosCount,handleDeleteTodo, handleToggleTodo,handleNewTodo} = useTodo()

  return (
    <>
      <h1>TodoApp: { todosCount }, <small>Pendientes: {pendingTodosCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
            <TodoList 
              todos={todos} 
              onDeleteTodo={ handleDeleteTodo }
              ontoggleTodo={ handleToggleTodo}
            />
        </div>
        
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>

    </>
    )
}
