import './App.css';
import {Carekter} from "./components/Component";


function App() {
    return (
        <div className="App">

            <Carekter
                id={1}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />

            <Carekter
                id={2}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'male'}
                image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            />

            <Carekter
                id={3}
                name={'Summer Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />

            <Carekter
                id={4}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />



        </div>
    );
}

export default App;
