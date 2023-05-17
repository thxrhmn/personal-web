import Dumbflix from "../assets/images/dumbflix.png"
import Holyways from "../assets/images/holyways.png"

function Portofolio() {
  return (
    <div className="w-full mb-5">
      <h1 className="text-xl font-semibold mb-3">Portofolio</h1>
      <div className="flex flex-col md:flex-row gap-2 mb-3">
        <div className="border border-white border-solid rounded-md md:w-[50%] overflow-hidden mb-3">
          <img src={Dumbflix} alt="" className="grayscale hover:grayscale-0"/>
          <div className="px-2 pb-2">
            <h1>Dumbflix</h1>
            <div className="nf nf-dev-github_badge text-xl"></div>
          </div>
        </div>
        <div className="border border-white border-solid rounded-md md:w-[50%] overflow-hidden">
          <img src={Holyways} alt="" className="grayscale hover:grayscale-0"/>
          <div className="px-2 pb-2">
            <h1>Holyways</h1>
            <div className="nf nf-dev-github_badge text-xl"></div>
          </div>
        </div>
      </div>
      <div className="text-center border border-white border-solid rounded-md">
        <h1>More Project on Github</h1>
      </div>
    </div>
  );
}

export default Portofolio;
