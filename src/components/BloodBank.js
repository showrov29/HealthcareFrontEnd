import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';

export default function BloodBank () {
    const [bloodBank,setBloodBank]=useState(null);
    const navigate=useNavigate();
    const [fileterVal,setFilterVal]=useState('')
    const [searchData,setData]=useState([])
    




const loadDetail=(Hid)=>{
    navigate('/details/'+Hid)
    
    
   

}
const handleFilter=(e)=>{
    if(e.target.value==''){
        setBloodBank(searchData)
    }
    else{
      const filterResult=  searchData.filter(item=>item.BGroup.toLowerCase().includes(e.target.value.toLowerCase()))
        setBloodBank(filterResult)
    }
    setFilterVal(e.target.value)

}




useEffect(() => {
    fetch("https://localhost:44328/api/bloodbanks")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    {
        setBloodBank(data)
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
                <h2>Blood info</h2>
                <div>
                <input type='search' placeholder='Search Blood' onInput={(e)=>handleFilter(e)} />
                </div>
               
            </div>
            <div className='card-body'>
                <table className='table table-borderd'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Blood Group</td>
                            <td>Collection Date</td>
                            <td>Quantity(in bags)</td>
                            

                        </tr>

                    </thead>
                    <tbody>
                        { bloodBank &&
                            bloodBank.map(item=>(
                                <tr key={item.Id}>
                                    <td>{item.BGroup}</td>
                                    <td>{item.collection_Date}</td>
                                    <td>{item.Quantity}</td>
                                   
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
