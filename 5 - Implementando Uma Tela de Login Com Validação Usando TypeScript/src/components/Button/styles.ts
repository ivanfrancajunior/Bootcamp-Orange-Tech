import styled,{css} from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    
    ${(props) => props.disabled && css`
      background-color: #5d1c83;
      opacity: 0.6;
      cursor:not-allowed;
    `}

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`