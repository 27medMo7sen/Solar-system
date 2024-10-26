
export const ProductDetails = () => {
  return (
    <div className="px-4 border max-w-sections">
      <h2 className="text-xl font-semibold mb-4 py-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere illo
        dolor eos voluptatum dicta corporis necessitatibus facilis dolorum
        repudiandae cum, sunt ipsum nesciunt vitae adipisci accusamus molestiae
        libero fuga consequuntur! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Nisi, ipsam laborum. Placeat a possimus cumque alias
        consectetur eos fuga veniam necessitatibus cupiditate, odit deserunt
        earum dolorum cum nisi laboriosam debitis. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Dolore, expedita illum numquam ipsum non
        perspiciatis aliquid? Laborum, quae mollitia quia sint non tenetur
        placeat perferendis, rem, dignissimos ea nostrum nulla. Soluta, cum
        tempore? Numquam nemo recusandae tempora deserunt.
      </h2>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-Secondary-button/10">
            Key Specifications
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Fermentum bibendum at volutpat purus viverra semper. Lorem ipsum
              dolor sit amet consectetur.
            </li>
            <li>Weight: 22.5 kg</li>
            <li>Efficiency: 21.4% Efficiency</li>
            <li>Warranty: 25-year performance warranty</li>
            <li>Energy Output: 400W Output</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 bg-Secondary-button/10">
            Key Features
          </h3>
          <ul className="list-disc pl-5">
            <li>High Efficiency: Monocrystalline cells...</li>
            <li>Durability: Built with tempered glass...</li>
            <li>Weather Resistance: Designed to withstand...</li>
            <li>Warranty: 25-year performance warranty</li>
            <li>Energy Output: 400W Output</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
