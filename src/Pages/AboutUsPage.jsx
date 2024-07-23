import HomeLayout from "../Layouts/HomeLayout";
import aboutMainIMG from "../assets/images/aboutMainIMG.png"; 
import apj from "../assets/images/apj.jpg";
import billGates from "../assets/images/billGates.jpeg";
import einstein from "../assets/images/einstein.jpeg";
import nelson from "../assets/images/nelson.jpeg";
import steveJobs from "../assets/images/steveJobs.jpeg";


function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              We provide the best courses at the best prices. Learn from the
              best instructors around the world.
            </p>
          </section>
          <div className="w-1/2">
            <img 
                className="drop-shadow-2xl"
                id="text-1"
                style={{
                filter: "drop-shadow(0 10px 10px rgb(0, 0, 0 ))"
            }}
            src={aboutMainIMG} alt="aboutMainIMG" />
          </div>

        </div>
        <div className="flex items-center gap-5 mx-10">
        <div className="carousel w-1/2 m-auto my-16">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={apj}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">
        "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."
      </p>
      <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={billGates}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">
        "It's fine to celebrate success but it is more important to heed the lessons of failure."
      </p>
      <h3 className="text-2xl font-semibold">Bill Gates</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={einstein}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">
        "Life is like riding a bicycle. To keep your balance, you must keep moving."
      </p>
      <h3 className="text-2xl font-semibold">Albert Einstein</h3>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={nelson}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">
        "It always seems impossible until it's done."
      </p>
      <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={steveJobs}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
      </p>
      <h3 className="text-2xl font-semibold">Steve Jobs</h3>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
</div>
        </div>
    
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
