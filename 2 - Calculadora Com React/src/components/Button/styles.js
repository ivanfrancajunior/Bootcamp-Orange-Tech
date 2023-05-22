import styled from "styled-components";

export const ButtonContainer = styled.button`
    color: white;
    padding:20px; 
    border: 1px solid #4c475d;
    background-color: #2d2a37;
    font-size: 24px;
    flex: 1;
    cursor: pointer;
    
    &:hover{
        opacity: 0.6;
        color:#952a28;
    }

    color: ${(props) =>
    props.className === 'operation' ? '#237ca6' : '#fff'};

`