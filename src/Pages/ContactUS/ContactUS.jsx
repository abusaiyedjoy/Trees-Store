/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import image1 from './../../assets/Leaves-removebg-preview.png'
import image2 from './../../assets/Plant-5-removebg-preview.png'
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Title from "../../Components/Title/Title";
import { AiOutlineHome } from "react-icons/ai";
import { Helmet } from "react-helmet";

const ContactUS = () => {
    return (
        <>
            <Helmet>
                <title>Trees Store || Contact Us</title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${image1})`
                }}
                className="w-full bg-cover bg-center object-cover mt-0">
                <section
                    className="bg-[#b3d9b7] my-12 rounded-2xl container mx-auto w-full">
                    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row-reverse">
                        <div className="flex justify-center xl:w-1/2">
                            <img className="h-64 w-64 sm:w-[16rem] sm:h-[16rem] flex-shrink-0 object-cover  border-2 border-primary rounded-full overflow-hidden" src={image2} alt="" />
                        </div>

                        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                            <Link to="/" className="block max-w-2xl mx-auto mt-4 text-center text-gray-500 "><span className="flex gap-1 justify-center items-center text-xl hover:text-primary"><AiOutlineHome /> Home <IoIosArrowForward /></span>
                            </Link>
                            <h2 className="text-2xl font-semibold tracking-tight text-primary uppercase xl:text-4xl text-center w-full">
                                <Title title={"Contact Us"}></Title>
                            </h2>


                        </div>
                    </div>
                </section>
                <section className="bg-transparent container mx-auto">
                    <div className="container my-12 mx-auto">

                        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="flex hover:scale-110 transition-transform duration-300 ease-in-out items-end justify-center px-4 text-center sm:block sm:p-0">

                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-secondary rounded-lg shadow-xl rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                            <HiOutlineMailOpen size={30} />
                                        </span>

                                        <div className="mt-2 text-center">
                                            <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                                            <p className="mt-2 text-gray-500">Our friendly team is here to help.</p>
                                            <p className="mt-2 text-green-500 dark:text-green-400">abusaiyedjoy1@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex hover:scale-110 transition-transform duration-300 ease-in-out items-end justify-center px-4 text-center sm:block sm:p-0">

                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-secondary rounded-lg shadow-xl rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                            <GrLocation size={30} />
                                        </span>

                                        <div className="mt-2 text-center">
                                            <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
                                            <p className="mt-2 text-gray-500">Come say hello at our office HQ.</p>
                                            <p className="mt-2 text-green-500 dark:text-green-400"> Foy's Lake/ Chattogram.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex hover:scale-110 transition-transform duration-300 ease-in-out items-end justify-center px-4 text-center sm:block sm:p-0">

                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-secondary rounded-lg shadow-xl rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                            <GrLocation size={30} />
                                        </span>

                                        <div className="mt-2 text-center">
                                            <h2 className="mt-4 text-lg font-medium text-gray-800">Live Chat</h2>
                                            <p className="mt-2 text-gray-500">Our friendly team is here to help.</p>
                                            <p className="mt-2 text-green-500 dark:text-green-400">Start New Chat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex hover:scale-110 transition-transform duration-300 ease-in-out items-end justify-center px-4 text-center sm:block sm:p-0">

                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-secondary rounded-lg shadow-xl rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                            <FiPhoneCall size={30} />
                                        </span>

                                        <div className="mt-2 text-center">
                                            <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
                                            <p className="mt-2 text-gray-500">Mon-Fri from 8.am to 5.pm.</p>
                                            <p className="mt-2 text-green-500 dark:text-green-400">+8801988084185</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-4 py-6 bg-[#b3d9b7] my-12 rounded-2xl container mx-auto w-full md:p-8">
                    <form>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600">First Name</label>
                                <input type="text" placeholder="Abu Saiyed " required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                                <input type="text" placeholder="Joy" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Email address</label>
                            <input type="email" placeholder="abusaiyedjoy1@gmail.com" required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Message</label>
                            <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full hover:scale-105 text-xl transition-transform ease-in-out  px-6 py-3 mt-4 font-semibold tracking-wide text-white capitalize duration-300 transform bg-primary rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default ContactUS;