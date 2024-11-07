import React from 'react';
import { CopyButton } from '../../components';
import {Heroimg} from '../../assets';

const Hero = () => {
  return (
    <>
        <section className="hero pt-4 min-h-screen " id="home">
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className="hero__inner flex  flex-col-reverse gap-[10vh] text-center justify-around md:flex-row md:gap-12 md:justify-between md:text-left md:items-center">
            <div className="hero__left flex flex-col justify-center items-center text-center md:pt-20 md:text-left">
            <h1 className=" karla name text-8xl font-semibold text-[#cdcbcb] uppercase mx-auto mb-2 z-10">
                Kritagya Singh Chouhan
            </h1>
            <h6 className="auto-typing text-xl font-semibold text-[var(--red)] capitalize mx-auto mb-2">
                Full Stack Developer
            </h6>
            <p className="text-[#cdcbcb] inconsolata max-w-prose mx-auto tracking-wider text-justify md:max-w-[55ch] md:mt-4 z-10">
                I'm a software developer specializing in building exceptional digital experiences. At Present, I’m focused on building scalable, user-centered products at Jio.
            </p>
            <div className="hero__btn mt-[5vh] flex justify-center gap-[15%] mx-auto md:justify-start md:gap-20 md:mt-[5%]">
                <CopyButton />
            </div>
            </div>
            <div className="hero__right grid place-items-center">
            <img
                className="hero-image max-w-[30rem] w-[35vw] min-w-[12rem] mt-4 md:mt-0 border-4 rounded-full border-[#cdcbcb] z-10"
                src={Heroimg}
            />
            </div>
        </div>
        </section>

    </>
  )
}

export default Hero