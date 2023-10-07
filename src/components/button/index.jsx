import  React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color:${props => props.cor || '#4477CE'};
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    padding:${props => props.tamanhoInterno || '15px 30px' };
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    

`

export default Button