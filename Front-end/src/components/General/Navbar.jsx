import { Form, Link, NavLink, useFetcher } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { cartActions } from "../../store/cart-slice";
import { userActions } from "../../store/user-slice";
import logo from "../../assets/Solar Ease.png";
const Navbar = () => {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const logoutData = fetcher.data;

  useEffect(() => {
    if (logoutData) {
      console.log(logoutData);
      dispatch(userActions.logout());
      logoutHandler();
    }
  }, [logoutData]);
  const toggleSideModal = () => {
    dispatch(uiActions.toggleSideModal());
  };
  const toggleSearchModal = () => {
    dispatch(uiActions.toggleSearchModal());
  };
  const [profileClicked, setProfileClicked] = useState(false);
  const logged_in = useSelector((state) => state.user.logged_in);
  console.log(logged_in);
  const firstName = useSelector((state) => state.user.first_name);
  const profilePic = useSelector((state) => state.user.profile_pic);
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
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const logoutHandler = () => {
    setProfileClicked(false);
    dispatch(userActions.logout());
  };

  const activeClass = "text-Primary-button";
  const inactiveClass =
    "hover:text-Primary-button transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110";
  return (
    navbarIsVisible && (
      <nav className=" sticky bg-white flex items-center top-0 left-0 w-full h-14 shadow-md z-30 animate-slideDown   ">
        <div className="w-full justify-between gap-2 flex items-center px-28 mx-lg:px-10 mx-sm:px-2 ">
          <div>
            <Link to="/" className="font-bold tracking-wide">
              <img src={logo} alt="Solar Ease" className="h-14 min-w-24" />
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
            <button
              onClick={openCart}
              className="w-12 h-9 flex justify-center items-center cursor-pointer gap-1 border-1 rounded-md shadow-sm shadow-black hover:bg-gray-200 group"
            >
              <RiShoppingCartLine className="text-black text-2xl shadow-lg group-hover:rotate-12" />
              <span className="text-xl">{totalQuantity}</span>
            </button>
            {!logged_in && (
              <Link to="/authentication?mode=signin">
                <div className="mr-2 min-w-14">Sign in</div>
              </Link>
            )}
            {!logged_in && (
              <Link to="/authentication?mode=signup">
                <div className="mr-2 min-w-14 ">Sign up</div>
              </Link>
            )}
            {logged_in && (
              <div className="flex flex-col cursor-pointer">
                <div
                  className="flex items-center gap-2 "
                  onClick={() => {
                    setProfileClicked((prev) => !prev); //toggle
                  }}
                >
                  <img
                    src={profilePic}
                    alt="profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <div>{firstName}</div>
                </div>
                {profileClicked && (
                  <div className=" absolute top-14 bg-white shadow-lg rounded-b-md flex flex-col">
                    <Link className="hover:bg-slate-200 w-full text-center p-3">
                      Profile
                    </Link>
                    <Link className="hover:bg-slate-200 w-full text-center p-3">
                      Settings
                    </Link>
                    <fetcher.Form method="post" action="/logout">
                      <button type="submit"  className="hover:bg-slate-200 hover:rounded-b-md w-full text-center p-3">
                        {fetcher.state === "submitting"
                          ? "Logging out..."
                          : "Logout"}
                      </button>
                    </fetcher.Form>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className=" hidden mx-lg:flex font-bold gap-2 justify-center items-center">
            <div
              className="rounded-full shadow-md h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-gray-200"
              onClick={toggleSearchModal}
            >
              <FaSearch className="text-black text-sm" />
            </div>
            <button
              onClick={openCart}
              className="w-12 h-9 flex justify-center items-center cursor-pointer gap-1 border-1 rounded-md shadow-sm shadow-black hover:bg-gray-200 group"
            >
              <RiShoppingCartLine className="text-black text-2xl shadow-lg group-hover:rotate-12" />
              <span className="text-xl">{totalQuantity}</span>
            </button>
            {!logged_in && (
              <Link to="/authentication?mode=signin">
                <div className="mr-2  ">Sign in</div>
              </Link>
            )}
            {!logged_in && (
              <Link to="/authentication?mode=signup">
                <div className="mr-2   ">Sign up</div>
              </Link>
            )}
            {logged_in && (
              <div className="flex flex-col cursor-pointer">
                <div
                  className="flex items-center gap-2 "
                  onClick={() => {
                    setProfileClicked((prev) => !prev); //toggle
                  }}
                >
                  <img
                    src={profilePic}
                    alt="profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <div>{firstName}</div>
                </div>
                {profileClicked && (
                  <div className=" absolute top-14 bg-white shadow-lg rounded-md flex flex-col">
                    <Link className="hover:bg-slate-200 w-full text-center p-3">
                      Profile
                    </Link>
                    <Link className="hover:bg-slate-200 w-full text-center p-3">
                      Settings
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="hover:bg-slate-200 w-full text-center p-3"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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
