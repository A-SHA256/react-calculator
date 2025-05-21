import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Row from './components/Row'
import Button from './components/Button'
import data from './data.js'

function App({className}) {

  const [result, setResult] = useState('')

  const handleClick = (btn) => {
    if (btn === 'C') {
      return setResult('')
    }
    if (btn === '=') {
      setResult(eval(result)); 
    } else {
      setResult(result + btn);
    }
  };
  return (
      <div className={className}>
        <Display result={result} className="display" />
        <Button text='C' className='btn' clickHandler={() => handleClick('C')} />
        {data.map((row, index) => (
          <Row
          key={index}
          className="row"
          rowData={
            row.map((btn) => (
              <Button 
                key={btn}
                text={btn}
                className="btn"
                clickHandler={() => handleClick(btn)}
              />
            ))
          }
          />
        ))}
      </div>
  )
}

export default App
