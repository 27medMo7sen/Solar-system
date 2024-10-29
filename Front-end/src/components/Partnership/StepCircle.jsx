const StepCircle = ({ stepNumber, color, text, description }) => {
    return (
        <div className="flex flex-col items-center mx-auto animate-fade-in" >
            {/* Outer Ring */}
            <div
                className={`relative w-52 h-52 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                style={{ border: `3px solid ${color.outer}` }}
            >
                {/* Inner Ring */}
                <div
                    className="absolute w-32 h-32 rounded-full shadow-xl flex items-center justify-center transition-transform duration-500 animate-bounce-slow"
                    style={{ border: `32px solid ${color.inner}` }}
                >
                    {/* Center Circle */}
                    <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-700">{stepNumber}</span>
                        <span className="text-sm font-bold text-gray-500">STEP</span>
                    </div>
                </div>
                {/* Small Side Circles */}
                <div
                    className="absolute w-4 h-4 bg-white rounded-full border-2 animate-bounce"
                    style={{ borderColor: color.outer, top: '50%', left: '-10px', transform: 'translateY(-50%)' }}
                ></div>
                <div
                    className="absolute w-4 h-4 bg-white rounded-full border-2 animate-bounce"
                    style={{ borderColor: color.outer, top: '50%', right: '-10px', transform: 'translateY(-50%)' }}
                ></div>
            </div>

            {/* Text Section */}
            <div className="py-8 items-center mx-auto max-w-60 text-center mt-4">
                <h4 className="text-Primary-button font-bold mb-3">{text}</h4>
                <p className="text-sm text-Secondary-button font-medium">{description}</p>
            </div>
        </div>
    );
};

export default StepCircle;
