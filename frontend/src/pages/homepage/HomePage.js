import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import ProductListing from "../../components/layouts/product-listing/ProductListing";
import Footer from '../../components/layouts/footer/Footer';
import ImageCarousel from "../../components/layouts/Imgcarousal/ImgCarousal";

const HomePage = () => {
    return (
        <section>
            <Showcase />
            <ImageCarousel />
            <ProductListing />
            <Footer />
        </section>
    )
}

export default HomePage;