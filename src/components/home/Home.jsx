import React from "react";
import MainImg from "./mainImg/MainImg";
import Services from "./services/Services";
import Example from "./example/example";
import ChooseUs from "./chooseUs/ChooseUs";
import Price from "./price/Price";
import GetInTouch from "./getInTouch/GetInTouch";


const Home = () => {
    return(
        <div>
            <MainImg/>
            <Services/>
            <ChooseUs/>
            <Price/>
            <GetInTouch/>
        </div>
    )
}

export default Home;