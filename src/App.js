import './App.css';
import Likes from './likes';
import store from './redux/store'


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Likes store={store}></Likes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
