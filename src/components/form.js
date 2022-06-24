import './style.css';

function Infom(){
    return(
        <>

        <script>
        </script>

        <div class="container py-5">
        <form>
        <div class="mb-3">
            <label class="form-label">ชื่อ</label>
            <input type="text" class="form-control" id="name" required/>
        </div>
        <div class="mb-3">
            <label class="form-label">วันที่ต้องการจอง</label>
            <input type="date" class="form-control" id="date" required/>
        </div>
        <div class="mb-3">
            <label class="form-label">เวลาที่ต้องการจอง</label>
            <input type="time" class="form-control" id="time" required/>
        </div>
        <div class="mb-3">
            <label class="form-label">Email ที่ติดต่อได้</label>
            <input type="email" class="form-control" id="email" required/>
        </div>
        <center>
            <br/><button type="submit" class="btn btn-primary button">Submit</button>
            <br/><br/><p>ขอบคุณสำหรับการจองของคุณ เราจะติดต่อกลับไปทางอีเมลเพื่อยืนยันการลงทะเบียน</p>
        </center>
        </form>
        </div>
        </>
    );


}

export default Infom;