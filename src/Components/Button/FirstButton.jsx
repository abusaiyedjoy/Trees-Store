/* eslint-disable react/prop-types */
import { GiSelfLove } from "react-icons/gi";

const FirstButton = ({name}) => {
    return (
        <div className="w-48 h-40 flex items-center justify-center cursor-pointer">
            <div
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-gray-200 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-primary hover:text-primary group"
            >
                <span
                    className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-50 group-hover:h-full"
                ></span>
                <span
                    className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                >
                    <GiSelfLove />

                </span>
                <span
                    className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                >
                    <GiSelfLove />

                </span>
                <span
                    className="relative w-full text-left transition-colors duration-200 ease-in-out "
                >{name}</span>
            </div>
        </div>
    );
};

export default FirstButton;