import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find the best courses for your career
            <span className="text-yellow-500 font-bold">
              Online courses available
            </span>
          </h1>
          <p className="text-xl text-gray-200">
            Learn from the best instructors around the world. Get the best
            courses at the best prices.
          </p>
          <div className="space-x-6">
            <Link to='/courses'>
            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-">Explore Courses</button>
            </Link>
            
            <Link to='/contact'>
            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Contact Us</button>
            </Link>
          </div>
        </div>



        <div className="w-1/2 flex items-center justify-center">
        <img src="" alt="HomePage IMG" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
