import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';

export default function BookedAmbulances () {
    const [ambulance,setAmbulance]=useState(null);
    const navigate=useNavigate();
    // const [fileterVal,setFilterVal]=useState('')
    // const [searchData,setData]=useState([])
    


// const loadAppointment=(Id)=>{
    
//     navigate('/appointment/'+Id)

// }

const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
 
}


const cancelAmb=(item)=>{
    if (item.Status =="Waiting") {
     alert('It is not booked')
    }
    else if(item.Status =="Confirmed"){
        alert('It can not be canceled now')

    }
    else if(!item.Pid == localStorage.getItem('pid')){
        alert('This is not booked By you')

    }
    else if(item.Pid == localStorage.getItem('pid') && item.Status =="Requesting"){
 
     const data={
         Id:item.Id,
         Driver_Name:item.Driver_Name,
         Phone:item.Phone,
         Rent:item.Rent,
         Status:"Waiting",
         Hid:item.Hid,
         
         Location:item.Location
 
 
 
     }
     
     axios.post('https://localhost:44328/api/Ambulance/update',data)
         .then((result)=>{
           alert(result)
         })
         .catch((err)=>{
           alert(err);
       
         
           
         })
     
    }
  
 }

 


useEffect(() => {
    fetch("https://localhost:44328/api/ambulances/pid/"+localStorage.getItem('pid'),{
    headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setAmbulance(data)
        
        console.log(data);

    })
    .catch((err)=>{
        console.log(err.message);
    })
   
}, []);

  return (
    <div className='container'>
        
        <div className='card'>
            {/* <div className='card-title'>
                <h2>Ambulances </h2>
                <div>
                <input type='search' placeholder='Search Ambulance' onInput={(e)=>handleFilter(e)} />
                </div>
               
            </div> */}
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Driver Name</td>
                            <td>Phone</td>
                            <td>Rent</td>
                            <td>Loaction</td>
                            <td>Status</td>
                            <td>Action</td>

                        </tr>

                    </thead>
                    <tbody>
                        { ambulance &&
                            ambulance.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Driver_Name}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Rent}</td>
                                    <td>{item.Location}</td>
                                    <td>{item.Status}</td>
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Hid)}} className='btn btn-primary'>Details</a>
                                   
                                    <a  onClick={()=>cancelAmb(item)} className='btn btn-danger'>Cancel </a>
                                    
                                   
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
