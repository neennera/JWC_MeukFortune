import './style.css';
import Fortune from '../source/fortune.jpg'
import fahsai from '../source/fahsai.webp'
import jack from '../source/jack.webp'
import Mathew from '../source/Mathew.webp'

function Infom(){
    return(
        <>

        <div class="container py-5 text-center">
        <div class="row"><h2 class="py-2">อ่านบทความของหมอหมึก</h2></div>
        <div class="row py-2">
            <div class="column-3 align-items-center py-3">
                <div classs="row SetHeight align-items-center">
                    <img src={Mathew} alt="Mathew" className="roundImage"/><br/><br/>
                    <h4>แมทธิว นักธุรกิจ</h4>
                    <p>หมอหมึกช่วยผมเรื่องฤกษ์ยามใน การเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ําเทท่าเลยครับ</p>
                </div>
                <div class="row">
                <center>
                        <br/><button class="btn btn-light button">
                        <span>
                            อ่านต่อ
                        </span>
                        </button>
                    </center>
                </div>
            </div>
            <div class="column-3 align-items-center py-3">
                <div classs="row SetHeight align-items-center">
                <img src={jack} alt="Jack" className="roundImage"/><br/><br/>
                <h4>แจ็ค นักแสดง</h4>
                <p>ต้องขอบคุณหมอหมึกในการช่วยให้ความ สัมพันธ์ราบรื่นด้วยนะคะ ทํานายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ</p>
                </div>
                <div class="row">
                <center>
                        <br/><button class="btn btn-light button">
                        <span>
                            อ่านต่อ
                        </span>
                        </button>
                    </center>
                </div>
            </div>
            <div class="column-3 align-items-center py-3">
            <div classs="row align-items-center SetHeight">
                <img src={fahsai} alt="Fahsai" className="roundImage"/><br/><br/>
                <h4>น้ําใส นักศึกษา</h4>
                <p>ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา</p>
                </div>
                <div class="row">
                <center>
                        <br/><button class="btn btn-light button">
                        <span>
                            อ่านต่อ
                        </span>
                        </button>
                    </center>
                </div>
            </div>
        </div>
        </div>
        
        
        </>
    );


}

export default Infom;