import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import '../CSS/Question.css'
import Error from './Error';

const Question = ({option,correct,currQestion,setCurQuestion,score,setScore,question,setQuestion}) => {
    const[select,setSelect]=useState();
    const[error,setError]=useState(false)
    const history = useHistory();

    const handleSelect=(i)=>{
        if(select===i && select === correct){
            return "select"
        }
        else if(select===i && select !== correct){
            return "wrong"
        }else if(i===correct){
            return "select"
        }

        
    }
    const HandleCheck=(i)=>{
        setSelect(i);
        if(i===correct) setScore(score+1);
        setError(false)
    }
    const HandleQuit=()=>{
        setCurQuestion(0);
        setQuestion();

    }
    const HandleNext=()=>{
        if(currQestion > 8){
            history.push("/Result");

        }else if(select){
            setCurQuestion(currQestion + 1);
            setSelect();

        }else{
            setError("plese Select option first")
        }

    }
  return (
    <div className='QuestionBox'>

        <h1>Question {currQestion +1} </h1>

        <div className='singlequestion'>
            <h2>{question[currQestion].question}</h2>
        </div>

        <div className='option'>

        {error && <Error>Please Fill all the feilds</Error>}   
        {
            option && option.map((i)=>(
                <button onClick={()=>{HandleCheck(i )}}
                className={`singleOption ${select && handleSelect(i)}`}
                key={i}
                disabled={select}
                >
                    {i}

                </button>
            ))

        }
        </div>
        <div className='Buttons'>
            <Button variant="contained" color="secondary" size="large" style={{width:185}} onClick={HandleQuit} href = "/">
                Quit
            </Button>
            <Button variant="contained" color="primary" size="large" style={{width:185}} onClick={HandleNext}>Next Question</Button>
        </div>

      
    </div>
  )
}

export default Question
