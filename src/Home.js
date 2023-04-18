import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Feadback from './components/feadback';

export default function Home() {
  const navigate=useNavigate();
  const [pid,setId]=useState('')
  // localStorage.setItem('token',"dasfadsfo")
  const x=(localStorage.getItem('token') !=null)
  const loadLogin=()=>{
    navigate('/')
}
 


useEffect(() => {
  var id=localStorage.getItem('Email')
  
  let xid=id.slice(0,- 4)
  console.log(xid);
  axios.get('https://localhost:44328/api/Patient/byemail/'+xid)
  .then(res=>{
    setId(res.data)
    localStorage.setItem('pid',res.data)
  })
  .catch(err=>{
    alert(err)
  })

}, []);






useEffect(() => {
  
  if(x==false){
    return loadLogin()
  }
}, []);
  

  const loadDoctors=()=>{
    
    navigate('/doctors')
  
  }
  const loadProfile=()=>{
    
    navigate('/profile')
  
  }
  const loadBloodBanks=()=>{
    
    navigate('/bloodbanks')
  
  }
  const loadAmbulances=()=>{
    
    navigate('/ambulances')
  
  }
  const loadBookedAmbulances=()=>{
    
    navigate('/ambulances/booked')
  
  }
  const loadPrescriptions=(pid)=>{
    
    navigate('/prescriptions/'+pid)
  
  }

  const loadAppointments=(pid)=>{
    
    navigate('/appointments/'+pid)
  
  }
  const loadLogout=()=>{
    
    navigate('/logout')
  
  }



  return (
    <div>
        <h1>Dashboard</h1>
        <a onClick={()=>{loadAppointments(pid)}} className='btn btn-success'>Appointments</a>
        <a onClick={()=>{loadDoctors()}} className='btn btn-success'>Find Doctors</a>
        <a onClick={()=>{loadProfile()}} className='btn btn-success'>Profile</a>
        <a onClick={()=>{loadBloodBanks()}} className='btn btn-success'>Find Blood</a>
        <a onClick={()=>{loadAmbulances()}} className='btn btn-success'>Find Ambulances</a>
        <a onClick={()=>{loadBookedAmbulances()}} className='btn btn-success'>Booked Ambulances</a>
        <a onClick={()=>{loadPrescriptions(pid)}} className='btn btn-success'>Prescriptions</a>
        <a onClick={()=>{loadLogout(pid)}} className='btn btn-success'>Logout</a>
       <div className='reg'>
       <Feadback/>
       </div>
    </div>
  )
}
