export const ProductList = ({ children }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex gap-5 mx-sm:max-w-full px-1 overflow-x-auto pb-5 mx-sm:snap-mandatory  mx-sm:snap-x ">
        {children}
      </div>
    </div>
  );
};
