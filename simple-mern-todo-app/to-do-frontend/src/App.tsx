import React, { useState, useEffect } from 'react';
import { postTodosAPI, getTodosAPI, patchTodosAPI, deleteTodosAPI } from './api/todos'
import CreateToDo from './CreateToDo';
import TodoTable from './TodoTable'

interface Todo{
  _id?: any,
  title: string,
  description: string,
  done: boolean,
}

const App:React.FC = ()=> {

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodosAPI().then(todos => setTodos(todos))
  }, []);

  const addTodo = (todo: Todo) => {
    postTodosAPI(todo).then(data => {
      setTodos([...todos, data])
    })
  }

  const updateTodo = (id: any, done: boolean) => {
    patchTodosAPI(id, (done) ? false : true).then(data => {
      if(data){
        console.log('updating records!!')
        getTodosAPI().then(todos => setTodos(todos))
      }
    })
  }

  const deleteTodo = (id: any) => {
    deleteTodosAPI(id).then(data => {
      if (data.deletedCount === 1) {
        setTodos(todos.filter(todo => todo._id !== id))
      }
    })
  }

    return (
      <main role="main" className="container">
        <CreateToDo onCreate={addTodo} />
        <TodoTable 
          todos={todos} 
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </main>  
    )
}

export default App;