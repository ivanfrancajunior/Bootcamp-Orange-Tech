import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`         
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    
    border: #e41050;
    cursor: pointer;
    font-weight: bold;
    margin-right: 10px;

    color:white ;
    padding: 2px 12px;
    width: 100%;
    min-width: 120px;
    
    ${({variant}) => variant !== "primary" && css`
    
        min-width: 167px;
        height: 33px;
        background-color: #e41050;
        margin-bottom: 34px;


        &::after {
            content: "";
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

    `}

        &:hover{
            opacity: 0.5;
        }
        `