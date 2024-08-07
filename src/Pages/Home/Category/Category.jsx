
import Title from './../../../Components/Title/Title';

const Category = () => {
    return (
        <section className='my-12 container mx-auto'>
            <Title title={" All Category!!"}></Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-20">
                <div className="bg-gray-100 text-primary font-bold border-2 shadow-xl border-secondary rounded-tr-full rounded-tl-full text-center relative w-64 h-16 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Flowers Trees</h1>
                    <div className="w-14 h-14 bg-[url('https://i.ibb.co/Q8cDPn5/Plant-5.jpg')] bg-cover bg-secondary rounded-full border border-primary absolute -top-4
                     left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="bg-gray-100 text-primary font-bold border-2 shadow-xl border-secondary rounded-tr-full rounded-tl-full text-center relative w-64 h-16 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Fruits Trees</h1>
                    <div className="w-14 h-14 bg-[url('https://i.ibb.co/RNmCPtb/Plant-4.png')] bg-cover bg-secondary rounded-full border border-primary absolute -top-4
                     left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="bg-gray-100 text-primary font-bold border-2 shadow-xl border-secondary rounded-tr-full rounded-tl-full text-center relative w-64 h-16 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Vegitables Trees</h1>
                    <div className="w-14 h-14 bg-[url('https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png')] bg-cover bg-secondary rounded-full border border-primary absolute -top-4
                     left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="bg-gray-100 text-primary font-bold border-2 shadow-xl border-secondary rounded-tr-full rounded-tl-full text-center relative w-64 h-16 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Others Trees</h1>
                    <div className="w-14 h-14 bg-[url('https://i.ibb.co/Q8cDPn5/Plant-5.jpg')] bg-cover bg-secondary rounded-full border border-primary absolute -top-4
                     left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
};

export default Category;