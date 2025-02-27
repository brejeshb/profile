// import Navbar from "./components/navbar";
// import ThreeScene from "./components/threeScene"
import AboutMe from "./components/aboutme";
// import Projects from "./components/projects";
// import ProjectsPage from "./components/projectspage";
// import ProjectsSwipe from "./components/projectswiper";
import Cube from "./components/carousel/cube";
import Education from "./components/education";


export default function Home() {
  return (
    // <div className="pt-20"> {/* Add padding to account for the fixed navbar */}
    <div className="bg-bg bg-grid-pattern bg-[20px]">
      {/* <div className="bg-bg"> */}
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="text-center mt-4">This is the home page.</p>
      <AboutMe/>
      {/* <Projects/> */}

      {/* <ProjectsPage/> */}

      <Cube/>
      <Education/>


    </div>

  );
}


      {/* <div 
        id="three-container" 
        style={{ width: '800px', height: '600px' }} // Fixed the style object syntax
      >
        <ThreeScene />
      </div> */}