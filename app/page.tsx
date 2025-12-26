// import Navbar from "./components/navbar";
// import ThreeScene from "./components/threeScene"
import AboutMe from "./components/aboutme";
import Ecube from "./components/carousel/Ecube";
import Projects from "./components/projects";
// import ProjectsPage from "./components/projectspage";
// import ProjectsSwipe from "./components/projectswiper";
// import Cube from "./components/carousel/cube";
// import Education from "./components/education";




export default function Home() {
  return (
      <div className="bg-bg bg-dot-pattern">
    {/* <div className="bg-bg bg-grid-pattern bg-[20px] z -10"> */}
      {/* <Navbar/> */}
      <div className="pt-20">
        {/* <div className="bg-bg bg-grid-pattern bg-[20px]"> */}
        <div className='relative bg-bg bg-dot-pattern'>
          <p className="flex justify-center">This page is still under construction (づ_ど)</p>
          <p className="flex justify-center">Cube motion is still a little wonky and coursework is not populated</p>
          {/* <div className="bg-bg"> */}

          <AboutMe />
          <Projects/>

          {/* <Cube/> */}
          {/* <Education/> */}

          <div className="container mx-auto py-6 px-4">
            <div className="flex flex-col gap-16">
              



              <div>
                Experitmental cube
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


{/* <div 
        id="three-container" 
        style={{ width: '800px', height: '600px' }} // Fixed the style object syntax
      >
        <ThreeScene />
      </div> */}