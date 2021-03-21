import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
const ReplyPost = ({replyName, onReply, lastId,cleanUp}) => {
    const [name, setName]=useState('')
    const [post, setPost] = useState(`@${replyName} `)
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!name||!post){
            alert('bro u tripp\'in')
            return
        }
        const id = {lastId}
        onReply({id,name, post})
        console.log(`Name is ${name}`)
        console.log(`Post is \n${post}`)
        setName('')
        setPost('')
        cleanUp()
    }
    return (
        <div className='container shadow-lg rounded-lg' style={{padding:20, margin:20}}>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Control placeholder="Name..." value = {name}
                    onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control as='textarea' placeholder='Write a new post...'value = {post}
                    onChange={(e)=>setPost(e.target.value)} onfocus="this.value = this.value;"/>
                </Form.Group>
                <Button className='float-right' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ReplyPost
