import './App.css';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
// import Textarea from './component/Textarea';
function App() {
  return (
      <>
        <Navbar title="TextUlite" aboutText="About Us"  homeText="Home" contactText="Contact US"/>
        <div className="conatiner-fluid my-3 mx-4">
        {/* <Textarea heading="Enter the Text to analyze below"/> */}
        
        
        <AboutUs/>
        </div>

       </>
  );
}



export default App;
