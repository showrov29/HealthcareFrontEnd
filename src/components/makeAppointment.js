import React from 'react'
import { useParams } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap';
import Appointment from './Appointment';
import axios from 'axios';

export default function MakeAppointment() {
    const {id}=useParams();

const [name, setName] = useState('');
const [age, setAge] = useState(null);
const [date, setDate] = useState(null);



    const handleConfirm=()=>{
       
        const data={
            Name:name,
            P_Age:age,
            Status:"New",
            AppointmentDate:date,
            Pid:localStorage.getItem('pid'),
            Did:id

          
        }
        console.warn(data)
        axios.post('https://localhost:44328/api/Appointment/add',data)
        .then((result)=>{
          alert(result.data);
        })
        .catch((err)=>{
          alert(err);
      
    
         
          
        })
      

    }

  return (
    <div className='reg'>
    <Form >
        <Form.Group>
            <Form.Label> Patient's Name:</Form.Label>
            <Form.Control type='text' name='name' placeholder='Enter patient name' onChange={ (e)=>setName(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group>
            <Form.Label> Patient's Age:</Form.Label>
            <Form.Control type='number' name='age'    placeholder='Age' maxLength={2}   onChange={ (e)=>setAge(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group>
            <Form.Label>Appointment Date:</Form.Label>
            <Form.Control type='date' name='date'  onChange={ (e)=>setDate(e.target.value)}  required />
        </Form.Group>
       
        <Form.Group>
            <br/>
   
            <div className='log'>
            <a onClick={handleConfirm} className='btn btn-success'>Confirm</a>
            
        

            </div>
           
            
        </Form.Group>

    </Form>
  </div>
  )
}
