import FirstButton from "../../../Components/Button/FirstButton";
import SecondButton from "../../../Components/Button/SecondButton";
import Title from "../../../Components/Title/Title";

const TopSelling = () => {
    return (
        <>
        <Title title={"Our Top Selling Products"}></Title>
            <section className=" mt-44 mb-12 container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-44">
                <div className="card border relative border-primary bg-secondary w-64 mx-auto">
                    <img className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56" src="https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png" alt="" />
                    <div className="card-body items-center text-center pt-32">
                        <h2 className="card-title">Mango TbTruckDelivery</h2>
                        <p>$20.00</p>
                        <div className="justify-end flex flex-col items-end gap-4 ">
                            <SecondButton name={"Add to Cart"}></SecondButton>
                            <FirstButton name={"Add Wishlist"}></FirstButton>
                        </div>
                    </div>
                </div>
                <div className="card border relative border-primary bg-secondary w-64 mx-auto">
                    <img className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56" src="https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png" alt="" />
                    <div className="card-body items-center text-center pt-32">
                        <h2 className="card-title">Mango TbTruckDelivery</h2>
                        <p>$20.00</p>
                        <div className="justify-end flex flex-col items-end gap-4 ">
                            <SecondButton name={"Add to Cart"}></SecondButton>
                            <FirstButton name={"Add Wishlist"}></FirstButton>
                        </div>
                    </div>
                </div>
                <div className="card border relative border-primary bg-secondary w-64 mx-auto">
                    <img className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56" src="https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png" alt="" />
                    <div className="card-body items-center text-center pt-32">
                        <h2 className="card-title">Mango TbTruckDelivery</h2>
                        <p>$20.00</p>
                        <div className="justify-end flex flex-col items-end gap-4 ">
                            <SecondButton name={"Add to Cart"}></SecondButton>
                            <FirstButton name={"Add Wishlist"}></FirstButton>
                        </div>
                    </div>
                </div>
                <div className="card border relative border-primary bg-secondary w-64 mx-auto">
                    <img className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56" src="https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png" alt="" />
                    <div className="card-body items-center text-center pt-32">
                        <h2 className="card-title">Mango TbTruckDelivery</h2>
                        <p>$20.00</p>
                        <div className="justify-end flex flex-col items-end gap-4 ">
                            <SecondButton name={"Add to Cart"}></SecondButton>
                            <FirstButton name={"Add Wishlist"}></FirstButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopSelling;