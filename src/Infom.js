import './style.css';

function Infom(){
    return(
    <>
    <div class="container py-7 text-center reveal" style="margin-bottom: 100px;">
        <div class="row">
            <div class="column" style="padding: 70px;">
                <h2 class="py-2">ประวัติหมอหมึก</h2>
                <p class="py-2">หมอหมึกเป็นนักพยากรณ์ที่ชํานาญด้านการทํานายดวง<br>ด้วยลูกแก้วพยากรณ์ไพ่ทาโรและการดูลายมือ</p>
                <p class="py-2">ด้วยความสามารถที่หลากหลาย ทําให้หมอหมึกสามารถ<br>เลือกวิธีการทํานายที่เหมาะกับแต่ละ บุคคลเพื่อให้ได้ผลลัพธ์แม่นยําที่สุด</p>
            </div>

            <div class="column">
                <img height=350px src="/source/TK.jpg">
            </div>
        </div>
    </div>
    </>

    );
}

export default Infom;