import { Component } from "react";
import userData from "./Component/Data.jsx";
import Prog1 from "./Component/Prog1.jsx";
import Prog2 from "./Component/Prog2.jsx";
import Prog3 from "./Component/Prog3.jsx";
import Prog4 from "./Component/Prog4.jsx";
import Prog5 from "./Component/Prog5.jsx";


class App extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Prog1 value={userData}/>
                <Prog2 value={userData}/>
                <Prog3 value={userData}/>
                <Prog4 value={userData}/>
                <Prog5 value={userData}/>

            </div>
        )
    }
}

export default App