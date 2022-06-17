import logo from './logo.svg';
import './App.css';

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

function App() {
  return (
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
  );
} 

export default App;
