import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
export default function () {

    const {pid}=useParams();
    const navigate=useNavigate();
    const [prescriptions,setPrescriptions]=  useState(null);
    useEffect(() => {
    
      fetch("https://localhost:44328/api/Prescriptions/pid/"+pid)
        
      
      .then((res)=>{
          return res.json()
      })
  
      .then((data)=>
      {
          setPrescriptions(data)
          console.log(data);
  
      })
      .catch((err)=>{
          alert(err)
      })
      
      
  
    
    }, []);

    
const loadDetail=(id)=>{
    navigate('/prescription/details/'+id)
    
    
   

}

  return (
    
<div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Prescriptions</h2>
            
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Prescription No</td>
                            <td>Paitent Name</td>
                            <td>Show Details</td>
                           
                        </tr>

                    </thead>
                    <tbody>
                        { prescriptions &&
                            prescriptions.map(item=>(
                                <tr key={item.Id}>
                                   
                                    <td>{item.Id}</td>
                                    <td>{item.Patient_Name}</td>
                                  
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Id)}} className='btn btn-primary'>Details</a>
                                    
                                    </td>
                                </tr>
                                
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    </div>
  )
}
