import {ButtonContainer} from './styles'
const Button = ({label, onClick, className}) => {
  return (
    <ButtonContainer onClick={onClick} className={ className }>{label}</ButtonContainer>
  )
}

export default Button