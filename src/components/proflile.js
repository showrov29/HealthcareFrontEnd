import React from 'react'
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


export default function Proflile() {
    const[profile,setProfile]=useState([])
    const id=localStorage.getItem('pid')
    const [Name, setName] = useState('');
    const [Age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get('https://localhost:44328/api/Patient/'+id)
        .then(function(res){
         console.log(res.data);
         setProfile(res.data);
         
        })
      
    }, []);

      const handleEdit=(profile)=>{
        const item={
            Id:profile.Id,
            Name: Name,
            Age: Age,
            phone: phone,
            Status: "New",
            User_Type: "Paitent",
            password: password,
            Email: Email
            
        }
        if(item.Name=='' || item.Name==null){
            item.Name=profile.Name
        }
      else if(item.Age=='' || item.Name==null){
            item.Name=profile.Age
        }
      else if(item.phone=='' || item.phone==null){
            item.Name=profile.phone
        }
      else if(item.Age=='' || item.Name==null){
            item.Name=profile.Age
        }
      else if(item.Email=='' || item.Email==null){
            item.Name=profile.Email
        }
      else if(item.password=='' || item.password==null){
            item.Name=profile.password
        }


        else{
            axios.post('https://localhost:44328/api/Patient/update',item)
            .then((result)=>{
              alert(result)
            })
            .catch((err)=>{
              alert(err);
          
            
              
            })
        
        }
       
      }

  return (
    <div>
      <div className='reg'>
      <Form >
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type='text' name='name'  placeholder='Enter your name' onChange={ (e)=>setName(e.target.value)} disable />
            <span>Previous Name:{profile.Name}</span>
        </Form.Group>
        
        <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control type='number' name='age' value={profile.Age}   placeholder='Age' maxLength={2}  onChange={ (e)=>setAge(e.target.value) }/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control type='phone' name='phone'  placeholder='Enter your phone'  onChange={  (e)=>setPhone(e.target.value)}/>
            <span>Previous Phone:{profile.phone} </span>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email'  value={profile.Email} disabled placeholder='Enter your email'  disable />
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' name='password'   placeholder='Enter password' onChange={  (e)=>setPassword(e.target.value)} />
        </Form.Group> 
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleEdit(profile)} className='btn btn-success'>Update</a>
            

            </div>
           
            
        </Form.Group>

    </Form>
      </div>
    </div>
  )
}
