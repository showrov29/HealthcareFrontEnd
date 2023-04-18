import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Feadback() {

const [Email, setEmail] = useState('');
const [Feedback, setFeadback] = useState('');

const handleSubmit=()=>{

    const item={
        Email: Email,
        Feeback:Feedback

    }


    
 
   console.warn(item)
  axios.post('https://localhost:44328/api/feedback/add',item)
  .then((result)=>{
    alert(result.data);
    
  })
  .catch((err)=>{
    alert(err);

  
    
  })

}

  return (
    <div>
        <Form >
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email'  placeholder='Enter your email' required onChange={ (e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Give Feadback*</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={ (e)=>setFeadback(e.target.value)} />
        </Form.Group>
       
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleSubmit} className='btn btn-success'>Send Feadback</a>
            </div>
           
            
        </Form.Group>

    </Form>


    </div>
  )
}
