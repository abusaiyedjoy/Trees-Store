
import image1 from "./../../../assets/Plant-2-removebg-preview.png"
import image2 from "./../../../assets/Plant-1-removebg-preview.png"
import image3 from "./../../../assets/Plant-4-removebg-preview.png"
import './Banner.css'
import Navbar from './../../../Components/Navbar/Navbar';

const Banner = () => {
    return (
        <div className="bg-[#b3d9b7]">
            <div className="h-[80px]">
                <Navbar></Navbar>
            </div>
            <header className="bg-[#b3d9b7] relative w-full h-full lg:h-[80vh]">

                <div className="container px-6 mx-auto h-full">
                    <div className=" w-full py-6 pb-56">
                        <div className="items-end w-full flex flex-col-reverse lg:flex-row ">
                                <div className="w-full">
                                    <h1 className="text-4xl font-semibold text-primary lg:text-6xl">Trees Plant.  </h1>

                                    <p className="mt-3 text-xl text-primary">Find Your Favorite Plants Here.</p>
                                    <p className="mt-16 text-xl max-w-lg text-primary">We have a wide variety of beautiful and good plant collections to beautify your home. </p>

                                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-[#226d39] focus:outline-none focus:bg-[#2d6b48]">Learn more...</button>

                                </div>

                            <div className="flex items-end justify-center w-full mt-6 pb-3 lg:mt-0 lg:w-1/2 gap-0">
                                <img className="hidden lg:block w-1/3 h-full lg:max-w-3xl" src={image3} alt="Catalogue-pana.svg" />
                                <img className="hidden lg:block w-1/2 h-full lg:max-w-3xl" src={image1} alt="Catalogue-pana.svg" />
                                <img className="w-full h-full lg:max-w-3xl" src={image2} alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1719894942 absolute bottom-0 w-full">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill w-full"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill w-full"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill w-full"></path>
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;