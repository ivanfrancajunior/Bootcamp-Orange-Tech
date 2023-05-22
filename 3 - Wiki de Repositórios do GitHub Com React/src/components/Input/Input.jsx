import {InputContainer} from './Inputstyles'

const Input = ({value, onChange}) => {
    return (
        <InputContainer >
            <input type="text" placeholder='Digite um usuário' value={ value }  onChange={onChange}/>
        </InputContainer>
     
   
    )
}

export default Input