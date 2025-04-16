// import React from 'react'
// import About from '../components/About'
// import Projects from '../components/Projects'
// import Contacts from '../components/Contacts'

// const Home = () => {
//   return (
//    <div  className="container-fluid p-2">
//     <div style={{backgroundColor:"rgba(0, 0, 0, 0.8)"}} className='row fixed-top pt-3'>
//     <center>
//         <div className="col-lg-10 col-sm-12  col-md-10 mt-3 ">
//         <ul className="nav nav-tabs   justify-content-center" id="inputTab" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button className="nav-link active border-light"  id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab">
//            About
//           </button>
//         </li>
//         <li className="nav-item mx-3" role="presentation">
//           <button className="nav-link border-light" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab">
//            Projects
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button className="nav-link border-light" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts" type="button" role="tab">
//            Contacts
//           </button>
//         </li>
//       </ul>
      
//     </div>
//     </center> 
//     </div>

//     <div className="tab-content container-fluid py-5" id="inputTabContent">
//         <br /><br />
//     <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
//         <About />
//     </div>
//     <div className="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab">
//         <Projects />
//     </div>

//     <div className="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
//         <Contacts />
//     </div>

//     </div>

   
//     </div>
//   )
// }

// export default Home


import React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <div className="fixed-top bg-dark py-3" style={{ zIndex: 1000 }}>
        <div className="container">
          <ul className="nav nav-tabs justify-content-center" id="inputTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active text-light" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab">
                About
              </button>
            </li>
            <li className="nav-item mx-3" role="presentation">
              <button className="nav-link text-light" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab">
                Projects
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-light" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts" type="button" role="tab">
                Contacts
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content below navbar */}
      <div className="tab-content container-fluid pt-5 mt-5" id="inputTabContent">
        <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
          <About />
        </div>
        <div className="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab">
          <Projects />
        </div>
        <div className="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default Home

