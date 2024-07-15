import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Footer from '../component/Footer';

function HomeLayout({ children }) {

    function changeWidth() {
        const drawerSide = document.querySelector('.drawer-side');
        if (drawerSide) {
            drawerSide.style.width = 'auto';
        }
    }
    
    function hideDrawer() {
        const element = document.querySelector('.drawer-toggle');
        if (element) {
            element.checked = false;
            const drawerSide = document.querySelector('.drawer-side');
            drawerSide.style.width = '0';
        }
       
    }
    
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
                                    <AiFillCloseCircle
                                        onClick={hideDrawer}
                                        size={"24px"}
                                    />
                                </button>
                            </li>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/courses">All Courses</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
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
