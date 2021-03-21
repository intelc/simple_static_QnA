import './App.css';
import Header from './Components/Header'
import NewPost from './Components/NewPost'
import Reply from './Components/Reply'
import {Button,Toast} from 'react-bootstrap'
import {useState} from 'react'

function App() {
  const [thread, setThread] = useState([])
  return (
    <div className='d-flex flex-column'>
      <div className= 'd-flex justify-content-center' style={{padding:50}}>
        <Header text="What's Your Favourite Emoji🥺"/>
      </div>
      <NewPost onAdd={(data)=>setThread([...thread,data])} lastId = {thread.length}/>
      <br/>
      <div >
                {thread.map((entry)=>(
                  <div className='container shadow' style={{marginTop:30}}>
                    <Reply className='shadow' name = {entry.name} post = {entry.post}/>
                    </div>
                )

                )}
      </div>
    </div>
  );
}

export default App;
