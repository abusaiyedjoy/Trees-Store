/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import image1 from './../../assets/Leavs2-removebg-preview.png'
import image2 from './../../assets/Big_tree1-removebg-preview.png'
import Title from "../../Components/Title/Title";
import { AiOutlineHome } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { LuAlarmClock } from "react-icons/lu";

const AboutUS = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${image1})`
            }}
            className="w-full bg-cover bg-center object-cover">
            <section
                className="bg-[#b3d9b7] my-12 rounded-2xl container mx-auto w-full">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row-reverse">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-64 w-64 sm:w-[16rem] sm:h-[16rem] flex-shrink-0 object-cover rounded-full border-2 border-primary overflow-hidden" src={image2} alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <Link to="/" className="block max-w-2xl mx-auto mt-4 text-center text-gray-500 "><span className="flex justify-center gap-1 items-center text-xl hover:text-primary"><AiOutlineHome /> Home <IoIosArrowForward /></span>
                        </Link>
                        <h2 className="text-2xl font-semibold tracking-tight text-primary uppercase xl:text-4xl text-center w-full">
                            <Title title={"About Us"}></Title>
                        </h2>


                    </div>
                </div>
            </section>
            <section className="bg-[#b3d9b7] my-12 rounded-2xl container mx-auto w-full">
                <div className="container px-6 py-8 mt-12 mx-auto">

                    <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="flex items-end justify-center px-4 text-center sm:block sm:p-0">

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg border border-primary rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                        <TbTruckDelivery size={30}  />
                                    </span>

                                    <div className="mt-2 text-center">
                                        <h2 className="mt-4 text-lg font-medium text-gray-800">Express Delivery</h2>
                                        <p className="mt-2 text-gray-500">You have 30-day return guarantee for every single order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-center px-4 text-center sm:block sm:p-0">

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg border border-primary rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                        <GrLocation size={30} />
                                    </span>

                                    <div className="mt-2 text-center">
                                        <h2 className="mt-4 text-lg font-medium text-gray-800">Address</h2>
                                        <p className="mt-2 text-gray-500">Come say hello at our office HQ.</p>
                                        <p className="mt-2 text-gray-500"> Foy's Lake/ Chattogram.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-center px-4 text-center sm:block sm:p-0">

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg border border-primary rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                        <LuAlarmClock size={30}/>
                                    </span>

                                    <div className="mt-2 text-center">
                                        <h2 className="mt-4 text-lg font-medium text-gray-800">Our To Openations</h2>
                                        <p className="mt-2 text-gray-500">Monday - Friday: 8:30am - 8:00pm</p>
                                        <p className="mt-2 text-gray-500">Saturday - Sunday: 9:30am - 1:30pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-center px-4 text-center sm:block sm:p-0">

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg border border-primary rtl:text-right sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="inline-block text-center items-center justify-center p-3 text-green-500 rounded-full bg-green-100/80">
                                        <FiPhoneCall size={30} />
                                    </span>

                                    <div className="mt-2 text-center">
                                        <h2 className="mt-4 text-lg font-medium text-gray-800">Contact Us</h2>
                                        <p className="mt-2 text-gray-500">Email:- abusaiyedjoy1@gmail.com</p>
                                        <p className="mt-2 text-gray-500">Hotline:- +8801988084185</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-6 py-8 mx-auto">
                    <h2 className="text-lg font-semibold text-center text-primary capitalize lg:text-xl">OUR PROFESSIONALS</h2>
                    <h2 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-4xl">Our Team Members</h2>

                    <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-80 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-800">AHMED OMER</h3>
                                <span className="mt-1 font-medium text-primary">Director</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-80 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-800">DIAGO JOHNSON</h3>
                                <span className="mt-1 font-medium text-primary">Co-founder</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-80 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-800">ALEX LEEMAN</h3>
                                <span className="mt-1 font-medium text-primary">Sales Manager</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-80 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-800">SOPHIA LAUREN</h3>
                                <span className="mt-1 font-medium text-primary">Merketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUS;