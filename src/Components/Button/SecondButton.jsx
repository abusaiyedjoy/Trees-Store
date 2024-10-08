/* eslint-disable react/prop-types */
import { FaCartArrowDown } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

const SecondButton = ({name}) => {
    return (
        <div className="w-40 flex items-center justify-center cursor-pointer">
            <div
                className="relative w-full inline-flex items-center justify-start py-2 pl-4 overflow-hidden font-semibold shadow text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 hover:text-gray-200 group"
            >
                <span
                    className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"
                ></span>
                <span
                    className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                >
                    <MdShoppingCartCheckout />
                </span>
                <span
                    className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                >
                    <FaCartArrowDown />
                </span>
                <span
                    className="relative w-full text-left transition-colors duration-200 ease-in-out "
                >{name}</span
                >
            </div>
        </div>

    );
};

export default SecondButton;