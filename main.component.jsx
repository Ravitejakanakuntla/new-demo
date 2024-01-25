import React, { useState, useEffect } from 'react';
import './main.component.css';
import republic from './../../src/images/republic.jpg'
import furniture from "../../src/images/furniture.jpg"
import dinesh from "./../../src/images/dinesh.jpeg"
import tution from './../../src/images/tution.jpeg'
import car from './../../src/images/car.jpeg'
import real from './../../src/images/real.jpeg'
import mechanic from './../../src/images/mechanic.jpeg'
import transport from '../images/transport.jpg'


import just from './../../src/images/just.webp'
import { Facebook, Google, Twitter, Youtube } from 'react-bootstrap-icons';


export function MainComponent() {
  const [slideIndex, setSlideIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 1500);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }
  


  return (
    <div>

      <div className="slideshow-container">
        <div className="mySlides fade">

          <img src={republic} width="1583" height="400" alt="Slide 1" />


        </div>

        <div className="mySlides fade">

          <img src={furniture} width="1583" height="400" alt="Slide 2" />

        </div>
        <div className="mySlides fade">

          <img src={dinesh} width="1583" height="400" alt="Slide 3" />

        </div>
      </div>

      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>


      <div>
        <div class="rrr">
          <img src={tution} width={10} alt="Avatar" class="image"></img>
          <div class="overlay">
    <div class="text">explore</div></div>
          <div className='rrrr'>
          <img src={car} width={10} alt="Avatar" class="images"></img>
         
          <div class="overlays">
    <div class="text">explore</div></div>
  </div>
         <div className='rr'>
          <img src={real} width={10} alt="Avatar" class="imag"></img>
          <div class="overla">
    <div class="text">explore</div></div>
     </div>
     <div className='r'>

          <img src={transport} width={10} alt="Avatar" class="ima"></img>
          <div class="overl">
    <div class="text">explore</div></div>
     
          </div>
          <div className='k'>
          <img src={mechanic} width={10} alt="Avatar" class="im"></img>
          <div class="over">
            <div class="text">explore</div>
          </div>
        </div>
        </div>
        {/* <div class="rrr">
<img src={tution}width={10} alt="Avatar" class="image"></img> 
  <div class="overlay">
    <div class="text">explore</div>
  </div>
</div> */}
      </div><br></br><br></br>
      <div className='like'>
        <h1 className='sea'>Our Services</h1>
        <div className=''>.<hr className='line'></hr>
        </div>
      </div>
      <br></br><br></br><br></br>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>AIR CARGO</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
            </svg>


          </div>
        </div>
      </div>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>SURFACE CARGO</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-signpost-fill" viewBox="0 0 16 16">
              <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707" />
            </svg>


          </div>
        </div>
      </div>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>INTERNATIONAL FORWARDING</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-globe-asia-australia" viewBox="0 0 16 16">
              <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.6.6 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.45.45 0 0 0 .138-.326M5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.7.7 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52z" />
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z" />
            </svg>


          </div>
        </div>
      </div><br></br><br></br><br></br>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>WAREHOUSING</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16">
              <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z" />
              <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z" />
            </svg>


          </div>
        </div>
      </div>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>FULL TRUCK LOAD</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>


          </div>
        </div>
      </div>
      <div className='stud'>
        <div class="card">
          <div class="card-title">
            <h5 className='tend'>DIPLOMAT SERVICE</h5>
          </div>
          <div class="card-body">
            <h9>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h9>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>
            </div>
        </div>
      </div><br></br><br></br><br></br>
          <div className="black-li">
                <div className="black-lii">
                    
                    <div>
                        <h6 className="center-li"></h6>
                    </div>
                </div>
                <section className="footer-columns">

                    <section>
                        <ul>

                            <h3>MAIN MENU</h3>
                            <a href="/">
                                <div>HOME</div></a>

                            <a href="/doctor">Doctors</a>
                            <a href="/appointment">
                                <div>Make An Appointement</div></a>

                            <a href="/login"><div>Login</div></a>

                        </ul>
                    </section>



                    <section>
                        <ul className="header-li">
                            <h3>HELP AND SUPPORT</h3>
                            <a href="/contact">
                                <div>ContactUS</div></a>

                            <a href="/about">Aboutus</a>
                            <a href="/blog">
                                <div >Blog</div></a>

                        </ul>
                    </section>
                </section>
            </div>
            <div className="cot-lii">
                <div className="cot-li">
                    <h7>copyright@creativeitem | 2017</h7>
                    <div className="copy-lii">
                        <Facebook></Facebook>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Twitter></Twitter>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Google></Google>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Youtube></Youtube>
                    </div>
                </div>

            </div>


    </div>
  );
}