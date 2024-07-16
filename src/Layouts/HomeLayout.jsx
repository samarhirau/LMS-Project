import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.user?.role);

  function changeWidth() {
    const drawerSide = document.querySelector(".drawer-side");
    if (drawerSide) {
      drawerSide.style.width = "auto";
    }
  }

  function hideDrawer() {
    const element = document.querySelector(".drawer-toggle");
    if (element) {
      element.checked = false;
      const drawerSide = document.querySelector(".drawer-side");
      drawerSide.style.width = "0";
    }
  }


  // function handleLogout() {
  //   e.preventDefault();

  //   // const res = await dispatch(logout());

  //   // if(res?.payload?.success){
  //       navigate('/');
  //       // }

  return (
    <>
      <div className="">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input className="drawer-toggle" id="my-drawer" type="checkbox" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
              <FiMenu
                onClick={changeWidth}
                size={"32px"}
                className="text-white font-bold m-4"
              />
            </label>
          </div>
          <div className="drawer-side w-0">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button>
                  <AiFillCloseCircle onClick={hideDrawer} size={"24px"} />
                </button>
              </li>
              <li>
                <a href="/">Home</a>
              </li>

              {isLoggedIn && role === "ADMIN" && (
                <li>
                  <a href="/admin/dashboard">Admin Dashboard</a>
                </li>
              )}
              <li>
                <a href="/courses">All Courses</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              {!isLoggedIn && (
                <li className="items-center w-[90%]">
                  <div className="w-full flex items-center justify-center">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="text-white bg-purple-700  hover:bg-purple-800 focus:ring-purple-300 font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                      <Link to="/signup">SignUp</Link>
                    </button>
                  </div>
                </li>
              )}
              {isLoggedIn && (
                <li className="items-center w-[90%]">
                  <div className="w-full flex items-center justify-center">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      <Link to="/user/profile">Profile</Link>
                    </button>
                    <button className="text-white bg-purple-700  hover:bg-purple-800 focus:ring-purple-300 font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                      <Link onClick={handleLogout}>logOut</Link>
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;
