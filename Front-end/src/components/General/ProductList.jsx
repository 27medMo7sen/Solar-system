export const ProductList = ({ children , image, name }) => {
  return (
    <div className="bg-gray-50 rounded-md">
      {image && name && (
        <div className="flex items-center cursor-pointer border-b-2 gap-3 pl-3 pt-3 mb-2">
        <img src={image} alt={name} className="w-10  object-cover" />
        <span className="font-bold text-xl underline ">{name}</span>
        </div>
      )}
      <div className="flex gap-5 mx-sm:max-w-full px-1 overflow-x-auto pb-5 mx-sm:snap-mandatory  mx-sm:snap-x ">
        {children}
      </div>
    </div>
  );
};
