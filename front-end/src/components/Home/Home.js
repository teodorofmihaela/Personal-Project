import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './Home.scss'


const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    const name= "Mihaela"
    const job='web developer'

    const nameArray=name.split("");
    const jobArray=job.split("");


    return(
        <>
        <div className="container home">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                </h1>
                <h2>Frontend Developer</h2>
                <Link to='/contact' className="contact"> Contact Me</Link>
            </div>
        </div>
        </>
    )
}

export default Home