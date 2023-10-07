import { useState } from 'react'
import Todo from './components/todo'
import styled from 'styled-components'
import TodoForm from '../src/components/TodoForm'


const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  
  margin: 0 20%;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #FAF0E6;
`





function App() {

 

  const [todos, setTodos] = useState([
      {
          id:1,
          text: "criar funcionalidade x no sistema",
          category: "Trabalho",
          isCompleted: false,
        },
        {
          id:2,
          text: "Ir pra academia",
          category: "Pessoal",
          isCompleted: false,
        },
        {
          id:3,
          text: "Estudar React",
          category: "Estudos",
          isCompleted: false,
        }
  ])


  const AddTodo = (text,category) => {
    const newTodos = [
      ...todos,
      {
        id:Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted:false,
  
      },
    ];
      setTodos(newTodos);
  };
  const remove = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter((todo => todo.id !== id ? todo:null))

    setTodos(filterTodos)

    
  

  }

  const complete =(id) => {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? (todo.isCompleted = !todo.isCompleted)  : todo )
    setTodos(newTodos)
  }

  
  return (
    
   <AppContainer>
    <h1>LISTA DE TAREFAS</h1>
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} remove={remove} complete={complete}/>
             
      ))}
    <TodoForm AddTodo={AddTodo}/>
    </div>
    

  


   </AppContainer>
  )
}

export default App
