import "./App.css";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className="flex flex-row justify-between px-4 py-2">
        <div className="flex flex-col justify-center">
          <h1 className="font-medium text-[3.1em]">
            I'm a <span className="font-bold">backend</span> developer
          </h1>
          <h2 className="text-xl font-medium">
            - Mostly developing in Go and Java
          </h2>
        </div>

        <div className="flex flex-col items-end">
          <img
            src="me.png"
            alt="Enzo's picture"
            className="w-[300px] h-[300px] rounded-sm"
          />
          <span>Enzo in his prime!</span>
        </div>
      </div>
      <div className="flex min-h-full flex-1/2 items-end justify-end p-8">
        <a href="/projects">
          <div className="-space-y-6 flex flex-col items-center">
            <h2 className="roboto font-light text-[2.5em]">This is</h2>
            <h1 className="text-[6em] text-black font-black">ENZO!</h1>
          </div>
          <h2 className="text-2xl">Click me to know my work!</h2>
        </a>
      </div>
    </div>
  );
}

export default App;
