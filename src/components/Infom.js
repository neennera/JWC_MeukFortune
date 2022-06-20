import './style.css';
import Fortune from '../source/fortune.jpg'
import fahsai from '../source/fahsai.webp'
import jack from '../source/jack.webp'
import Mathew from '../source/Mathew.webp'


const pad130={ marginBottom : "0px",}
const mar100={ marginBottom : "0px" }
const F70={fontSize: "70px"}
const F30={fontSize: "30px"}

function Infom(){
    return(
        <>
        <div class="container text-center" style={pad130}>
            <h1 style={F70}>หมอหมึก</h1><br/>
            <p style={F30}>ผู้มีประสบการณ์การพยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ </p><br/><br/>
            <a href="/queue"><button type="button" class="btn btn-light">จองคิว</button></a>
        </div>


        <div class="container py-7 text-center reveal" style={mar100}>
            <div class="row">
                <div class="column" style={pad130}> {/* pad=70px*/}
                    <h2 class="py-2">ประวัติหมอหมึก</h2>
                    <p class="py-2">หมอหมึกเป็นนักพยากรณ์ที่ชํานาญด้านการทํานายดวง<br/>ด้วยลูกแก้วพยากรณ์ไพ่ทาโรและการดูลายมือ</p>
                    <p class="py-2">ด้วยความสามารถที่หลากหลาย ทําให้หมอหมึกสามารถ<br/>เลือกวิธีการทํานายที่เหมาะกับแต่ละ บุคคลเพื่อให้ได้ผลลัพธ์แม่นยําที่สุด</p>
                </div>
                <div class="column">
                    <img className="picture" src={Fortune} />
                </div>
        </div>
        </div>

        <div class="container py-5 text-center reveal">
        <div class="row"><h2 class="py-2">รีวิวจากลูกค้า</h2></div>
        <div class="row py-2">
            <div class="column-3 align-items-center">
                <img src={Mathew} alt="Mathew" className="roundImage"/><br/><br/>
                <h4>แมทธิว นักธุรกิจ</h4>
                <p>หมอหมึกช่วยผมเรื่องฤกษ์ยามใน การเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ําเทท่าเลยครับ</p>
            </div>
            <div class="column-3 align-items-center">
                <img src={jack} alt="Jack" className="roundImage"/><br/><br/>
                <h4>แจ็ค นักแสดง</h4>
                <p>ต้องขอบคุณหมอหมึกในการช่วยให้ความ สัมพันธ์ราบรื่นด้วยนะคะ ทํานายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ</p>
            </div>
            <div class="column-3 align-items-center">
                <img src={fahsai} alt="Fahsai" className="roundImage"/><br/><br/>
                <h4>น้ําใส นักศึกษา</h4>
                <p>ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา</p>
            </div>
        </div>
        </div>
        
        </>
    );


}

export default Infom;