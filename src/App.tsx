import { Link } from "react-router-dom";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className="flex flex-row justify-between px-4 py-2">
        <div className="flex flex-col justify-center">
          <h1 className="font-medium text-[3.1em]">
            I'm a <span className="font-bold">backend</span> developer
          </h1>
          <h2 className="text-xl font-medium mb-2">
            - Mostly developing in Go and Java.
          </h2>
          <div className="flex flex-row items-start gap-2">
            <Link to={"https://github.com/lagoela"}>
              <FaGithub size={32} />
            </Link>
            <Link to={"https://linkedin.com/in/enzolagoela"}>
              <FaLinkedin size={32} />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end">
          <img
            src="me.png"
            alt="Enzo's picture"
            className="w-[300px] h-[300px] rounded-sm"
          />
          <span>Enzo Lagoela, 📍 his strongest formœ</span>
        </div>
      </div>

      <div className="md:hidden flex flex-col flex-1 justify-center items-center">
        <img
          src="me.png"
          alt="Enzo's picture"
          className="w-[300px] h-[300px] rounded-sm"
        />
        <span>Enzo Lagoela, 📍 his strongest form</span>
      </div>

      <div className="flex min-h-full md:flex-1/2 md:items-end md:justify-end p-8 justify-center">
        <Link to="/projects">
          <div className="-space-y-6 flex flex-col items-center">
            <h2 className="roboto font-light text-[2.5em]">This is</h2>
            <h1 className="text-[6em] text-black font-black">ENZO!</h1>
          </div>
          <h2 className="text-2xl">Click me to know my work!</h2>
        </Link>
      </div>
    </div>
  );
}

export default App;
