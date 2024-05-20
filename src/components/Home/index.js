import Loader from 'react-loaders'
import Page from './Page'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import { motion } from 'framer-motion'

const Home = () => {
  const letterClass = "text-animate"
  const nameArray1 = ['e', 'v', 'i', 'n.']
  const nameArray2 = ['민', '경', '한', ' ', '입', '니', '다.']

  return (
    <>
      <div className="container home-page">
        <div className="page">

          <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #401422', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '120vh solid #401422', borderBottom: '90vh solid transparent' }}
            transition={{ delay: 1, duration: 0.5 }}
          />

          <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #210e14', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '108vh solid #210e14', borderBottom: '80vh solid transparent' }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />

          <motion.div
            initial={{  position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #36242a', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '96vh solid #36242a', borderBottom: '70vh solid transparent' }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />

          <motion.div
            initial={{ position: 'absolute', borderTop: '0px solid transparent', borderRight: '0px solid #130e10', borderBottom: '0px solid transparent', top: 0, right: 0, }}
            animate={{ borderTop: '0px solid transparent', borderRight: '84vh solid #130e10', borderBottom: '60vh solid transparent' }}
            transition={{ delay: 1.6, duration: 0.5 }}
          />

          <Logo />
          <div className="text-zone">
            <h1>
              <span className='topHalf'>
                <span className={`${letterClass} _0`}>H</span>
                <span className={`${letterClass} _1`}>i,</span>
                <br />
                <span className={`${letterClass} _2`}>I</span>
                <span className={`${letterClass} _3`}>'m</span>
                <span className="smallIcon">
                  <img
                    src={LogoTitle}
                    alt="JavaScript Developer Name, Web Developer Name"
                  />
                </span>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray1}
                  idx={4}
                />
                <hr className='topLine' />
              </span>

              <span className='middleTop'>
                Android Developer / Illustrator / Translator
              </span>
              <span className='middleBottom'>
                안드로이드 개발자 / 일러스트레이터 / 번역가
              </span>
              
              <span className="bottomHalf">
                <hr className='bottomLine' />
                <br />
                <span className={`${letterClass} _0`}>안</span>
                <span className={`${letterClass} _1`}>녕</span>
                <span className={`${letterClass} _2`}>하</span>
                <span className={`${letterClass} _3`}>세</span>
                <span className={`${letterClass} _4`}>요,</span>
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray2}
                  idx={7}
                />
              </span>
            </h1>
          </div>
        </div>
        
        <Page 
          titleEng="Android Development"
          titleKor="안드로이드 앱 개발"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={false}
          link="/dev"
        />

        <Page 
          titleEng="Character Illustration"
          titleKor="케릭터 일러스트레이션"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={true}
          link="/art"
        />

        <Page 
          titleEng="KR⇄EN Translation"
          titleKor="한영/영한번역"
          descriptionEng="This is a placeholder description text that is to be replaced later on with something that actually describes this section with sufficient detail, while keeping things concise at the same time."
          descriptionKor="이 문장은 위 영어 문장을 한국어로 번역한 문장이 될 것이나 아직 위 문장을 완성하지 못했기 때문에 이 문장 역시 임시방편으로 별 의미 없는 내용으로 구성되어 있습니다."
          mirror={false}
          link="/lang"
        />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
