import React from 'react'
import jsPDF from 'jspdf'
import {renderToString} from 'react-dom/server'
import PresReport from '../report/presReport'
import { Document,Page } from 'react-pdf'
import Home from '../Home'
import BloodBank from './BloodBank'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { NavItem } from 'react-bootstrap'
import { useEffect } from 'react'
import html2canvas from 'html2canvas'


export default function PresDetails() {
  const {id}=useParams()
  const [prescription, setPrescription]=useState('')

useEffect(() => {
  axios.get('https://localhost:44328/api/Prescription/'+id)
  .then(res=>{
    setPrescription(res.data)
  })
  .catch(err=>{
    alert(err)
  })

}, []);
   
const doc=new jsPDF();

const download=()=>{
   
  html2canvas(document.querySelector('#my-div')).then(canvas=>{
    const pdf = new jsPDF('p','mm','a4');
    pdf.addImage(canvas.toDataURL('image/png'),'PNG',10,10,301,80);
    pdf.save('report.pdf');
  })

}
  return (
    <div>
     <div id='my-div'>
     <div className='containerP'>

<h3>Paitent Name: {prescription.Patient_Name}</h3>
<h3>Paitent Name: {prescription.Patient_Age}</h3>

</div>
<div>
<h3>Tests:</h3>
<h6>{prescription.Test}</h6>
</div>
<div>
<h3>Medichines:</h3>
<p>{prescription.Medicine}</p>
</div>

     </div>
     
        <a onClick={download} className='btn btn-primary'>Download</a>
        
    </div>
  )
}
