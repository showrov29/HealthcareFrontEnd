import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Register from './signup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Logout() {

    const loadLogin=()=>{
        navigate('/')
    }
    // alert(localStorage.getItem('User_Id'))

    const navigate=useNavigate();
    const {uid}=useParams()
    axios.get('https://localhost:44328/api/patientAuth/logout/'+ localStorage.getItem('User_Id'))
    .then((res)=>{
        alert(res.data)
        localStorage.removeItem('token')
        localStorage.removeItem('token')
        localStorage.removeItem('Email')
        localStorage.clear()
        if (res.data !=null) {
            loadLogin()
        }
    })
    .catch((err)=>{
        alert(err)
    })
   
  return (
    <div>

    </div>
  )
}
