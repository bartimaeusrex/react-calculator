import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [oper, setOper] = useState('+')
  const [calc, setCalc] = useState('')
  const [message, setMessage] = useState('')

  const updateNum1 = event => setNum1(event.target.value)
  const updateNum2 = event => setNum2(event.target.value)
  const updateOper = event => setOper(event.target.value)

  const updateCalc = (event) => {
    if (Number(num1) && Number(num2)) {
      if (message) setMessage('')
      switch (oper) {
        case 'subtract':
          setCalc(Number(num1) - Number(num2))
          break
        case 'multiply':
          setCalc(Number(num1) * Number(num2))
          break
        case 'divide':
          setCalc(Number(num1) / Number(num2))
          break
        default:
          setCalc(Number(num1) + Number(num2))
        //   break
        // default:
        //   setCalc('')
    }
  } else {
    setMessage('Please provide valid numbers.')
    setCalc('')
  }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input type="text" className="num" onChange={updateNum1} />
      <select id="operator" onChange={updateOper}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="text" className="num" onChange={updateNum2} />
      <button onClick={updateCalc}>=</button>
      <input type="text" className="num" id="answer" value={calc} />
      <div className="message">{ message ? `${message}` : null }</div>
    </div>
  )
}
