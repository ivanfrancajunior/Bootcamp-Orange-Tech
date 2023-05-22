import { useState } from 'react'
import { Container, Content, Row } from './styles.js'

import InputComponent from './components/Input/Input.jsx'
import Button from './components/Button/Button.jsx'

function App() {
  const [ currentNumber, setCurrentNumber ] = useState('0')
  const [firstNumber,setFirstNumber] = useState('0')
  const [operation,setOperation] = useState('0')
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev ==='0' ? '' : prev}${number}`)
  }
  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleDivideNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleMultiplyNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleRestOfDivisionNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    } else {
      const sum = Number(firstNumber) % Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleInvertNumbers = () => {

   if (firstNumber === '0') {
    setFirstNumber(String(Number(currentNumber) * -1));
    setCurrentNumber(currentNumber  * -1);
    setOperation('*-1');
  } else {
    const invertedNumber = Number(currentNumber) * -1;
    setCurrentNumber(String(invertedNumber));
  }
  }
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        case '/':
          handleDivideNumbers()
          break
        case '*':
          handleMultiplyNumbers()
          break
        case '%':
          handleRestOfDivisionNumbers()
          break
        case '*-1':
          handleInvertNumbers()
          break
        default:
            break
          }
          
        }
      } ;
  


  return (
    <Container>
      <Content>
        <InputComponent value={currentNumber} />
        <Row>
          <Button label='CE' onClick={handleOnClear} className='operation' />
          <Button label='C' onClick={handleOnClear} className='operation'/>
          <Button label ='%' onClick={handleRestOfDivisionNumbers} className='operation'/>
          <Button label ='x' onClick={handleMultiplyNumbers} className='operation'/>
        </Row> 
        <Row>
          <Button label ='9' onClick={() =>handleAddNumber('9')}/>
          <Button label ='8' onClick={() =>handleAddNumber('8')}/>
          <Button label ='7' onClick={() =>handleAddNumber('7')}/>
          <Button label ='÷'onClick={handleDivideNumbers} className='operation'/>
        </Row> 
        <Row>
          <Button label ='6' onClick={() =>handleAddNumber('6')}/>
          <Button label ='5' onClick={() =>handleAddNumber('5')}/>
          <Button label ='4' onClick={() =>handleAddNumber('4')}/>
          <Button label ='-' onClick={handleMinusNumbers} className='operation'/>
        </Row> 
        <Row>
          <Button label ='3' onClick={() =>handleAddNumber('3')}/>
          <Button label ='2' onClick={() =>handleAddNumber('2')}/>
          <Button label ='1' onClick={() =>handleAddNumber('1')}/>
          <Button label ='+' onClick={handleSumNumbers} className='operation'/>
        </Row>
        <Row>
          <Button label ='+/-' onClick={handleInvertNumbers}/>
          <Button label ='0' onClick={() =>handleAddNumber('0')}/>
          <Button label ='.' onClick={() =>handleAddNumber('.')}/>
          <Button label ='=' onClick={handleEquals} className='operation'/>
        </Row>
        

        

          
          
          
        
       
        
      </Content>
    </Container>
      
  )
}

export default App
