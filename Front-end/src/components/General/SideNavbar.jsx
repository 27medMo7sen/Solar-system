import { NavLink } from "react-router-dom";
export const SideNavbar = () => {
  const activeClass = "h-10 w-full flex items-center border-b-2 text-Primary-button";
  const inactiveClass =
    "h-10 w-full flex items-center border-b-2 hover:text-Primary-buttonc transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110";
  return (
    <div className="text-black pl-5 flex flex-col justify-center items-center ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Products
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Services
      </NavLink>
      <NavLink
        to="/partnership"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Partnership
      </NavLink>
      <NavLink
        to="/solar-calculator"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Solar Calculator
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        About
      </NavLink>
    </div>
  );
};
