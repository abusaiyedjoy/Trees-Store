import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import TopSelling from "./TopSelling/TopSelling";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div className="h-full w-full mt-0 mb-12">
            <Helmet>
                <title>Trees Store || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <TopSelling></TopSelling>
            <Review></Review>

        </div>
    );
};

export default Home;