
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle,setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [interest,setInterest]=useState(0)
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

  const validate=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    //regualar expression
    console.log(!!e.target.value.match('^[0-9]*$'));
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=="principle")
      {
          setPrinciple(e.target.value)
          setIsPrinciple(true)
      }
      else if(e.target.name=="rate"){
        setRate(e.target.value)
        setIsRate(true)

      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }

    }
    else{
      if(e.target.name=="principle")
      {
          setPrinciple(e.target.value)
          setIsPrinciple(false)
      }
      else if(e.target.name=="rate"){
        setRate(e.target.value)
        setIsRate(false)

      }
      else{
        setYear(e.target.value)
        setIsYear(false)
      }

    }
  }
  
  const handleReset = () => {
    setPrinciple('')
    setRate('')
    setYear('')
    setInterest('')
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  };

  const handleCalculate=()=>{
    setInterest((principle*rate*year)/100)
  }
  return (
    <>
      <div style={{height:'120vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center' >
        <div style={{width:'400px'}} className='p-4 bg-light rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{height:'150px'}} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>
          <div className="my-3">
          <TextField name="principle" id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100' value={principle} onChange={(e)=>validate(e)}/>
          {!isPrinciple && <span className='text-danger'>Invalid Input</span>}
          </div>
          <div className="mb-3">
          <TextField name="rate" id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" className='w-100' value={rate} onChange={(e)=>validate(e)} />
          {!isRate && <span className='text-danger'>Invalid Input</span>}
          </div>
          <div className="mb-3">
          <TextField name="year" id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100' value={year} onChange={(e)=>validate(e)}/>
          {!isYear &&<span className='text-danger'>Invalid Input</span>}
          </div>
          <div className="mb-3  d-flex justify-content-between">
              <Button onClick={handleCalculate} style={{width:"150px",height:"40px"}} variant="contained" disabled={isPrinciple && isRate &&
              isYear?false:true}  color="success">Calculate</Button>
              <Button  onClick={handleReset} style={{width:"150px",height:"40px"}} variant="outlined">RESET</Button>
          </div>
         
          
          </div>
      </div>

    </>
  )
}

export default App
