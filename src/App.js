import React from 'react';
import './index.css';
import Infom from './Infom';

function App() {
  return (
    <div>
      

        <div class="nav-bar">
          <nav>
              <ul class="nav nav-pills justify-content-end py-3">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">เกี่ยวกับหมอหมึก</a>
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
        
        <>
        <Infom/>
        </>
    </div>

    
  );
} 

export default App;
