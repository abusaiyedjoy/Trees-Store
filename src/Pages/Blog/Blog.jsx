import { Helmet } from "react-helmet";
import Title from "../../Components/Title/Title";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import image2 from './../../assets/Big_tree1-removebg-preview.png'


const Blog = () => {
    return (
        
        <>
            <Helmet>
                <title>Trees Store || About Us</title>
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
        </>
    );
};

export default Blog;