import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleSideModal = () => {
    dispatch(uiActions.toggleSideModal());
  };
  const toggleSearchModal = () => {
    dispatch(uiActions.toggleSearchModal());
  };
  return (
    <nav className="bg-white flex items-center top-0 left-0 w-full h-14 shadow-md z-10 ">
      <div className="w-full flex justify-between items-center pl-3">
        <div>
          <Link to="/" className="font-bold tracking-wide">
            Logo
          </Link>
        </div>
        <div className="text-black   mx-lg:hidden  items-center space-x-6">
          <Link
            to="/"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Services
          </Link>
          <Link
            to="/become-a-partner"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Partnership
          </Link>
          <Link
            to="/solar-calculator"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Solar Calculator
          </Link>
          <Link
            to="/blog"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
          >
            About
          </Link>
        </div>
        <div className="font-bold gap-5 mx-lg:hidden flex items-center">
          <div
            className="rounded-full shadow-md h-9 w-9 flex justify-center items-center cursor-pointer hover:bg-gray-200"
            onClick={toggleSearchModal}
          >
            <FaSearch className="text-black" />
          </div>
          <Link to="/login">
            <button className="mr-2">Login</button>
          </Link>
          <Link to="/signup">
            <button className="mr-2">Sign Up</button>
          </Link>
        </div>
        <div className=" hidden mx-lg:flex font-bold px-4 gap-5 justify-center items-center">
          <div
            className="rounded-full shadow-md h-9 w-9 flex justify-center items-center cursor-pointer hover:bg-gray-200"
            onClick={toggleSearchModal}
          >
            <FaSearch className="text-black" />
          </div>
          <Link to="/login">
            <button className="mr-2">Login</button>
          </Link>
          <Link to="/signup">
            <button className="mr-2">Sign Up</button>
          </Link>

          <IoMenu className="text-2xl" onClick={toggleSideModal} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
