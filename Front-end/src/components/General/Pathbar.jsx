import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export const Pathbar = ({ path }) => {
  console.log("here");
  
  return (
    <div className="flex gap-2 px-28 mx-lg:px-10 mx-sm:px-2 mt-3 mb-3 text-md text-gray-500">
      {path.map((item, index) => (
        <Fragment key={index}>
          <Link
          onClick={() => {
            dispatch(uiActions.removeFromPathbar(index));
          }
        }
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
