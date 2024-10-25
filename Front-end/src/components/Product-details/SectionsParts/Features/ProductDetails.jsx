export const ProductDetails = () => {
  return (
    <div className="px-4 border">
      <h2 className="text-xl font-semibold mb-4 py-4">
        Lorem ipsum dolor sit amet consectetur. Fermentum bibendum at volutpat
        purus viverra semper. Lorem ipsum dolor sit amet consectetur. Fermentum
        bibendum at volutpat purus viverra semper. Lorem ipsum dolor sit amet
        consectetur. Fermentum bibendum at volutpat purus viverra semper. Lorem
        ipsum dolor sit amet consectetur. Fermentum bibendum at volutpat purus
        viverra semper. Lorem ipsum dolor sit amet consectetur.
      </h2>

      <div className="grid mn-lg:grid-cols-2 gap-4">
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
