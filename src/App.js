import "./App.css";
import imageInSrc from "./image/Image2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header/Header";
function App() {
  return (
    <div>
      <Header/>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">Your name here</h1>

        <img src={imageInSrc} alt="my img"style={{width:"100PX"}} />
        <img src="/image/Imagee.jpg" alt="my"style={{width:"100PX"}} />
      </div>
      <div>
        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
