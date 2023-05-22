import { InputContainer } from './styles.js'

const InputComponent = ({value}) => {
  return (
    <InputContainer>
      <input disabled type="text" value={ value} />
    </InputContainer> 
    
  )
}

export default InputComponent