import Title from "../../Components/Title/Title";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mb-0 h-full w-full mt-0">
            <Banner></Banner>
            
            <Title title={" All Category!!"}></Title>
        </div>
    );
};

export default Home;