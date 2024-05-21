import './index.scss'
import Loader from 'react-loaders'
import './index.scss'
import { motion } from 'framer-motion'

const Dev = () => {

    return (
        <>
            <div className="container dev-page">
                <div className="page">

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #401422', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '240vh solid transparent', borderRight: '180vh solid #401422' }}
                    transition={{ delay: 1, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #210e14', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '216vh solid transparent', borderRight: '160vh solid #210e14' }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #36242a', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '192vh solid transparent', borderRight: '140vh solid #36242a' }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                />

                <motion.div
                    initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #130e10', borderBottom: '0px solid transparent', bottom: 0, right: 0, }}
                    animate={{ borderTop: '168vh solid transparent', borderRight: '120vh solid #130e10' }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                <div className="text-zone">
                    <h1>
                        <motion.span
                            initial={{ fontSize: 64, position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                            animate={{ color: '#ff2164', opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}>
                            Android Development
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ fontSize: 42, fontWeight: 800, position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                            animate={{ color: '#ff2164', opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}>
                            안드로이드 앱 개발
                        </motion.span>
                        <br />
                    </h1>

                    <h1 className="techs">
                        <span className="techs">
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 20 }}
                                transition={{ delay: 1.6, duration: 0.5 }}>
                                {">> Kotlin"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 40 }}
                                transition={{ delay: 1.7, duration: 0.5 }}>
                                {">> Java"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 60 }}
                                transition={{ delay: 1.8, duration: 0.5 }}>
                                {">> Jetpack Compose"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 80 }}
                                transition={{ delay: 1.9, duration: 0.5 }}>
                                {">> Coroutines"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 100 }}
                                transition={{ delay: 2, duration: 0.5 }}>
                                {">> Room Database"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 120 }}
                                transition={{ delay: 2.1, duration: 0.5 }}>
                                {">> Retrofit"}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ position: 'absolute', color: '#fff', opacity: 0, x: -300 }}
                                animate={{ color: '#f1ced9', opacity: 1, x: 140 }}
                                transition={{ delay: 2.2, duration: 0.5 }}>
                                {">> Firebase"}
                            </motion.span>
                            <br />
                            <br />
                            <br />
                            <motion.span 
                                className="experience"
                                initial={{ scale: 2, filter: 'blur(30px)', opacity: 0 }}
                                animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}>

                                <motion.span
                                    initial={{ position: 'absolute', color: '#fff', fontSize: 28, fontFamily: "Coolvetica", fontWeight: 400, x: 10, y: 10 }}
                                    animate={{ color: '#ff2164' }}
                                    transition={{ delay: 1.7, duration: 1 }}>
                                    {"Experience"}
                                </motion.span>

                                <br />
                                <br />
                                <ul>
                                    <li>
                                        2019 Accepted to University of Rochester, BS in Computer Science
                                        <br />
                                        로체스터 대학교 컴퓨터공학과 입학
                                    </li>
                                    <br />
                                    <li>
                                        2020 Transferred to Georgia Institute of Technology, BS in Computational Media
                                        <br />
                                        조지아 공과대학교 전산미디어학과 편입
                                    </li>
                                    <br />
                                    <li>
                                        2022 Graduated from Georgia Institute of Technology, Highest Honor
                                        <br />
                                        조지아 공과대학교 최우수졸업
                                    </li>
                                </ul>

                            </motion.span>
                        </span>
                    </h1>
                </div>

                <div className="project-zone">
                    <motion.span 
                        className="project"
                        initial={{ rotateY: '180deg', opacity: 0, top: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}>
                        
                        Project 1
                    </motion.span>
                    <motion.span 
                        className="project"
                        initial={{ rotateY: '180deg', opacity: 0, bottom: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.5 }}>
                        
                        Project 2
                    </motion.span>
                </div>
            </div>
        </div>

        <Loader type="pacman" />
    </>
    )
}

export default Dev