import React from 'react';
import '../components/index.css';
import '../components/style.css';

function showQueue() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Queue />
      </div>
    );
  }
  
function Queue() {
    const backendData = [
      { date : "05-05-2022", time : "11:00", name:"นพดล กิจจิหาญ" },
      { date : "17-05-2022", time : "14:00", name:"ยนาพร กาญกอจ" },
      { date : "13-05-2022", time : "12:00", name:"นลิตเนตร ปัญญาสุข" }
    ]
  
    const noteRootStyle = {
      border: "2px #0af solid",
      borderRadius: 9,
      margin: 20,
      backgroundColor: "#efefef",
      padding: 6
    };

    return (
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
            {backendData.map(ele => 
                <tr>
                <th scope="col">{ele.date}</th>
                <th scope="col">{ele.time}</th>
                <th scope="col">{ele.name}</th>
                </tr>
            )}

            </tbody>
        </table>
        </div>
      )
}

export default showQueue;