
import React from 'react';
import Navbar from './components/base/Navbar/Navbar';
import Headers from './components/Header/Header';
import About from './components/main/section/About/About';
import Jumbotron from './components/main/section/Jumbotron/Jumbotron';
import JumbotronImage from   './components/main/section/Jumbotron/Items';
import CardGroup from './components/main/section/CardGroup/CardGroup';
import SectionFooter from './components/main/section/Footer/SectionFooter';
import Footer from './components/base/Footer/Footer';
function App() {
  return (
    <React.Fragment>
      {/* Navbar Start */}
      <div className="container " data-aos="fade-down"
     data-aos-duration="1000">
        <div className="row">
          <Navbar />
        </div>
      </div>
      {/* Navbar End */}
      {/* Header Start */}
      <div className="bg-blue" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="container">
      
            <Headers />
         
        </div> 
      </div>
      {/* Header End  */}
      {/* Section Start 1*/}
      <section className="container" data-aos="fade-left"
     data-aos-duration="3000">
         <div className="row mt-5">
           <About />
         </div>
      </section>
      {/* Section End 1 */}
      {/* Section Start 2 */}
      <div className="bg-light" data-aos="fade-right"
     data-aos-duration="3000">
      <section className="container">
         <div className="row mt-5">
           <div className="col-md-6">
           <Jumbotron />
           </div>
          <div className="col-md-6">
          <JumbotronImage />
          </div>
         
         </div>
      </section>
      </div>
      {/* Section End 2 */}
      {/* Section Start 3 */}
       <section className="container" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <CardGroup />
       </section>
      {/* Section End 3 */}
      {/* Section Footer Start */}
        <section className="bg-light" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> 
          <div className="container">
            <div className="row">
              <SectionFooter />
               </div>
          </div>
        </section>
      {/* Section Footer End */}

      {/* Footer Start */}
      <footer className="container" data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Footer/>
      </footer>
      {/* Footer End */}
    </React.Fragment>
  );
}

export default App;
