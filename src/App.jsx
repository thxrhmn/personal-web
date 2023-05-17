import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portofolio from "./components/Portofolio";
import ProgrammingStack from "./components/ProgrammingStack";

function App() {
  return (
    <div className="" style={{backgroundColor: "#303030"}}>
      <div className="p-4 mx-auto md:w-[1000px] text-white" style={{backgroundColor: "#303030"}}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Header />
            <Contact />
            <Education />
            <ProgrammingStack />
          </div>
          <div className="flex flex-col md:w-1/2">
            <Portofolio />
            <Experience />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
