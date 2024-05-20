import { Link } from 'react-router-dom'
import './index.scss'
import { motion } from 'framer-motion'

const Page = ({titleEng, titleKor, descriptionEng, descriptionKor, mirror, link}) => {
    
    return (
        <div className="page">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: 500, height: 500, top: '16%', left: (mirror ? 'auto' : '10%'), right: (mirror ? '10%' : 'auto'), background: '#36242a' },
              visible: { scale: 1, rotate: '90deg' }
          }}/>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: 500, height: 500, top: '36%', left: (mirror ? 'auto' : '20%'), right: (mirror ? '20%' : 'auto'), background: '#401422' },
              visible: { scale: 1, rotate: '-90deg' }
          }}/>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
            variants={{
              hidden: { position: 'absolute', scale: 0, width: 500, height: 500, top: '26%', left: (mirror ? 'auto' : '30%'), right: (mirror ? '30%' : 'auto'), background: '#210e14' },
              visible: { scale: 1, rotate: '90deg' }
          }}/>

          <div className={mirror ? "right" : "left"}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              variants={{
                visible: { y: -125 },
                hidden: { y: 75 }
            }}>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  visible: { fontSize: 20, lineHeight: 2, fontWeight:10, color: '#f1ced9', opacity: 1, x: 0 },
                  hidden: { fontSize: 20, lineHeight: 2, fontWeight:10, color: '#fff', opacity: 0, x: (mirror ? 300 : -300) }
              }}>
                I can do:
              </motion.h1>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  visible: { fontSize: 48, lineHeight: 1, fontWeight: 400, color: '#ff2164', opacity: 1, x: 0 },
                  hidden: { fontSize: 48, lineHeight: 1, fontWeight: 400, color: '#fff', opacity: 0, x: (mirror ? 300 : -300) }
              }}>
                {titleEng}
              </motion.h1>
              <br />
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                  visible: { fontSize: 36, lineHeight: 1.25, fontWeight: 800, color: '#ff2164', opacity: 1, x: 0 },
                  hidden: { fontSize: 36, lineHeight: 1.25, fontWeight: 800, color: '#fff', opacity: 0, x: (mirror ? 300 : -300) }
              }}>
                {titleKor}
              </motion.h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              variants={{
                visible: { position: 'absolute', width: 580, scale: 1, right: (mirror ? 0 : 'auto') },
                hidden: { position: 'absolute', width: 580, scale: 0, right: (mirror ? 0 : 'auto') },
            }}>
              <motion.hr 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 1 }}
                variants={{
                  visible: { y: -100 },
                  hidden: { y: 0 },
              }}/>
              <motion.hr 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 1 }}
                variants={{
                  visible: { y: 173 },
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
              <motion.h1 initial={{ fontSize: 20, lineHeight: 1.5, fontWeight: 10, fontFamily: 'sans-serif', color: '#f1ced9' }}>
                {descriptionEng}
              </motion.h1>
              <br />
              <br />
              <motion.h1 initial={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, fontFamily: 'sans-serif', color: '#f1ced9' }}>
                {descriptionKor}
              </motion.h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                visible: { position: 'absolute', color: '#ff2164', opacity: 1, x: 0, right: (mirror ? 0 : 'auto') },
                hidden: { position: 'absolute', color: '#fff', opacity: 0, x: (mirror ? 300 : -300), right: (mirror ? 0 : 'auto') },
            }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 1 }}
                variants={{
                  visible: { y: 55, },
                  hidden: { y: 0 },
              }}>
                <Link to={link} className="glow-on-hover">
                  EXPAND
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
    )
}

export default Page