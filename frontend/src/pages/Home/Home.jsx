import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import Categories from "../../components/cateogiries/categories";
import FeaturedJobs from "../../components/featuredJobs/FeaturedJobs";
import TopCompanies from "../../components/TopCompanies/TopCompanies";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <FeaturedJobs />
            <TopCompanies />
            <div className="container mt-5">

                <h1 className="display-4 fw-bold">
                    Find Your Dream Job
                </h1>

                <p className="lead">
                    Search thousands of jobs from top companies.
                </p>

                <button className="btn btn-primary btn-lg">
                 <Link to="/jobs" className="text-white text-decoration-none">
                    Explore Jobs
                 </Link>
                </button>

            </div>

            <Footer />
        </>
    );
};

export default Home;