import React,{ useState }from 'react'
import {Form, Button} from 'react-bootstrap'
const NewPost = ({onAdd,lastId}) => {
    const [name, setName]=useState('')
    const [post, setPost] = useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!name||!post){
            alert('bro u tripp\'in')
            return
        }
        const id = {lastId}
        onAdd({id, name, post})
        console.log(`Name is ${name}`)
        console.log(`Post is \n${post}`)
        setName('')
        setPost('')
    }
    return (
        <div className='container shadow-lg rounded-lg' style={{padding:20, backgroundColor:'white'}}>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label className='font-weight-bold' style={{fontSize:30}}>New Post</Form.Label>
                    <Form.Control placeholder="Name..." value = {name}
                    onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control as='textarea' placeholder='Write a new post...'value = {post}
                    onChange={(e)=>setPost(e.target.value)}/>
                </Form.Group>
                <Button className='float-right' variant="primary" type="submit" disabled={`${(!name||!post)?'true':''}`} >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewPost
