import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import portfolio from '../../assets/portfolio_ali.png'

const About = () => {
    return (
        <>
            {/* <Container fluid className='bg-[rgb(55,55,55)] ' id='about'>

                <div className='text-[rgb(241,233,219)] '>
                    <div  className='flex justify-center items-center'>
                        <div className='h-[500px] w-[500px]'>

                            <img src={portfolio} alt=""  className='h-[100%] w-[100%]'/>
                        </div>
                    </div>
                    <div md={7} className='py-32 crimson-text-semibold text-3xl md:text-4xl'>
                       

                            <div>
                                <h1>Hey there!👋</h1>

                            </div>

                            <div className='py-4 pb-5'>
                                <h1> I'm a React JS Frontend Developer</h1>
                                <h1>Currently rocking it at Crisfood Online LLP since 2023.</h1>
                            </div>

                            <div className='pb-5'>
                                <h1>Providing Frontend Development services at Crisfood</h1>
                                <h1>I collaborate remotely with a team of awesome people</h1>
                                <h1>from different corners of the world.</h1>
                            </div>

                            <div>
                                <h1>Feel free to explore my projects and get in touch if you'd like to collaborate!</h1>
                                <h1>Let's create some magic! ✨</h1>
                            </div>
                      
                    </div>
                </div>
            </Container> */}


            <div className="about_section bg-[rgb(55,55,55)]  flex flex-col justify-between items-center gap-20 px-5 py-32 md:flex-row " id='about'>
                <div className="about_image">
                    <div className='h-[300px] w-[300px]'>
                        {/* <img src={portfolio} alt="" className='h-[100%] w-[100%]' /> */}
                    </div>
                </div>
                <div className="content_about text-white artifika-regular text-2xl md:text-2xl lg:text-3xl ">
                    <div>
                        <h1>Hey there!👋</h1>
                    </div>
                    <div className='py-4 pb-5'>
                        <h1> I'm a React JS Frontend Developer</h1>
                        <h1>Currently rocking it at Crisfood Online LLP since 2023.</h1>
                    </div>
                    <div className='pb-5'>
                        <h1>Providing Frontend Development services at Crisfood</h1>
                        <h1>I collaborate remotely with a team of awesome people</h1>
                        <h1>from different corners of the world.</h1>
                    </div>
                    <div>
                                <h1>Feel free to explore my projects and get in touch if you'd like to collaborate!</h1>
                                <h1>Let's create some magic! ✨</h1>
                            </div>
                </div>
            </div>
        </>
    )
}

export default About