import './index.css';

const mar={
    marginBottom : "50px"
}

function Nav() {
    return (
    <>
        <div class="nav-bar" style={mar}>
              <nav>
                  <ul class="nav nav-pills justify-content-end py-3">
                      <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/home">เกี่ยวกับหมอหมึก</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="/blog">บทความ</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="/queue">จองคิว</a>
                      </li>
                  </ul>
              </nav>
            
            </div>
    </>
    )
}
export default Nav;