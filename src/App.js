import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer"
import './App.css'
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Intro/> */}
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
