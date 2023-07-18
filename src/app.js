import Header from "./component/header";
import './app.css';
import Footer from "./component/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import { useState } from "react";
import axios from "axios";

const App = () => {

    const [name, setName] = useState("");
    const [question, setQuestion] = useState();
    const [score, setScore] = useState(0)

    const GetQuestion = async(categorY = "", difficulTy = "") => {

        const{data} = await axios.get(
            `https://opentdb.com/api.php?amount=10&${categorY && `&category=${categorY}`}${difficulTy && `&difficulty=${difficulTy}`}&type=multiple`
        )
        console.log(data);
        setQuestion(data.results)
        // console.log(data.results);
        
        // Make a request for a user with a given ID
        // axios.get(`https://opentdb.com/api.php?amount=10&categorY=${categorY}$&difficulTy=${difficulTy}&type=multiple`)
        //     .then((response)=> {
        //         // handle success
        //         console.log(response.data.results);
        //         setQuestion(response.data.results)
        //     })
        //     .catch((error)=> {
        //         // handle error
        //         console.log(error);
        //     })
    }


    return (
        <BrowserRouter>
            <div className="app">


                <Header />
                <Switch>
                    <Route path="/" exact><Home name={name} setName={setName} GetQuestion={GetQuestion} /></Route>
                    <Route path="/Quiz" exact><Quiz name={name} question={question} score={score} setScore={setScore} setQuestion={setQuestion} /></Route>
                    <Route path="/Result" exact><Result score={score} name={name} /></Route>
                </Switch>







            </div>
            <Footer />
        </BrowserRouter>
    );
}
export default App;