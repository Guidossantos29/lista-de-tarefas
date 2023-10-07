import React from 'react'
import Button from '../button/index'
import styled from 'styled-components'

const ContainerButton = styled.div`
  display:flex;
  flex-direction:row;
  gap:5px;
  
  

`
const Todo_item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: white;
  border-radius: 5px;

`
const Todo_text = styled.p`
  margin-left: 15px;
`


const Todo = ({todo,remove,complete}) => {
  return (
    <div>
        <Todo_item style={{textDecoration: todo.isCompleted ? 'line-through':''}}>
          <Todo_text>{todo.text}</Todo_text>
          <Todo_text>
            ({todo.category})
          </Todo_text>
        </Todo_item>  
          <ContainerButton>
            <Button onClick={() => complete(todo.id)}>Completar</Button>
            <Button onClick={() => remove(todo.id)} cor='red' >x</Button>
          </ContainerButton>
        </div>
  )
}

export default Todo


