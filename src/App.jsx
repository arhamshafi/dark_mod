import React, { useState, useRef } from 'react';
import abuse from "./punjabi-gal.mp3"
function App() {
  const [darkmod, setDarkmod] = useState(true);
  let mp4 = useRef()
  let [play, setplay] = useState(false)
  // console.log(play);

  function playing() {

    if (mp4.current) {

      if (!play) {
        mp4.current.pause()
      }
      else {
        mp4.current.play()
      }
    }
  }
  playing()

  const toggle = (e) => {
    // e.target.checked is true when switch is ON (light mode), so darkmod = !checked
    setDarkmod(!e.target.checked);
  };

  return (
    <div className={`w-full h-screen relative overflow-hidden ${darkmod ? 'bg-black' : 'bg-white'}`}>
      {['1', '2', '3', '4'].map((n) => (
        <div key={n} className={`box-of-star${n}`}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`star star-position${i + 1}`}></div>
          ))}
        </div>
      ))}

      <div data-js="astro" className="astronaut">
        <div className="head"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="body">
          <div className="panel"></div>
        </div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
        <div className="schoolbag"></div>
      </div>

      <div className="w-full h-screen absolute top-0 left-0 z-20 flex flex-col">
        <h1 className={`r context text-3xl text-center mt-12 ${darkmod ? 'text-white tshw' : 'text-black tshb'}`}>Dark / Light Mode</h1>
        <h2 className={`mt-4 text-center tracking-[3px] context ${darkmod ? 'text-white tshw' : 'text-black tshb'}`}>{darkmod ? 'DARK_MOD TESTING' : 'LIGHT_MOD TESTING'}</h2>

        <div className="w-[80%] sm:w-[40%] h-[50px] rounded-lg mx-auto mt-auto mb-10 left-[30%] bg-gradient-to-r from-sky-300 to-blue-800 shadow-lg flex justify-between items-center px-4">
          {/* //////////////////// */}
          <div onClick={() => setplay(!play)} className="ml-[-20px] relative p-[3px] rounded-[0.9em] transition-all duration-400 before:content-[''] before:absolute before:inset-0 before:rounded-[0.9em] before:-z-10 before:transition-[filter] before:duration-400 hover:before:blur-[1.2em] hover:before:bg-gradient-to-r hover:before:from-sky-500 hover:before:to-pink-500 active:before:blur-[0.2em] before:bg-gradient-to-r before:from-sky-500 before:to-pink-500 scale-[.60]">
            <button className="text-[1.4em] px-[0.8em] py-[0.6em] rounded-[0.5em] border-none bg-black text-white cursor-pointer shadow-[2px_2px_3px_#000000b4]">
              Info...
            </button>
          </div>
          <audio src={abuse} ref={mp4} onEnded={() => setplay(false)}></audio>
          {/* //////////////////////////// */}
          {/* <h1 className='text-white font-bold context text-1xl'>CLICK HERE</h1> */}
          <label className="switch">
            <input
              id="checkbox"
              type="checkbox"
              onChange={toggle}
            />
            <span className="slider">
              <div className="star star_1"></div>
              <div className="star star_2"></div>
              <div className="star star_3"></div>
              <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                <path
                  transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                  fill="#fff"
                  d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                ></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
