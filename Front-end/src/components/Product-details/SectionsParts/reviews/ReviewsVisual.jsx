import ProgressBar from "@ramonak/react-progress-bar";

export const ReviewVisual = ({ reviewNumber }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-1 justify-center items-center">
        <span>5</span>
        <span className="text-Primary-button">★</span>
        <div className="flex w-full">
          <ProgressBar
            width="250px"
            completed={(reviewNumber[5] / reviewNumber.total) * 100}
            bgColor="#F98106"
            baseBgColor="#E0E0E0"
            height="7px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span>4</span>
        <span className="text-Primary-button">★</span>
        <div className="flex w-full">
          <ProgressBar
            width="250px"
            completed={(reviewNumber[4] / reviewNumber.total) * 100}
            bgColor="#F98106"
            baseBgColor="#E0E0E0"
            height="7px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span>3</span>
        <span className="text-Primary-button">★</span>
        <div className="flex w-full">
          <ProgressBar
            width="250px"
            completed={(reviewNumber[3] / reviewNumber.total) * 100}
            bgColor="#F98106"
            baseBgColor="#E0E0E0"
            height="7px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span>2</span>
        <span className="text-Primary-button">★</span>
        <div className="flex w-full">
          <ProgressBar
            width="250px"
            completed={(reviewNumber[2] / reviewNumber.total) * 100}
            bgColor="#F98106"
            baseBgColor="#E0E0E0"
            height="7px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span>1</span>
        <span className="text-Primary-button">★</span>
        <div className="flex w-full">
          <ProgressBar
            width="250px"
            completed={(reviewNumber[1] / reviewNumber.total) * 100}
            bgColor="#F98106"
            baseBgColor="#E0E0E0"
            height="7px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
      </div>
    </div>
  );
};
