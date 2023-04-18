import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';

export default function Detail() {
  const {id}=useParams();
  const [docdetails,setDocDetails]=  useState(null);
  useEffect(() => {
  
    fetch("https://localhost:44328/api/hospital/"+id)
    .then((res)=>{
        return res.json()
    })

    .then((data)=>
    {
        setDocDetails(data)
        console.log(data);

    })
    .catch((err)=>{
        console.log(err.message);
    })
    
    

  
  }, []);


  return (
    <div>
      {
        docdetails  &&
        
        <div>
           <h3>Hospital Name: {docdetails.Name}</h3>
           <h5>Hospital Location: { docdetails.Location}</h5>
        

        </div>
       
        
      }
    </div>
  )
}
