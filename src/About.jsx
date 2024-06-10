import React from "react";
import web from "../src/image/Hyundai-Grand-i10-Nios-200120231541.jpg"
import { NavLink } from "react-router-dom";
import Common from "./common";
const About = ()=>{
   return (
    <>
     <Common name='Welcome to About page of' imgsrc={web} visit="/contact" btname="Contact Now" />
    </>
   )
}

export default About;