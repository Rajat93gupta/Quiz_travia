import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'; 
import '../CSS/Result.css'
const Result = ({score,name }) => {

    const history = useHistory();
    useEffect(()=>{
        if(!name){
            history.push("/")
        }

    },[name,history])
  return (
    <div className='result'>
        <span className='title'>Final Score : {score}</span>
        <Button
         variant ="contained"
        size= "large"
        color="secondary"
        style={{alignSelf: "center", marginTop: 20}}
        href = "/"
        >
            Go to HomePage
        </Button>

       
      
    </div>
  )
}

export default Result;
