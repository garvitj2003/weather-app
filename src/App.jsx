import "./App.css";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex justify-center">
      <div className="h-screen md:w-4/5">
        <div
          className=" w-full h-12 md:h-20 p-2 my-1 md:my-4 inline-flex items-center "
          id="navbar"
        >
          <svg
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 md:w-[67px] md:h-[67px]"
          >
            <g clip-path="url(#clip0_5_29)">
              <rect width="67" height="67" fill="white" />
              <path
                d="M33.5 2.79166V8.375M33.5 58.625V64.2083M11.7808 11.7808L15.745 15.745M51.255 51.255L55.2192 55.2192M2.79166 33.5H8.375M58.625 33.5H64.2083M11.7808 55.2192L15.745 51.255M51.255 15.745L55.2192 11.7808M47.4583 33.5C47.4583 41.209 41.209 47.4583 33.5 47.4583C25.791 47.4583 19.5417 41.209 19.5417 33.5C19.5417 25.791 25.791 19.5417 33.5 19.5417C41.209 19.5417 47.4583 25.791 47.4583 33.5Z"
                stroke="#e2ff68"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <span className="font-Roboto text-5xl text-center font-semibold mx-2 text-[#171717] tracking-tighter ">
            Weather
          </span>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
