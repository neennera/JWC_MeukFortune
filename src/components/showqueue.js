import '../components/index.css';
import '../components/style.css';
import React,{useState,useEffect} from 'react';
import data from '../data.json'

function ShowQueue() {
    return (
      <div className="App">
       {
         <div class="container">
         <center><h2>รายชื่อคิว</h2></center><br/>
         <table class="table table-striped table-light" >
             <thead>
                 <tr>
                 <th scope="col">วันที่</th>
                 <th scope="col">เวลา</th>
                 <th scope="col">ชื่อ</th>
                 </tr>
             </thead>
             <tbody>
             {data.map((item, i) => (
                
                <tr key={i}>
                 <th scope="col">{item.date}</th>
                 <th scope="col">{item.time}</th>
                 <th scope="col">{item.name}</th>
                 </tr>
              ))}
             </tbody>
         </table>
         </div>
       }
      </div>
    );
  }

export default ShowQueue;