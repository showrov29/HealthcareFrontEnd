import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function Doctors () {
    const [doctors,setDoctors]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    


const loadAppointment=(Id)=>{
    
    navigate('/bookappointment/'+Id)

}

const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
    
    
   

}
const handleFilter=(e)=>{
    if(e.target.value==''){
        setDoctors(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.Specaility.toLowerCase().includes(e.target.value.toLowerCase()))
        setDoctors(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/doctors")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setDoctors(data)
        setData(data)
        console.log(data);

    })
    .catch((err)=>{
        console.log(err.message);
    })
   
}, []);

  return (
    <div className='container'>
        
        <div className='card'>
            <div className='card-title'>
                <h2>Doctor Info</h2>
                <div>
                <input type='search' placeholder='Search Doctors' onInput={(e)=>handleFilter(e)} />
                </div>
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Name</td>
                            <td>Speciality</td>
                            <td>Visiting Hour</td>
                            <td>Fees</td>
                            <td>Action</td>

                        </tr>

                    </thead>
                    <tbody>
                        { doctors &&
                            doctors.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Specaility}</td>
                                    <td>{item.Visiting_Hour}</td>
                                    <td>{item.Fees}
                                    </td>
                                    <td>
                                    <a onClick={()=>{loadDetail(item.Hid)}} className='btn btn-primary'>Details</a>
                                    <a onClick={()=>{loadAppointment(item.Id)}} className='btn btn-success'>Appointment</a>
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
