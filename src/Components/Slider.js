import React, { useState } from "react";

const Slider = ({ id, max, defaultValue }) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="relative my-1">
            <div className="w-full h-1 bg-white/25 rounded-full"></div>
            <div className="w-full h-1 bg-white rounded-full absolute top-0 left-0" style={{ width: `${(value * 100) / max}%` }}></div>
            <input id={id} type="range" min="0" max={max} value={value} onChange={(e) => setValue(e.target.value)} className="w-full h-full absolute top-0 left-0 cursor-pointer customSlider" />
        </div>
    );
};

export default Slider;
