// import React, { useEffect, useState } from 'react'
// import html from '../../assets/html.svg'
// import Css from '../../assets/css.svg';
// import javascript from '../../assets/javascript.svg';
// import tailwind from '../../assets/tailwindcss.svg';
// import java from '../../assets/java.svg';
// import bootstrap from '../../assets/bootstrap.svg';
// import react from '../../assets/react.svg';
// import { Col, Row } from 'react-bootstrap';
// import { motion } from "framer-motion";

// const Skills = () => {
//     const [scroll, setScroll] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const topScroll = window.scrollY;
//             const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const percentage = topScroll / docHeight;

//             const newPercentage = percentage * 50;

//             setScroll(newPercentage);
//         }


//         window.addEventListener("scroll", handleScroll);
//     })
//     return (

//         <>


//             <div className='bg-[rgb(241,233,219)] flex text-center justify-center items-center relative h-[100vh] px-10' id='skills'>
//                 <div className='artifika-regular text-3xl sm:text-4xl md:text-5xl lg:text-8xl '>
//                     <h1>My</h1>
//                     <h1>Amazing</h1>
//                     <h1>Stacks</h1>
//                 </div>

//                 <div className='left_skills absolute top-36 left-56 flex flex-col gap-20  '>

//                     {/* First image (HTML) */}
//                     <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={html} alt="HTML Icon" className='h-[100%] w-[100%]' />
//                     </div>
//                     {/* Second image (CSS) */}
//                     <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={Css} alt="CSS Icon" className='h-[100%] w-[100%]' />
//                     </div>

//                     <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={java} alt="" className='h-[100%] w-[100%]' />
//                     </div>
//                 </div>


//                 <div className='right_skills absolute top-36 right-32  flex flex-col gap-20'>
//                 <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={javascript} alt="" className='h-[100%] w-[100%]' />
//                     </div>
//                     <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={tailwind} alt="" className='h-[100%] w-[100%]' />
//                     </div>
//                     <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={bootstrap} alt="" className='h-[100%] w-[100%]' />
//                     </div>
//                 </div>


//                 <div className='right_skill_react absolute top-72 right-60'>
//                 <div className='h-[35px] w-[35px] sm:w-[50px] sm:h-[50px] '>
//                         <img src={react} alt="" className='h-[100%] w-[100%]' />
//                     </div>
//                 </div>

//             </div>

//         </>
//     )
// }

// export default Skills


import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import javaIcon from "../../assets/java.svg"; // Import Java image from assets

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34C26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Java", icon: <img src={javaIcon} alt="Java" className="w-12 h-12" />, color: "#5382A1" }, // Java with image
  ];

  return (
    <section className="bg-[rgb(241,233,219)] flex text-center justify-center items-center relative min-h-screen px-10" id="skills">
      <div className="container mx-auto px-4">
        <div className="artifika-regular py-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <h1>My</h1>
          <h1>Amazing</h1>
          <h1>Stacks</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 py-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-40 sm:w-48 md:w-56"
              style={{ borderColor: skill.color }}
            >
              <div className="text-5xl mb-3" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

