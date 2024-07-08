import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import TopSelling from "./TopSelling/TopSelling";

const Home = () => {
    return (
        <div className="mb-0 h-full w-full mt-0">
            <Helmet>
                <title>Trees Store || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <TopSelling></TopSelling>

        </div>
    );
};

export default Home;