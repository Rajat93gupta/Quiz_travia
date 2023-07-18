import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import '../quiz.css';
const Quiz = ({name,score,question,setScore,setQuestion}) => {
    const[option,setOption]=useState();
    const[currQestion,setCurQuestion]=useState(0);


    useEffect(() =>{
        // console.log(question);
        setOption(
            question && handleShuffle([question[currQestion]?.correct_answer,...question[currQestion]?.incorrect_answers])
        );

    },[question,currQestion])
    // console.log(question[currQestion].category);
    
console.log(question);
    const handleShuffle=(optiones)=>{
        return optiones.sort(()=> Math.random() - 0.5 )


    }
    
    // console.log(question[currQestion].category);
  return (
    <div className='quiz'>
      <span className='name'>Welcome  , {name}</span>

      {
        question?(
            <>
            <div className='quizInfo'>
                <span>{question[currQestion].category}</span>
                
                <span>Score: {score}</span>
            </div>

            <Question option={option}  currQestion={currQestion} setCurQuestion={setCurQuestion} score={score} setScore={setScore} correct = {question[currQestion]?.correct_answer} question={question} setQuestion={setQuestion} />
            </>

        ) : (
            <CircularProgress
            style={{margin:100}}
            color="inherit"
            size={150}
            thickness={1}
            
            />

        )
      }


    </div>
  )
}

export default Quiz;
