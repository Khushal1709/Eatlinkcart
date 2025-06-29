import { useEffect } from "react";
import bg from "../image/Rocket Power.jpg"; // Replace with your image path

const Home = () => {


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl font-bold text-white bg-gray-800/70 p-4 rounded-lg shadow-lg">
        The website is being developed!
      </h1>
    </div>
  );
};

export default Home;