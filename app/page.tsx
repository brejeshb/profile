import Navbar from "./components/navbar";
import ThreeScene from "./components/threeScene"
import AboutMe from "./components/aboutme";


export default function Home() {
  return (
    // <div className="pt-20"> {/* Add padding to account for the fixed navbar */}
    <div className="bg-bg bg-grid-pattern bg-grid-pattern bg-[20px]">
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="text-center mt-4">This is the home page.</p>
      <AboutMe/>


    </div>

  );
}


      {/* <div 
        id="three-container" 
        style={{ width: '800px', height: '600px' }} // Fixed the style object syntax
      >
        <ThreeScene />
      </div> */}