import { Link } from 'react-router-dom'
import './index.scss'
import { motion } from 'framer-motion'

const Page = ({titleEng, titleKor, descriptionEng, descriptionKor, mirror, link}) => {
    
    return (
        <div className="page-page">
          <div className="page">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '16%', left: (mirror ? 'auto' : '10%'), right: (mirror ? '10%' : 'auto'), background: '#36242a' },
              visible: { scale: 1, rotate: '90deg' }
          }}/>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '36%', left: (mirror ? 'auto' : '20%'), right: (mirror ? '20%' : 'auto'), background: '#401422' },
              visible: { scale: 1, rotate: '-90deg' }
          }}/>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: (window.innerWidth > 1200) ? 500 : '60vw', height: (window.innerWidth > 1200) ? 500 : '60vw', top: '26%', left: (mirror ? 'auto' : '30%'), right: (mirror ? '30%' : 'auto'), background: '#210e14' },
              visible: { scale: 1, rotate: '90deg' }
          }}/>

            <div className={mirror ? "right" : "left"}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
                variants={{
                  visible: { y: (window.innerWidth > 1200) ? -125 : -95 },
                  hidden: { y: 75 }
              }}>
                <motion.h1
                  className="can-do"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    visible: { color: '#f1ced9', opacity: 1, x: 0 },
                    hidden: { color: '#fff', opacity: 0, x: (mirror ? 200 : -200) }
                }}>
                  I can do:
                </motion.h1>
                <motion.h1
                  className="en"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    visible: { color: '#ff2164', opacity: 1, x: 0 },
                    hidden: { color: '#fff', opacity: 0, x: (mirror ? 200 : -200) }
                }}>
                  {titleEng}
                </motion.h1>
                <motion.h1
                  className="kr"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  variants={{
                    visible: { color: '#ff2164', opacity: 1, x: 0 },
                    hidden: { color: '#fff', opacity: 0, x: (mirror ? 200 : -200) }
                }}>
                  {titleKor}
                </motion.h1>
              </motion.div>

              <motion.div
                className="hr-div"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
                variants={{
                  visible: { scale: 1, right: (mirror ? 0 : 'auto') },
                  hidden: { scale: 0, right: (mirror ? 0 : 'auto') },
              }}>
                <motion.hr 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 1 }}
                  variants={{
                    visible: { y: (window.innerWidth > 1200) ? -100 : -80 },
                    hidden: { y: 0 },
                }}/>
                <motion.hr 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 1 }}
                  variants={{
                    visible: { y: (window.innerWidth > 1200) ? 163 : 133 },
                    hidden: { y: -7 },
                }}/>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 1 }}
                variants={{
                  visible: { opacity: 1, height: 150, y: -50 },
                  hidden: { opacity: 0, height: 150, y: -50 }
              }}>
                <motion.p className="en" initial={{ color: '#f1ced9' }}>
                  {descriptionEng}
                </motion.p>
                <br />
                <br />
                <motion.p className="kr" initial={{ color: '#f1ced9' }}>
                  {descriptionKor}
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  visible: { position: 'absolute', color: '#ff2164', opacity: 1, x: 0, right: (mirror ? 0 : 'auto') },
                  hidden: { position: 'absolute', color: '#fff', opacity: 0, x: (mirror ? 100 : -100), right: (mirror ? 0 : 'auto') },
              }}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 1 }}
                  variants={{
                    visible: { y: (window.innerWidth > 1200) ? 35 : 15 },
                    hidden: { y: 0 },
                }}>
                  <Link to={link} className="glow-on-hover">
                    EXPAND
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
    )
}

export default Page