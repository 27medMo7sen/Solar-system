import StepCircle from "./StepCircle";

const Verification = () => {
  return (
    <div className="bg-zinc-100 py-10">
      <div className=" mx-auto items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Verification Process
        </h2>
        <div className="w-full bg-Secondary-button h-8 flex items-center justify-center">
          <h6 className="text-white font-medium text-sm">
            Verification typically takes 3-5 business days.
          </h6>
        </div>
        <div className="grid grid-cols-3 mx-md:grid-cols-2 mx-sm:grid-cols-1 px-4 pt-14">
          <StepCircle
            stepNumber="01"
            color={{ outer: "#ff7043", inner: "#ffc107" }}
            text="Aplication Review"
            description="Our team reviews your application to ensure all information is accurate."
          />
          <StepCircle
            stepNumber="02"
            color={{ outer: "#ffc107", inner: "#ff7043" }}
            text="Buisness Verification"
            description="We verify your buisness by checking provided documentation or links."
          />
          <StepCircle
            stepNumber="03"
            color={{ outer: "#03a9f4", inner: "#66CCFF" }}
            text="Approval and Onboarding"
            description="Once approved, you 'll recieve an email to set up your profile and start listing products/services"
          />
        </div>
        <div className="py-8 flex items-center justify-center space-x-5">
          <button className="underline font-medium">Need Help?</button>
          <button className="px-4 py-2 rounded-md bg-Secondary-button hover:bg-Secondary-button-hover text-white">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
