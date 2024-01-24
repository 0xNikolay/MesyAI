import React from "react";

const Dropdown = ({ list, placeholder, id, data, setData, up }) => {
    return (
        <div className="w-full h-10 rounded-lg bg-white/10 relative group cursor-pointer">
            <svg className="absolute top-4 right-4 w-3 h-3 opacity-50 group-hover:opacity-100 transition-all duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 190 320 200">
                <path fill="white" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            <input type="text" id={id} hidden={true} value={data === placeholder ? "" : data} className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer" />
            <p className="text-white p-2 px-3 w-[80%] truncate">{data}</p>
            <div className={"w-full h-[20%] absolute  " + (up ? "bottom-full" : "top-full")}></div>
            <div className={"bg-[#424242] w-full h-fit max-h-48 overflow-y-scroll rounded-lg shadow-xl absolute  left-0 scale-y-0  group-hover:scale-y-100 transition-all overflow-hidden z-50 " + (up ? "bottom-[120%] origin-bottom" : "top-[120%] origin-top")}>
                <p
                    onClick={() => {
                        setData("");
                    }}
                    className={"text-white/75 text-center py-1 hover:bg-white/10 transition-all duration-100 " + (placeholder === data ? " bg-white/10" : "")}
                >
                    {placeholder}
                </p>
                {list.map((item, index) => (
                    <p
                        onClick={() => {
                            setData(item);
                        }}
                        key={index}
                        className={"text-white/75 text-center py-1 hover:bg-white/10 transition-all duration-100 " + (item === data ? " bg-white/10" : "")}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
