import './style.css';

function Infom(){
    return(
        <>
        <div class="container py-5">
        <form>
        <div class="mb-3">
            <label class="form-label">วันที่</label>
            <input type="date" class="form-control" id="date"/>
        </div>
        <div class="mb-3">
            <label class="form-label">เวลา</label>
            <input type="time" class="form-control" id="time"/>
        </div>
        <div class="mb-3">
            <label class="form-label">ชื่อ</label>
            <input type="text" class="form-control" id="name"/>
        </div>
        <center>
            <br/><button type="submit" class="btn btn-primary button">Submit</button>
        </center>
        </form>
        </div>
        </>
    );


}

export default Infom;