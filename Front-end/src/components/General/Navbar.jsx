import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { cartActions } from "../../store/cart-slice";
import logo from "../../assets/Solar Ease.png"
const Navbar = () => {
  const dispatch = useDispatch();
  const toggleSideModal = () => {
    dispatch(uiActions.toggleSideModal());
  };
  const toggleSearchModal = () => {
    dispatch(uiActions.toggleSearchModal());
  };
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarIsVisible = useSelector((state) => state.ui.navbarIsVisible);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > 40) {
      if (currentScrollY < lastScrollY) {
        dispatch(uiActions.setNavbar(true));
      } else if (currentScrollY > lastScrollY) {
        dispatch(uiActions.setNavbar(false));
      }
      setLastScrollY(currentScrollY);
    }
  };
  const openCart = () => {
    dispatch(cartActions.toggleCart());
  }
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const activeClass = "text-Primary-button";
  const inactiveClass =
    "hover:text-Primary-button transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110";
  return (
    navbarIsVisible && (
      <nav className=" sticky bg-white flex items-center top-0 left-0 w-full h-14 shadow-md z-30 animate-slideDown   ">
        <div className="w-full justify-between gap-2 flex items-center px-28 mx-lg:px-10 mx-sm:px-2 ">
          <div>
            <Link to="/" className="font-bold tracking-wide">
              <img src={logo} alt="Solar Ease" className="h-14" />
            </Link>
          </div>
          <div className="text-black  md:flex  mx-lg:hidden   items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/partnership"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Partnership
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/solar-calculator"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Solar Calculator
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              About
            </NavLink>
          </div>
          <div className="font-bold gap-5 mx-lg:hidden flex items-center">
            <div
              className="rounded-full shadow-md h-9 w-9 flex justify-center items-center cursor-pointer hover:bg-gray-200"
              onClick={toggleSearchModal}
            >
              <FaSearch className="text-black" />
            </div>
            <button onClick={openCart} className = "w-12 h-9 flex justify-center items-center cursor-pointer gap-1 border-1 rounded-md shadow-sm shadow-black hover:bg-gray-200 group">
              <RiShoppingCartLine className="text-black text-2xl shadow-lg group-hover:rotate-12" />
              <span className="text-xl">{totalQuantity}</span>
            </button>
            <Link to="/authentication?mode=signin">
              <button className="mr-2">Sign in</button>
            </Link>
            <Link to="/authentication?mode=signup">
              <button className="mr-2">Sign up</button>
            </Link>
          </div>
          <div className=" hidden mx-lg:flex font-bold gap-2 justify-center items-center">
            <div
              className="rounded-full shadow-md h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-gray-200"
              onClick={toggleSearchModal}
            >
              <FaSearch className="text-black text-sm" />
            </div>
            <button onClick={openCart} className = "w-12 h-9 flex justify-center items-center cursor-pointer gap-1 border-1 rounded-md shadow-sm shadow-black hover:bg-gray-200 group">
              <RiShoppingCartLine className="text-black text-2xl shadow-lg group-hover:rotate-12"/>
              <span className="text-xl">{totalQuantity}</span>
            </button>
            <Link to="/authentication?mode=signin">
              <button className="mr-2">Sign in</button>
            </Link>
            <Link to="/authentication?mode=signup">
              <button className="mr-2">Sign up</button>
            </Link>
            <IoMenu
              className="text-2xl cursor-pointer"
              onClick={toggleSideModal}
            />
          </div>
        </div>
      </nav>
    )
  );
};

export default Navbar;
