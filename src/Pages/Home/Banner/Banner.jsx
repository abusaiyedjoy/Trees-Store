
import image1 from "./../../../assets/Plant-2-removebg-preview.png"
import image2 from "./../../../assets/Plant-1-removebg-preview.png"
import image3 from "./../../../assets/Plant-4-removebg-preview.png"

const Banner = () => {
    return (
        <div>
            <header className="bg-[#DAE4E6] w-full h-full">

                <div className="container px-6 pt-16 mx-auto h-full">
                    <div className="items-center lg:flex ">
                        <div className="w-full">
                            <div className="w-full">
                                <h1 className="text-4xl font-semibold text-[##008037] lg:text-6xl">Trees Plant.  </h1>

                                <p className="mt-3 text-xl text-[#35654C]">Find Your Favorite Plants Here.</p>
                                <p className="mt-16 text-xl max-w-lg text-[#35654C]">We have a wide variety of beautiful and good plant collections to beautify your home. </p>

                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#008037] rounded-lg lg:w-auto hover:bg-[#2d6b48] focus:outline-none focus:bg-[#2d6b48]">Learn more...</button>
                            </div>
                        </div>

                        <div className="flex items-end justify-center w-full mt-6 pb-3 lg:mt-0 lg:w-1/2 gap-0">
                            <img className="w-1/3 h-full lg:max-w-3xl" src={image3} alt="Catalogue-pana.svg" />
                            <img className="w-1/2 h-full lg:max-w-3xl" src={image1} alt="Catalogue-pana.svg" />
                            <img className="w-full h-full lg:max-w-3xl" src={image2} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;