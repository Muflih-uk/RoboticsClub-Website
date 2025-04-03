"use client"
import Home from "./Home";
import Gallery from "./Gallery";
import Project from "./Projects";
import Achievements from "./Achiev";
import Team from "./Team";
import Contact from "./Contact";
import {useEffect, useState} from "react";
import { TrophySpin } from "react-loading-indicators";

const Page = () => {
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },2000);
    return () => clearTimeout(timer)
  },[])
  if(loading){
    return (
      <div className="flex items-center justify-center bg-white h-screen">
        <TrophySpin size="large" color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
      </div>
    )
  }
  return(
    <div>
      <Home/>
      <Gallery/>
      <Project/>
      <Achievements/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default Page;
