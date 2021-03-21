import React, {useState,} from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {BiComment} from 'react-icons/bi'
import NewPost from './NewPost';
import ReplyPost from './ReplyPost';


const Reply = ({name,post}) => {
    const [thread, setThread] = useState([])
    const [counter, setCounter] = useState(0)
    const [replyInput, setReplyInput] = useState(false)
    const addReply = (data)=>{
        setThread([...thread, data])
    }
    return (
        <Container style={{padding:20,paddingBottom:5}}> 
            <Row>
                <Col xs >
                    <p className='font-weight-bold' style={{color:'blue'} }>{name}</p>
                    <p style={{fontSize:20}}>{post}</p>
                    
                </Col>
                <Col xs >
                    
                    <div className='float-right d-flex flex-column'>
                        <div className='align-self-center'><MdKeyboardArrowUp  onClick={()=>setCounter(counter+1)}/></div>
                        <div className='align-self-center font-bold-medium' style={{position:'relative', top:0, left:0}}><p>{counter}</p></div>
                        <div className='align-self-center'><MdKeyboardArrowDown onClick={()=>setCounter(counter-1)}style={{position:'relative', top:-15, left:0}}/></div>
                    </div>
                    
                </Col>

            </Row>
            <Row>
                

                <Col style={{borderLeft: '2px solid rgba(0, 0, 0, 0.1)', paddingRight:0, marginRight:0}}>
                    {thread.map((entry)=>(
                        <Reply name = {entry.name} post = {entry.post} style={{padding:20}} />
                    )

                    )}
                </Col>
                
            </Row>
            <Row>
                <div className='float-left d-flex flex-row' onClick={()=>setReplyInput(!replyInput)}>
                        <div className='p-2'><BiComment style={{position:'relative', top:0, left:8, color:'gray'}} /> </div> 
                        <div className='p-2'><p style={{position:'relative', top:1, right:5, color:'gray'}}>Reply</p></div>
                    </div>
                </Row>
            
            
            {replyInput && <Row>
                <ReplyPost replyName={name} onReply = {addReply} lastId={thread.length} cleanUp={()=>setReplyInput(false)}/>
            </Row>}
                
            
        </Container>
    )
}
Reply.defaultProps={
    name:'James',
    post:'Hello guys i am a sophomore'

}
export default Reply
