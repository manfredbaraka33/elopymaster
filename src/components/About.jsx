import React,{useEffect,useRef} from 'react'
import mypic from "/src/assets/mmi.png"
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from 'typed.js';
import Skills from './Skills';
import Education from './Education';




const About = () => {

    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ["⭐  About Me  ⭐"],
          typeSpeed: 40,
          showCursor: false, // Optional: remove cursor
        });
    
        return () => typed.destroy();
      }, []);
    

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div className='container-fluid'>
        <div className='mypic'>
            <center>
                <img src={mypic} className='rounded-circle border border-warning' alt="" />
            </center>
        </div>
        <div className="container-fluid text-light my-2">
        
            <div className="row">
            <center>
            <div className="col mx-0"> 
            <div className = "about-me rounded p-3 slide-in-fast"  data-aos="flip-up">
            <h4 className='text-warning' ref={typedRef}></h4>
            <p>Hi! I’m <strong>Manfred Baraka</strong>, a multidisciplinary tech professional based in <strong>Dodoma, Tanzania</strong>.</p>

            <p>I specialize in <strong>Full Stack Web Development</strong>, <strong>Data Science</strong> (with a focus on <strong>ML & NLP</strong>), and building intelligent, scalable systems across diverse domains.</p>

            <p>My passion lies in turning complex ideas into practical, impactful solutions — from web platforms to AI-powered tools.</p>

            <p>Outside of work, I enjoy exploring new tech, refining side projects, and contributing to innovations that matter locally and globally.</p>
            </div>
            </div>
            </center>
            </div>


          <div data-aos="flip-up" className="container-fluid about-me rounded mt-3">
          
              <Skills />
        </div>

        <div data-aos="flip-up" className="about-me rounded mt-3 others">
            <Education />
        </div>


        <div data-aos="flip-up" className="about-me rounded mt-3 p-3 others">
            <center>
            <h5 className="mt-4 text-warning">🧠 What I Actually Do (Besides Googling Errors)</h5>
            <p className="fst-italic">
            "I break stuff until it works, explain AI to humans, and build web apps that (usually) don’t crash. I code like it’s a superpower and debug like it’s therapy."
            </p>
            </center>

        </div>




        </div>
       
        <br /><br /><br /><br />
    </div>
  )
}

export default About
