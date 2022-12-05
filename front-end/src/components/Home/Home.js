import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../../assets/images/LogoInitial.png'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    const name= "ihaela Teodorof"
    const job='Web Developer'

    const nameArray=name.split("");
    const jobArray=job.split("");

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div id="home" className="container home">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>                
            <img src={Logo} alt='logo' style={{width:"70px", heigh:"70px"}}/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </h1>
                
                <h2>Full-Stack Developer</h2>
                <a href='https://www.linkedin.com/in/mihaelateodorof/' 
                target={"_blank"} rel="noreferrer" className="contact-link">Contact Me</a>
                {/* <Link to='/contact' className="contact-link"> Contact Me</Link> */}
            </div>
        </div>
        </>
    )
}

export default Home