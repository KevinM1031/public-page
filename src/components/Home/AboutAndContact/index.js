import './index.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { PiButterfly, PiCake, PiCookingPot, PiGameController, PiGlobeHemisphereEast, PiMapPinArea, PiMountains, PiPlant, PiSuitcase, PiUser } from 'react-icons/pi'

const AboutAndContact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_ap8zv7x', 'template_rrrfcrb', form.current, 'F7ujcoEz21XOrib99')
        .then(
            () => {
            alert('Email successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }

    const [showContent, setShowContent] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => setShowContent(window.innerWidth >= 1200);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Contact = () => (
        <div className={showContent ? "right" : "left"}>
            <h1>
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                    visible: { color: '#ff2164', opacity: 1, x: 0 },
                    hidden: { fontSize: 48, fontWeight: 400, color: '#fff', opacity: 0, x: 100 }
                }}>
                    Contact me
                </motion.span>
                <br />
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    variants={{
                    visible: { color: '#ff2164', opacity: 1, x: 0 },
                    hidden: { fontSize: 36, fontWeight: 800, color: '#fff', opacity: 0, x: 100 }
                }}>
                    소통하기
                </motion.span>
                <br />
                <br />
            </h1>

            <div className="contact">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        className="text"
                        placeholder="Name / 성함" 
                        type="text" 
                        name="from_name" 
                        required />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        placeholder="Email / 이메일"
                        type="email"
                        name="email"
                        required
                        />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input 
                        placeholder="Subject / 제목"
                        type="text"
                        name="subject"
                        required
                        />
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <textarea 
                        placeholder="Message / 내용"
                        name="message"
                        required
                        ></textarea>
                    </motion.li>
                    <motion.li 
                        className="glow-on-hover-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }}}
                    >
                        <input className="button" type="submit" value="SEND" />
                    </motion.li>
                    </ul>
                </form>
            </div>
        </div>
    )
    
    return (
        <div className="about-page">
            <div className="page">
    
                <div className="left">
                    <h1>
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            visible: { color: '#ff2164', opacity: 1, x: 0 },
                            hidden: { fontSize: 48, fontWeight: 400, color: '#fff', opacity: 0, x: -100 }
                        }}>
                            More about me
                        </motion.span>
                        <br />
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                            visible: { color: '#ff2164', opacity: 1, x: 0 },
                            hidden: { fontSize: 36, fontWeight: 800, color: '#fff', opacity: 0, x: -100 }
                        }}>
                            그 외의 정보
                        </motion.span>
                    </h1>

                    <br />
                    <br />
                    <ul>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiUser className="icon" />
                            <p className="text">
                                <span className="en">Male, born in October 31th, 2000</span>
                                <br />
                                <span className="kr">남, 2000년 10월 31일생</span>
                            </p>
                        </motion.li>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiMapPinArea className="icon" />
                            <p className="text">
                                <span className="en">Seoul, Republic of Korea</span>
                                <br />
                                <span className="kr">대한민국 서울 거주</span>
                            </p>
                        </motion.li>
                        <motion.li 
                            className="interest"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 }}}
                        >
                            <PiSuitcase className="icon" />
                            <p className="text">
                                <span className="en">{"Currently enlisted in the Korean Army (~June 25th)"}</span>
                                <br />
                                <span className="kr">{"현) 대한민국 육군 (6월 25일 전역)"}</span>
                            </p>
                        </motion.li>
                    </ul>
                
                    <br />
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        variants={{
                        visible: {  color: '#f1ced9', opacity: 1, y: 0 },
                        hidden: { fontSize: 20, lineHeight: 1, fontWeight: 10, color: '#fff', opacity: 0, y: 100 }
                    }}>
                        asdf asdf asd fasd fa sdf asdf asd f asdfasdf asdf asdf asdf asdf asdfasdfasd
                    </motion.p>
                    <br />
                    <br />
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                        visible: {  color: '#f1ced9', opacity: 1, y: 0 },
                        hidden: { fontSize: 16, lineHeight: 1, fontWeight: 10, color: '#fff', opacity: 0, y: 100 }
                    }}>
                        ㅁㄴㅇ랴ㅐ ㅁ노디ㅑㄹ ㅗㅁ니ㅑ뎌ㅗㄹ ㅑㅕㅣㅁ농리ㅑㅕ 모냥ㄹ ㅚ먀농ㄹ ㅣㅕㅑㅁ녀도ㅑㅣ ㄹ
                    </motion.p>
                    
                </div>

                {showContent && (
                    <Contact />
                )}
            </div>

            {!showContent && (
                <div className="page">
                    <Contact />
                </div>
            )}
        </div>
    )
}

export default AboutAndContact