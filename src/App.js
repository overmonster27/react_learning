import './App.css';
import {Posts, takeUserPosts, Users} from "./Components";
import {useState} from "react";


function App() {

    let [posts, setPosts] = useState([])

    let getPost = (id) => {
        takeUserPosts(id)
            .then(({data}) => {setPosts([...data])
            })
    }

    return (
        <div className="App">
            <Users getPost={getPost}/>
            <Posts innerPost={posts}/>
        </div>

    );
}

export default App;
