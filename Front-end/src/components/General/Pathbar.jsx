import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fragment } from "react";
export const Pathbar = ({ path }) => {
  return (
    <div className="flex gap-2 px-20 mx-lg:px-10 range-xs:px-2 mt-32 mb-3 text-md text-gray-500">
      <Link to="/" className="hover:text-gray-800">
        Home
      </Link>
      <span className="flex justify-center items-center">
        <MdOutlineKeyboardArrowRight />
      </span>
      {path.map((item, index) => (
        <Fragment key={index}>
          <Link
            to={item.link}
            className={` ${
              index === path.length - 1
                ? "text-black font-bold"
                : "hover:text-gray-800"
            }`}
          >
            {item.name}
          </Link>
          {index < path.length - 1 && (
            <span className="flex justify-center items-center">
              <MdOutlineKeyboardArrowRight />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
