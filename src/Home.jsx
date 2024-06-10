import React from "react";
import web from "../src/image/Hyundai-Grand-i10-Nios-200120231541.jpg"
import { NavLink } from "react-router-dom";
import Common from "./common";
const Home = ()=>{
   return (
    <>
     <Common name='Grow your bussiness with' imgsrc={web} visit="/service" btname="Get Started" />
    </>
   )
}

export default Home;