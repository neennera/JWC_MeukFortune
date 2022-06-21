import './style.css';
import Fortune from '../source/fortune.jpg'
import fahsai from '../source/fahsai.webp'
import jack from '../source/jack.webp'
import Mathew from '../source/Mathew.webp'

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
            <label class="form-label">วันที่</label>
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