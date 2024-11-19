// import React, { useState, useEffect } from "react";
// import Image from '../assets/portfolio_ali.png'

// const ScrollGradient = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = position / maxScroll;
//       setScrollPosition(scrollPercent); // Update scroll position as a percentage (0 to 1)

//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Function to calculate the gradient for each span based on scroll range
//   const calculateGradient = (start, end) => {
//     const lightColor = `rgb(111,108,104)`; // Pure white for strong contrast
//     const darkColor = `rgb(241,233,219)`; // Pure black for strong contrast

//     const progress = Math.min(Math.max((scrollPosition - start) / (end - start), 0), 1); // Ensure progress is between 0 and 1
//     const gradientPoint = progress * 100; // Control the transition progress

//     return `linear-gradient(to left, ${lightColor} ${100 - gradientPoint}%, ${darkColor} ${100 - gradientPoint}%)`;
//   };

//   // Component to render lines with individual span
//   const Line = ({ text, start, end }) => (
//     <span
//       style={{
//         display: "block", // Display each span as a block (like a line break)
//         backgroundImage: calculateGradient(start, end),
//         WebkitBackgroundClip: "text",
//         color: "transparent", // Transparent text to show the gradient
//         fontWeight: "bold", // Thicker font weight for visibility
//         fontSize: "1.5rem",
//         whiteSpace: "normal", // Allow text to wrap properly
//         lineHeight: "1.5",
//         // marginBottom: "10px", // Add margin between lines
//       }}
//     >
//       {text}
//     </span>
//   );

//   return (
//     <>
//       <div className="flex bg-[rgb(55,55,55)] px-20  justify-between items-center " id="about">
//         <div className="  h-[450px] w-[450px] mt-10">
//           {/* <img src={Image} alt="" className="h-[100%] w-[100%] rounded-lg" /> */}
//         </div>
//         <div className=" py-40">
//           {/* First Block */}
//           <div className="">
//             <Line text="Hey there! 👋" start={0.0} end={0.1} />
//           </div>

//           {/* Second Block */}
//           <div className="py-4">
//             <Line text="   I'm a React JS Frontend Developer" start={0.1} end={0.2} />
//             <Line text="Currently rocking it at Crisfood Online LLP since 2023." start={0.2} end={0.3} />
//           </div>

//           {/* Third Block */}
//           <div className="">
//             <Line text="Providing Frontend Development services at Crisfood" start={0.3} end={0.4} />
//             <Line text="I collaborate remotely with a team of awesome people" start={0.4} end={0.5} />
//             <Line text="from different corners of the world." start={0.5} end={0.6} />
//           </div>

//           <div className="py-5">
//             <Line text="Feel free to explore my projects and get in touch if you'd like to collaborate!" start={0.6} end={0.7} />
//             <Line text="Let's create some magic! ✨" start={0.6} end={0.7} />

//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default ScrollGradient;
