
import image2 from "./../../../assets/Plant-2.jpg"

const Banner = () => {
    return (
        <div>
            <header className="bg-[#DAE4E6] w-full h-full">

                <div className="container px-6 py-16 mx-auto h-full">
                    <div className="items-center lg:flex ">
                        <div className="w-full">
                            <div className="w-full">
                                <h1 className="text-3xl font-semibold text-[#305A0D] lg:text-4xl">Trees Plant.  </h1>

                                <p className="mt-3 text-xl text-[#35654C]">Find Your Favorite Plants Here.</p>
                                <p className="mt-16 text-xl text-[#35654C]">We have a wide variety of beautiful and good plant collections to beautify your home. </p>

                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#305A0D] rounded-lg lg:w-auto hover:bg-[#40691e] focus:outline-none focus:bg-[#40691e]">Learn more...</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src={image2} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;