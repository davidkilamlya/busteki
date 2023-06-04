// import { Slider } from "./Components/NavBar/Slider";
import { NavBar } from "./Components/NavBar/NavBar";
import Slider from "./Components/NavBar/Slider";
import Header from "./Container/Header/Header";
import { images } from "./Constants";
const imgs = [images.banner1, images.banner2, images.banner3];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider slides={imgs} />
      <Header />
    </div>
  );
}

export default App;
