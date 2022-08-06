import React from "react";
import CallToAction from "../components/CallToAction";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";


export default function Home() {
    return (
        <>
            <CallToAction/>
            <Carousel/>
            <FeaturedProducts/>
        </>
    );
}
