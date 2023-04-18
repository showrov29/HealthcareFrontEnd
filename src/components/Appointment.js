import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';

export default function Appointment() {
    const {pid}=useParams();
    const [appointment,setAppointment]=  useState(null);
    useEffect(() => {
    
      fetch("https://localhost:44328/api/Appointments/pid/"+localStorage.getItem('pid'))
        
      
      .then((res)=>{
          return res.json()
      })
  
      .then((data)=>
      {
          setAppointment(data)
          console.log(data);
  
      })
      .catch((err)=>{
          console.log(err.message);
      })
      
      
  
    
    }, []);


    const loadDetail=()=>{
        alert('asdkf')
    }

  return (
    
<div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Appointments History</h2>
            
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Appointment No</td>
                            <td>Paitent Name</td>
                            <td>Appointment Date</td>
                            {/* <td>Hospital Name</td> */}
                            <td>Details</td>


                        </tr>

                    </thead>
                    <tbody>
                        { appointment &&
                            appointment.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.AppointmentDate}</td>
                                    
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Hid,item.did)}} className='btn btn-primary'>Details</a>
                                    
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
