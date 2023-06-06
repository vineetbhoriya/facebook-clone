import { useState } from "react";
import fbLogo from "./assets/dF5SId3UHWd.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="left w-1/2 mx-14 my-10">
          <div>
            <img className="w-80"
              src={fbLogo}
              alt="fb-logo"
            />
          </div>
          <p className="text-left mx-9 text-2xl">
            Facebook helps you connect and share<span> with the people in your life.</span></p>
        </div>
        <div className="right relative rounded-xl flex flex-col bg-white p-3 w-1/3 drop-shadow-lg ">
          <input type="text"  className=" p-1 rounded-md px-3 border outline-blue-600 text-lg h-12 mx-3 my-2" placeholder="Email address or phone number"/>
          <input type="password" className=" p-1 rounded-md px-3 border outline-blue-600 text-lg h-12 mx-3 my-2" placeholder="Password" />
          <input className="bg-blue-700 hover:bg-blue-800 p-3  rounded-md px-3 mx-3 my-2 text-white font-bold" type="button" name="login" placeholder="Log In"value="Log in" />
          <span className="my-2"> <a href="#" className="cursor-pointer hover:underline">Forgotten password?</a></span>
          <hr className="mx-4 my-3" />
          <input className="bg-green-600 hover:bg-green-600 p-3 my-3 rounded-md px-5 w-fit mx-auto text-center text-white font-bold" type="button" value="Create new account" />
          <span className="absolute -bottom-10"> <span className="font-bold hover:cursor-pointer hover:underline text-sm"> Create a Page</span> for a celebrity, brand or business.</span>
        </div>
      </div>
    </>
  );
}

export default App;
