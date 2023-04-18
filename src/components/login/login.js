import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {

    const navigate=useNavigate();
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser]=useState(null)
    const loadSignup=()=>{
      navigate('/signup')
  }

    const loadHome=()=>{
      navigate('/home')
    }
    const handleLogin=()=>{
        const item={
            
            password: password,
            Email: Email
        }

     
    
      axios.post('https://localhost:44328/api/patientAuth/login',item)
      .then(function(response){
       
        
        if (response.data.Id !=null) {
          alert(response)
          console.log(response.data.Token1);
          localStorage.setItem('token',response.data.Token1)
          localStorage.setItem('User_Id',response.data.User_Id )
          localStorage.setItem('Email',Email)
          // alert(localStorage.getItem('User_Id'))
          loadHome()
        }
        else{
          alert(response.data)
        }
      })
      
      .catch(function(err){
        console.log(err);
      })

   
    }

  return (
    <div className='reg'>
        <Form>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter your email' onChange={ (e)=>setEmail(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' name='password'    placeholder='password'  onChange={ (e)=>setPassword(e.target.value) } required/>
        </Form.Group>

        <Form.Group>
            <br/>
   
           
            <a onClick={handleLogin} className='btn btn-success'>Login</a>
            <a onClick={loadSignup} > <u>Dosen't have an account ?</u></a>
              
        </Form.Group>


        </Form>
    </div>
  )
}
