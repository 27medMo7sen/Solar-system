import { useEffect } from "react";
import { sliderData } from "../../Data";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const slideIndex = useSelector((state) => state.ui.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(uiActions.nextSlide(slideIndex + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slideIndex, dispatch]);

  return (
    <div className="pb-4 relative">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-1000 ease-out scale-100"
                  : "opacity-0 duration-1000 ease-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img
                    src={item.cover}
                    alt="images"
                    className="h-[100vh] w-full"
                  />
                )}
              </div>
              <div className="absolute top-44 left-28 mx-auto text-left p-3 m-2 mx-md:left-0">
                <div
                  style={{
                    borderTop: "2px solid #ff9472",
                    borderRight: "2px solid #ff9472",
                  }}
                  className="bg-white/70 p-3 mb-5"
                >
                  <h2 className="font-bold mb-3 text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {parseInt(item.id) === slideIndex && item.text}
                  </h2>
                  <p className="text-gray-700 text-sm font-inter font-medium tracking-normal leading-none mb-3">
                    {parseInt(item.id) === slideIndex && item.description}
                  </p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded">
                  {parseInt(item.id) === slideIndex && item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex absolute bottom-12 left-[45%]">
          {sliderData.map((dot, index) => {
            return (
              <div className="mr-4" key={dot.id}>
                <div
                  className={
                    index === slideIndex
                      ? "bg-green-300 rounded-full p-2 cursor-pointer"
                      : "bg-white rounded-full p-2 cursor-pointer"
                  }
                  onClick={() => dispatch(uiActions.dotSlide(index))}
                ></div>
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
            onClick={() => dispatch(uiActions.nextSlide(slideIndex + 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
            onClick={() => dispatch(uiActions.prevSlide(slideIndex - 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
