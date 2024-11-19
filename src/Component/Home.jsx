import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'


const Home = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);

    // const handleScroll = () => {
    //     setScrollPosition(window.scrollY >= 50)
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    // })
    return (
        <div>


            <div className='  bg-[rgb(29,29,29)] py-20 ' id='/'>
                <div className=' bg-[rgb(244,244,237)]  rounded-3xl text-white mx-4 sm:mx-10 home '>

                    <Row className='py-36'>
                        <Col md={12} className='  flex flex-col justify-center pl-6 sm:pl-20 '>
                            <div className='my-4 text-black'>
                                <h1 className='text-3xl md:text-4xl lg:text-5xl'><span className='birthstone-regular  text-gray-9 00 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>hello, </span><span className="satisfy-regular text-gray-700   text-2xl sm:text-3xl md:text-4xl lg:text-5xl" > I’m Ali Asgar Ansari , A Web Developer and... </span></h1>
                            </div>
                            <div className='artifika-regular text-black'>
                                <p className='text-xl sm:text-2xl md:text-4xl lg:text-5xl'>Passionate about creating</p>
                                <p className='text-xl sm:text-2xl md:text-4xl lg:text-5xl py-3'>Interactive and unique </p>
                                <p className='text-xl sm:text-2xl md:text-4xl lg:text-5xl'>Web experiences.</p>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        </div>
    )
}

export default Home
