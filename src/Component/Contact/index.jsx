import React from 'react'
import { Col, Row } from 'react-bootstrap'
import linkediin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import email from '../../assets/email.svg'

const Contact = () => {
    return (
        <>

            {/* <div className="scroll-container w-[100%] overflow-hidden whitespace-nowrap bg-[rgb(29,29,29)]  satisfy-regular text-8xl text-white flex gap-20 py-4">
                <ul className="scrolling-list gap-20">
                    <li>  Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                </ul>
                <ul className="scrolling-list flex gap-20">
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                    <li>Let's Chat</li>
                </ul>
            </div> */}
            <div className=' bg-[rgb(29,29,29)] py-14 ' id='contact'>
                <div className=' bg-[rgb(244,244,237)]  rounded-3xl  mx-4 sm:mx-10 home'>

                    <Row className='py-32 pl-6 flex gap-10 artifika-regular sm:pl-20 '>
                        <Col md={12} className='text-xl sm:text-2xl  md:text-4xl'>
                            Ready to enhance your business with a visually engaging and empathetic style?
                        </Col>
                        <Col md={12} className='  flex flex-col justify-center '>
                            <h1 className='text-xl sm:text-2xl  md:text-4xl'> Let's Connect Us ✨</h1>
                        </Col>
                        <div className='flex justify-between items-start  gap-3 flex-col  md:flex-row md:items-center'>

                            <div className='email'>
                                <a href="mailto:aliasgaransari825@gmail.com" className='text-sm sm:text-xl '>aliasgaransari825@gmail.com</a>
                            </div>
                            <div className='flex gap-2 justify-end  md:pr-20 sm:gap-5'>
                                <div className="linkedin border-2 border-black rounded-full p-3" >
                                    <a href="https://www.linkedin.com/in/ansari-ali-asgar-98466b229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                        <img src={linkediin} alt="" className='hover:scale-125' />
                                    </a>
                                </div>
                                <div className="instagram border-2 border-black p-3 rounded-full">
                                    <a href="">
                                        <img src={instagram} alt="" className='hover:scale-125' />
                                    </a>
                                </div>
                                <div className="email border-2 border-black p-3  rounded-full ">
                                    <a href="mailto:aliasgaransari825@gmail.com">
                                        <img src={email} alt="" className='hover:scale-125' />
                                    </a>
                                </div>
                            </div>
                        </div>



                    </Row>



                </div>
            </div>
        </>

    )
}

export default Contact
