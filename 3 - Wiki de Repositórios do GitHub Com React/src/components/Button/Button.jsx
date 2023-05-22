import {InputContainer as ButtonContainer} from './Buttonstyles'

const Button = ({onClick}) => {
    return (
        <ButtonContainer  onClick={onClick}>
            Buscar
        </ButtonContainer>
     
   
    )
}

export default Button