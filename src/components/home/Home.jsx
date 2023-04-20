import React from "react";
import MainImg from "./mainImg/MainImg";
import Services from "./services/Services";
import Example from "./example/example";
import ChooseUs from "./chooseUs/ChooseUs";


const Home = () => {
    return(
        <div>
            <MainImg/>
            <Services/>
            <ChooseUs/>

        </div>
    )
}

export default Home;