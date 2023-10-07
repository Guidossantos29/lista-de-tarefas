import { useState } from 'react'
import Button from '../button'
import styled from 'styled-components'

 const TodoFormContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap:5px;


`


  

const TodoForm = ({AddTodo}) => {

    const [value,setValue] = useState('');
    const [category,setCategory] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category ) return; 
    AddTodo(value,category);
    setValue('')
    setCategory('')
    
}
    

  return (
    <div>
        <h2>Criar Tarefa</h2>
    <TodoFormContainer onSubmit={handleSubmit}> 
        
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Digite o titulo' />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Escolha uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <Button tamanhoInterno = '7px 15px' >Criar Tarefa</Button>
    </TodoFormContainer>
    </div>
  )
}

export default TodoForm