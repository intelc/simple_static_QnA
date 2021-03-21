import './App.css';
import Header from './Components/Header'
import NewPost from './Components/NewPost'
import Reply from './Components/Reply'
import {Button,Toast} from 'react-bootstrap'
import {useState} from 'react'

function App() {
  const [thread, setThread] = useState([])
  return (
    <div style={{ 
      backgroundImage: `url("https://i.kym-cdn.com/photos/images/newsfeed/000/581/296/c09.jpg")`,imageStyle:'opacity:0.1' 
      , paddingBottom:500
    }}>
    <div style={{position:'absolute', top:0,right:0,left:0,bottom:0,backgroundColor:'rgba(0,0,0,0.5)',zIndex:0}}></div>
    <div className='d-flex flex-column' style={{position:'relative',zIndex:1,}}>
      <div className= 'd-flex justify-content-center' style={{padding:50}}>
        <Header text="What's Your Favourite MEME🥺" />
      </div>
      <NewPost onAdd={(data)=>setThread([...thread,data])} lastId = {thread.length} style={{}}/>
      <br/>
      <div >
                {thread.map((entry)=>(
                  <div className='container shadow rounded-lg' style={{marginTop:30,backgroundColor:'white'}}>
                    <Reply className='shadow' name = {entry.name} post = {entry.post}/>
                    </div>
                )

                )}
      </div>
    </div>
    </div>
  )
}

export default App;
