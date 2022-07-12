import './App.css';
import {Comments, Users} from "./Components";

function App() {
    return (
        <div className="App">

            <div className='Users'><Users/></div>
            <div className='Comments'><Comments/></div>

        </div>
    );
}

export default App;
