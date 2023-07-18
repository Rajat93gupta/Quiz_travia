import { Button, MenuItem, TextField, } from '@material-ui/core';

import React, { useEffect, useState } from 'react'
import '../CSS/Home.css'
import Categories from '../Categories';
import { useHistory } from 'react-router-dom';
import Error from './Error';

const Home = ({ name, setName, GetQuestion }) => {
    const [categorY, setCategory] = useState("");
    const [difficulTy, setDifficulty] = useState("");
    const [error, setError] = useState(false)
    // console.log(categorY);
    const history = useHistory();




    const HandleSubmit = () => {
        if (!categorY || !name || !difficulTy) {
            setError(true)
            return

        }
        else {
            setError(false);
            GetQuestion(categorY, difficulTy);
            history.push("/Quiz")
        }


    }

    return (
        <div className='Content'>
            <div className='Main'>
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className='Main_data'>

                    {error && <Error>Please Fill all the feilds</Error>}


                    <TextField
                        style={{ marginBottom: 35, marginTop: 20 }}
                        label='Enter Your Name'
                        // variant='outlined'
                        // id="outlined-basic"

                        onChange={(e) => setName(e.target.value)}
                    >

                    </TextField>
                    <TextField select label="Categories"
                    //  variant='outlined'
                        value={categorY}
                        onChange={(e) => setCategory(e.target.value)}
                    >

                        {
                            Categories.map((item) => (
                                // console.log(item)
                                <MenuItem key={item.category} value={item.value}>
                                    {item.category}
                                </MenuItem>

                            ))

                        }

                    </TextField>
                    <TextField select label="Difficulty" 
                    // variant='outlined'
                        style={{ marginBottom: 35, marginTop: 20 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulTy}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>

                        <MenuItem key="Hard" value="hard">Hard</MenuItem>



                    </TextField>

                    <Button variant="contained" color="primary" onClick={HandleSubmit} >Start Quiz</Button>





                </div>

            </div>


            <img src='/quiz.svg' className='banner' alt='logo'></img>

        </div>
    )
}

export default Home;
