import FirstButton from "../../../Components/Button/FirstButton";
import SecondButton from "../../../Components/Button/SecondButton";
import Title from "../../../Components/Title/Title";

const TopSelling = () => {
    return (
        <>
        <Title title={"Our Top Selling Products"}></Title>
            <section className=" mt-44 mb-12 container mx-auto">
                <div className="card border relative border-primary bg-secondary w-96">
                    <img className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56" src="https://i.ibb.co/NY4gJqg/Plant-2-removebg-preview.png" alt="" />
                    <div className="card-body items-center text-center pt-32">
                        <h2 className="card-title">Mango TbTruckDelivery</h2>
                        <p>$20.00</p>
                        <div className="justify-end flex items-end  ">
                            <SecondButton name={"Add to Cart"}></SecondButton>
                            <FirstButton name={"Add to Wishlist"}></FirstButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopSelling;