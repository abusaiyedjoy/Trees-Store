import { Helmet } from "react-helmet";
import Title from "../../Components/Title/Title";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import image2 from './../../assets/Big_tree1-removebg-preview.png'


const Blog = () => {
    return (

        <section>
            <Helmet>
                <title>Trees Store || Blog</title>
            </Helmet>
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
                            <Title title={"All Blogs"}></Title>
                        </h2>


                    </div>
                </div>
            </section>
            <section className="bg-[#b3d9b7] my-12 rounded-2xl container mx-auto w-full">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">From the blog</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                            pie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                                    <div className="absolute bottom-0 flex p-3 bg-white ">
                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                                            <div className="mx-4">
                                                <h1 className="text-sm text-gray-700 ">Tom Hank</h1>
                                                <p className="text-sm text-gray-500 ">Creative Director</p>
                                            </div>
                                    </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800">
                                What do you want to know about UI
                            </h1>

                            <hr className="w-32 my-6 text-green-500"/>

                                <p className="text-sm text-gray-500 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                                    praesentium, alias nam? Tempore
                                </p>

                                <a href="#" className="inline-block mt-4 text-green-500 underline hover:text-green-400">Read more</a>
                        </div>

                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                                    <div className="absolute bottom-0 flex p-3 bg-white ">
                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                                            <div className="mx-4">
                                                <h1 className="text-sm text-gray-700 ">arthur melo</h1>
                                                <p className="text-sm text-gray-500 ">Creative Director</p>
                                            </div>
                                    </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800">
                                All the features you want to know
                            </h1>

                            <hr className="w-32 my-6 text-green-500"/>

                                <p className="text-sm text-gray-500 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                                    praesentium, alias nam? Tempore
                                </p>

                                <a href="#" className="inline-block mt-4 text-green-500 underline hover:text-green-400">Read more</a>
                        </div>

                        <div>
                            <div className="relative">
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""/>

                                    <div className="absolute bottom-0 flex p-3 bg-white ">
                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                                            <div className="mx-4">
                                                <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                                <p className="text-sm text-gray-500 ">Lead Developer</p>
                                            </div>
                                    </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800">
                                Which services you get from Meraki UI
                            </h1>

                            <hr className="w-32 my-6 text-green-500"/>

                                <p className="text-sm text-gray-500 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                                    praesentium, alias nam? Tempore
                                </p>

                                <a href="#" className="inline-block mt-4 text-green-500 underline hover:text-green-400">Read more</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Blog;